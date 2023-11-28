import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 bg-[#ffd166] h-screen">
                <ul className="p-5">
                    <li className="font-medium mb-3"><NavLink to="/dashboard/subscriber"><i className="fas fa-user-check"></i> All Subscribers</NavLink></li>
                    <li className="font-medium mb-3"><NavLink to="/dashboard/allTrainer"> <i className="fas fa-chalkboard-teacher"></i> All Trainers</NavLink></li>
                    <li className="font-medium mb-3"><NavLink to="/dashboard/appliedTrainer"><i className="fas fa-check-circle"></i> Applied Trainer</NavLink></li>
                    <li className="font-medium mb-3"><NavLink> <i className="fa-solid fa-dollar-sign"></i> Balance</NavLink></li>
                    <div className="divider"></div>
                    <li className="font-medium mb-3"><NavLink to="/"><i className="fa-solid fa-house"></i> Home</NavLink></li>
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