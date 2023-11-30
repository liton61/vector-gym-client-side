import { useEffect, useState } from "react";


const ManageSlots = () => {
    const [trainers, setTrainers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/trainerApplication?role=trainer')
            .then(res => res.json())
            .then(data => setTrainers(data))
    }, [])
    return (
        <div>
            <h2 className="text-4xl text-center font-semibold border-b-2 border-yellow-500 w-80 mx-auto p-2 mb-10 mt-5">Time Slots</h2>
            <div>
                <div className="overflow-x-auto lg:w-3/4 mx-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="bg-yellow-500 text-white font-medium">
                                <th>#</th>
                                <th>Day</th>
                                <th>Time</th>
                                {/* <th>Salary</th> */}
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
                                    {/* <td><button className="btn btn-success text-white">Pay Now</button></td> */}
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageSlots;