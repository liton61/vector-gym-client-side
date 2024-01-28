import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const AppliedTrainer = () => {
    const [trainers, setTrainers] = useState([]);
    const [selectedTrainer, setSelectedTrainer] = useState(null);

    const fetchTrainers = () => {
        fetch('https://vector-gym-server-side.vercel.app/trainerApplication?role=member')
            .then(res => res.json())
            .then(data => {
                setTrainers(data);
                console.log(data);
                localStorage.setItem('appliedTrainers', JSON.stringify(data));
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    useEffect(() => {
        // const storedTrainers = localStorage.getItem('appliedTrainers');
        // if (storedTrainers) {
        //     setTrainers(JSON.parse(storedTrainers));
        // } else {
        //     fetchTrainers();
        // }
        fetchTrainers();
    }, []);

    const openModal = (trainer) => {
        setSelectedTrainer(trainer);
    };

    const closeModal = () => {
        setSelectedTrainer(null);
    };

    const handleConfirm = (e, id) => {
        e.preventDefault();

        const d = { role: 'trainer' };
        fetch(`https://vector-gym-server-side.vercel.app/trainerApplication/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(d)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    // Close the modal
                    closeModal();

                    // Filter out the confirmed trainer from the UI
                    const updatedTrainers = trainers.filter(trainer => trainer._id !== id);
                    setTrainers(updatedTrainers);
                    localStorage.setItem('appliedTrainers', JSON.stringify(updatedTrainers));
                }
            })
            .catch(error => {
                console.error('Error confirming trainer:', error);
                // Handle error state or display an error message to the user
            });
    };

    const handleReject = _id => {
        // console.log(_id);
        fetch(`https://vector-gym-server-side.vercel.app/trainerApplication/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data)
                    closeModal();
                const updatedTrainers = trainers.filter(trainer => trainer._id !== _id);
                setTrainers(updatedTrainers);
                localStorage.setItem('appliedTrainers', JSON.stringify(updatedTrainers));
            });
    }

    return (
        <div>
            {
                trainers.length > 0 ? (
                    <div>
                        <h2 className="text-4xl text-center font-bold mb-10 mt-5">Applied Trainers</h2>
                        <div className="overflow-x-auto lg:w-3/4 mx-auto lg:px-0 px-5">
                            <table className="table table-zebra">
                                {/* Table headers */}
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
                                    {/* Render trainers */}
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
                                            <td>{trainer.role}</td>
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
                    </div>
                ) :
                    (
                        <p className="text-3xl font-bold flex justify-center items-center h-screen">No Trainers Applied !</p>
                    )
            }

            {/* Modal for trainer details */}
            {selectedTrainer && (
                <dialog className="modal modal-bottom sm:modal-middle" open>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">{selectedTrainer.name} Details</h3>
                        <p className="font-medium">Age : {selectedTrainer.age}</p>
                        <p className="font-medium">Age : {selectedTrainer.experience}</p>
                        <p className="font-medium">Salary : {selectedTrainer.salary}</p>
                        <p className="font-medium">Day : {selectedTrainer.timeWeek}</p>
                        <p className="font-medium">Time : {selectedTrainer.timeDay}</p>
                        <div>
                            <h6 className="block mb-2 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-600 uppercase">
                                Skills :
                            </h6>
                            <div className="flex flex-wrap gap-2">
                                {Object.values(selectedTrainer.skills).map((skill, index) => (
                                    skill && (
                                        <span key={index} className="bg-gray-200 text-pink-600 text-sm px-2 py-1 rounded-md font-medium">
                                            {skill}
                                        </span>
                                    )
                                ))}
                            </div>
                        </div>
                        <div className="modal-action">
                            <button onClick={(e) => handleConfirm(e, selectedTrainer._id)} className="btn btn-success text-white">Confirm</button>
                            <button onClick={() => handleReject(selectedTrainer._id)} className="btn btn-error text-white">Reject</button>
                            <button className="btn btn-warning text-white" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </dialog>
            )}
            <Helmet>
                <title>Vector Gym | Applied Trainers</title>
            </Helmet>
        </div>
    );
};

export default AppliedTrainer;
