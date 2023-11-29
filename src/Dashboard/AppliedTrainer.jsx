import { useEffect, useState } from "react";

const AppliedTrainer = () => {
    const [trainers, setTrainers] = useState([]);
    const [selectedTrainer, setSelectedTrainer] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/trainerApplication')
            .then(res => res.json())
            .then(data => setTrainers(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const openModal = (trainer) => {
        setSelectedTrainer(trainer);
    };

    const closeModal = () => {
        setSelectedTrainer(null);
    };

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
                            <th>Role</th>
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
                                <td>Member</td>
                                <td>
                                    <button className="btn" onClick={() => openModal(trainer)}>
                                        <i className="fa-solid fa-eye"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedTrainer && (
                <dialog className="modal modal-bottom sm:modal-middle" open>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">{selectedTrainer.name} Details</h3>
                        <p>{selectedTrainer.
                            salary}</p>
                        <p>{selectedTrainer.

                            age}</p>
                        <p>{selectedTrainer.

                            timeDay}</p>
                        <div className="modal-action">
                            <button className="btn btn-success text-white">Confirm</button>
                            <button className="btn btn-error text-white">Reject</button>
                            <button className="btn btn-warning text-white" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default AppliedTrainer;
