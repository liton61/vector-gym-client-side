import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [active, setActive] = useState(false)
    return (
        <div>
            <div className="navbar bg-[#ffd166]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="mx-2 font-medium"><NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink></li>
                            <li className="mx-2 font-medium"><NavLink
                                to="/gallery"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""}>Gallery</NavLink></li>
                            <li className="mx-2 font-medium"><NavLink
                                to="/trainer"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""}>Trainer</NavLink></li>
                            <li className="mx-2 font-medium"><NavLink
                                to="/classes"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""}>Classes</NavLink></li>
                            <li className="mx-2 font-medium"><NavLink
                                to="/dashboard/db"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""}>Dashboard</NavLink></li>
                            <li className="mx-2 font-medium"><NavLink
                                to="/forum"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""}>Forum</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <img className="w-24" src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="mx-2 font-medium"><NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink></li>
                        <li className="mx-2 font-medium"><NavLink
                            to="/gallery"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""}>Gallery</NavLink></li>
                        <li className="mx-2 font-medium"><NavLink
                            to="/trainer"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""}>Trainer</NavLink></li>
                        <li className="mx-2 font-medium"><NavLink
                            to="/classes"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""}>Classes</NavLink></li>
                        <li className="mx-2 font-medium"><NavLink
                            to="/dashboard/db"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""}>Dashboard</NavLink></li>
                        <li className="mx-2 font-medium"><NavLink
                            to="/forum"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""}>Forum</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.email ? (
                        <div className="dropdown dropdown-end ">
                            <label tabIndex={0} className="cursor-pointer">
                                <div className="">
                                    <div className="w-14 rounded-full">
                                        <img onClick={() => setActive(!active)} className="w-14 rounded-full " src={user?.photoURL} alt={user?.displayName} />
                                    </div>
                                </div>
                            </label>

                            {
                                active && (
                                    <div
                                        tabIndex={0}
                                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                                    >

                                        <h1 className="px-4 py-2 hover:bg-base-300 rounded-lg" > {user?.displayName} </h1>

                                        <p className="px-4 py-2 hover:bg-base-300 rounded-lg "> {user.email} </p>
                                        <div
                                            onClick={logOut}
                                            className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg"
                                        >
                                            <i className="fa-solid fa-right-from-bracket text-red-500"></i> Sign Out
                                        </div>

                                    </div>
                                )
                            }

                        </div>
                    ) : (
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? 'btn btn-neutral' : 'btn btn-neutral'
                            }
                        >
                            Login
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;