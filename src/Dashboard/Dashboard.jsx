import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useTrainer from "../hooks/useTrainer";
// import useMember from "../hooks/useMember";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isTrainer] = useTrainer();
    // console.log(isTrainer);
    // const [isMember] = useMember();
    const isMember = !isAdmin && !isTrainer;
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="lg:flex">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-none hidden lg:block lg:w-64 bg-[#ffd166] min-h-screen">
                            <ul className="menu fixed">
                                {isAdmin ? (
                                    <>
                                        <li className="font-medium mb-3"><NavLink to="/dashboard/db"><i className="fa-solid fa-house"></i> Admin Home</NavLink></li>
                                        <li className="font-medium mb-3"><NavLink to="/dashboard/subscriber"><i className="fas fa-user-check"></i> All Subscribers</NavLink></li>
                                        <li className="font-medium mb-3"><NavLink to="/dashboard/allTrainer"> <i className="fas fa-chalkboard-teacher"></i> All Trainers</NavLink></li>
                                        <li className="font-medium mb-3"><NavLink to="/dashboard/appliedTrainer"><i className="fas fa-check-circle"></i> Applied Trainer</NavLink></li>
                                        <li className="font-medium mb-3"><NavLink to="/dashboard/addNewForum"><i className="fa-solid fa-recycle"></i> Add new Forum</NavLink></li>
                                        <li className="font-medium mb-3"><NavLink to="/dashboard/allUsers"> <i className="fa-solid fa-users"></i> All Users</NavLink></li>
                                    </>
                                ) : isTrainer ? (
                                    <>
                                        <li className="font-medium mb-3"><NavLink to="/dashboard/db"><i className="fa-solid fa-house"></i>  Trainer Home</NavLink></li>
                                        <li className="font-medium mb-3"><NavLink to="/dashboard/manageSlots"><i className="fa-solid fa-bars"></i>  Manage Slots</NavLink></li>
                                        <li className="font-medium mb-3"><NavLink to="/dashboard/manageMember"> <i className="fa-solid fa-user-group"></i>  Manage member</NavLink></li>
                                        <li className="font-medium mb-3"><NavLink to="/dashboard/addNewForum"><i className="fa-solid fa-recycle"></i> Add new Forum</NavLink></li>
                                        <li className="font-medium mb-3"><NavLink to="/dashboard/addNewClass"> <i className="fa-solid fa-dumbbell"></i> Add new Class</NavLink></li>
                                    </>
                                ) : isMember ? (
                                    <>
                                        <li className="font-medium mb-3"><NavLink to="/dashboard/db"><i className="fa-solid fa-house"></i>  Member Home</NavLink></li>
                                        <li className="font-medium mb-3"><NavLink to="/dashboard/activityLog"><i className="fa-solid fa-chart-line"></i> Activity Log</NavLink></li>
                                        <li className="font-medium mb-3"><NavLink to="/dashboard/profile"><i className="fa-solid fa-user"></i>  Profile Settings</NavLink></li>
                                        <li className="font-medium mb-3"><NavLink to="/dashboard/recommendedClasses"><i className="fas fa-check-circle"></i> Recommended Classes</NavLink></li>
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
                        <div className="lg:w-full">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-success">
                        {/* Sidebar content here */}
                        {
                            isAdmin ?
                                <>
                                    <li className="font-medium mb-2"><NavLink
                                        to="/dashboard/adminHome"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <i className="fa-solid fa-house"></i>Admin Home
                                    </NavLink></li>
                                    <li className="font-medium mb-2"><NavLink
                                        to="/dashboard/addItems"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <i className="fa-solid fa-utensils"></i> Add Items
                                    </NavLink></li>
                                    <li className="font-medium mb-2"><NavLink
                                        to="/dashboard/manageItems"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <i className="fa-solid fa-list"></i> Manage Items
                                    </NavLink></li>
                                    <li className="font-medium mb-2"><NavLink
                                        to="/dashboard/allUsers"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <i className="fa-solid fa-users"></i> All Users
                                    </NavLink></li>
                                </>
                                :
                                <>
                                    <li className="font-medium mb-2"><NavLink
                                        to="/dashboard/userHome"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <i className="fa-solid fa-house"></i>User Home
                                    </NavLink></li>
                                    <li className="font-medium mb-2"><NavLink
                                        to="/dashboard/review"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <i className="fa-solid fa-user-pen"></i> Review
                                    </NavLink></li>
                                </>
                        }
                        <div className="divider">OR</div>
                        <li className="font-medium mb-2"><NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            <i className="fa-solid fa-house"></i> Home
                        </NavLink></li>
                    </ul>
                </div>
            </div>
            <Helmet>
                <title>Vector Gym | All Subscribers</title>
            </Helmet>
        </div>
    );
};

export default Dashboard;
