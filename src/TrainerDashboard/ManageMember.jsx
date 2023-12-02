import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";


const ManageMember = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users?role=member');
            return res.data;
        }
    })
    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-4xl text-center font-semibold border-b-2 border-yellow-500 w-80 mx-auto p-2 mb-10 mt-5">All Members</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-3/4 mx-auto">
                    {/* head */}
                    <thead>
                        <tr className="bg-yellow-500 text-white font-medium">
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>{user.email ? user.email : user.user}</td>
                                <td><i className="fa-solid fa-trash-can text-lg text-red-600 cursor-pointer"></i></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <Helmet>
                <title>Vector Gym | Manage Member</title>
            </Helmet>
        </div>
    );
};

export default ManageMember;