import { useEffect, useState } from "react";

const AppliedTrainer = () => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/trainerApplication')
            .then(res => res.json())
            .then(data => setTrainers(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2 className="text-4xl text-center font-semibold border-b-2 border-yellow-500 w-80 mx-auto p-2 mb-10 mt-5">Applied Trainers</h2>
            <div className="overflow-x-auto lg:w-3/4 mx-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            {/* <th>Skills</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trainers.map((trainer, index) => (
                            <tr key={trainer._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={trainer.image} alt="Avatar" />
                                        </div>
                                    </div>
                                </td>
                                <td>{trainer.name}</td>
                                <td>
                                    {/* <div className="flex flex-wrap">
                                        {trainer.skills && typeof trainer.skills === 'object' ? (
                                            Object.keys(trainer.skills).map((key, skillIndex) => (
                                                <span key={skillIndex} className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-md mr-2 mb-2">
                                                    {trainer.skills[key]}
                                                </span>
                                            ))
                                        ) : (
                                            <span>No skills data available</span>
                                        )}
                                    </div> */}
                                </td>
                                <td>
                                    <i className="fa-solid fa-eye cursor-pointer"></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppliedTrainer;
