import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";


const ManageSlots = () => {
    const [trainers, setTrainers] = useState([]);
    useEffect(() => {
        fetch('https://vector-gym-server-side.vercel.app/trainerApplication?role=trainer')
            .then(res => res.json())
            .then(data => setTrainers(data))
    }, [])
    return (
        <div>
            <h2 className="text-4xl text-center font-bold mb-10 mt-5">Time Slots</h2>
            <div>
                <div className="overflow-x-auto lg:w-3/4 mx-auto lg:px-0 px-5">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#ffd166] font-medium">
                                <th>#</th>
                                <th>Day</th>
                                <th>Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                trainers.map((trainer, index) => <tr key={trainer._id}>
                                    <th>{index + 1}</th>
                                    {/* <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={trainer.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div> */}
                                    <td>{trainer.timeWeek}</td>
                                    <td>{trainer.timeDay}</td>
                                    <td><i className="fa-solid fa-trash-can text-lg text-red-600 cursor-pointer"></i></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Helmet>
                <title>Vector Gym | Manage Slots</title>
            </Helmet>
        </div>
    );
};

export default ManageSlots;