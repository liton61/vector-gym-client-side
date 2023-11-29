import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useTrainer from "../hooks/useTrainer";
import useMember from "../hooks/useMember";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isTrainer] = useTrainer();
    const [isMember] = useMember();
    return (
        <div className="flex">
            <div className="w-64 bg-[#ffd166] h-screen">
                <ul className="p-5">
                    {isAdmin ? (
                        <>
                            <li className="font-medium mb-3"><NavLink to="/dashboard"><i className="fa-solid fa-house"></i> Admin Home</NavLink></li>
                            <li className="font-medium mb-3"><NavLink to="/dashboard/subscriber"><i className="fas fa-user-check"></i> All Subscribers</NavLink></li>
                            <li className="font-medium mb-3"><NavLink to="/dashboard/allTrainer"> <i className="fas fa-chalkboard-teacher"></i> All Trainers</NavLink></li>
                            <li className="font-medium mb-3"><NavLink to="/dashboard/appliedTrainer"><i className="fas fa-check-circle"></i> Applied Trainer</NavLink></li>
                            <li className="font-medium mb-3"><NavLink to="/balance"> <i className="fa-solid fa-dollar-sign"></i> Balance</NavLink></li>
                            <li className="font-medium mb-3"><NavLink to="/dashboard/allUsers"> <i className="fa-solid fa-dollar-sign"></i> All Users</NavLink></li>
                        </>
                    ) : isTrainer ? (
                        <>
                            <li className="font-medium mb-3"><NavLink to="/dashboard"><i className="fa-solid fa-house"></i>  Trainer Home</NavLink></li>
                            <li className="font-medium mb-3"><NavLink to="/dashboard/subscriber"><i className="fas fa-user-check"></i>  Manage Slots</NavLink></li>
                            <li className="font-medium mb-3"><NavLink to="/dashboard/allTrainer"> <i className="fas fa-chalkboard-teacher"></i>  Manage member</NavLink></li>
                            <li className="font-medium mb-3"><NavLink to="/dashboard/appliedTrainer"><i className="fas fa-check-circle"></i> Add new Forum</NavLink></li>
                            <li className="font-medium mb-3"><NavLink> <i className="fa-solid fa-dollar-sign"></i> Add new Class</NavLink></li>
                        </>
                    ) : isMember ? (
                        <>
                            <li className="font-medium mb-3"><NavLink to="/dashboard"><i className="fa-solid fa-house"></i>  Member Home</NavLink></li>
                            <li className="font-medium mb-3"><NavLink to="/dashboard/subscriber"><i className="fas fa-user-check"></i> Activity Log</NavLink></li>
                            <li className="font-medium mb-3"><NavLink to="/dashboard/allTrainer"> <i className="fas fa-chalkboard-teacher"></i>  Profile Settings</NavLink></li>
                            <li className="font-medium mb-3"><NavLink to="/dashboard/appliedTrainer"><i className="fas fa-check-circle"></i> Recommended Classes Page</NavLink></li>
                            <li className="font-medium mb-3"><NavLink> <i className="fa-solid fa-dollar-sign"></i> Add new Class</NavLink></li>
                        </>
                    ) : (
                        <>
                            {/* Default Links for non-admin, non-trainer, non-member */}
                        </>
                    )}

                    <div className="divider"></div>
                    <li className="font-medium mb-3">
                        <NavLink to="/">
                            <i className="fa-solid fa-house"></i> Home
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            <Helmet>
                <title>Vector Gym | Dashboard</title>
            </Helmet>
        </div>
    );
};

export default Dashboard;
