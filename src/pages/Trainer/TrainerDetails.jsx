/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const TrainerDetails = () => {
    const { id } = useParams();
    const [trainerData, setTrainerData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/trainerApplication?role=trainer`)
            .then(res => res.json())
            .then(data => {
                const foundTrainer = data.find(trainer => trainer._id === id);
                setTrainerData(foundTrainer);
            })
            .catch(error => console.error('Error fetching trainer data:', error));
    }, [id]);

    return (
        <div>
            {trainerData && (
                <div className="flex justify-center items-center mt-10">
                    <div className="relative lg:flex md:flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border sm:mx-auto">
                            <img
                                src={trainerData?.image}
                                alt="image"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                {trainerData?.name}
                            </h4>
                            <Link to="/booked">
                                <button className="bg-pink-500 text-white px-2 py-1 my-2 rounded">
                                    {trainerData?.timeWeek} {trainerData?.timeDay}
                                </button>
                            </Link>
                            <h6 className="block mb-2 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-600 uppercase">
                                {trainerData?.experience}
                            </h6>
                            {/* Displaying Skills */}
                            <div>
                                <h6 className="block mb-2 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-600 uppercase">
                                    Skills :
                                </h6>
                                <div className="flex flex-wrap gap-2">
                                    {Object.values(trainerData.skills).map((skill, index) => (
                                        skill && (
                                            <span key={index} className="bg-gray-200 text-pink-600 text-sm px-2 py-1 rounded-md font-medium">
                                                {skill}
                                            </span>
                                        )
                                    ))}
                                </div>
                            </div>
                            <p className="block mb-4 font-sans text-base antialiased font-normal leading-relaxed text-gray-700 text-justify">
                                {trainerData?.description}
                            </p>
                            <div>
                                <div>
                                    <i className="fa-brands fa-facebook mx-2 text-blue-600 hover:cursor-pointer"></i>
                                    <i className="fa-brands fa-instagram mx-2 text-red-500 hover:cursor-pointer"></i>
                                    <i className="fa-brands fa-twitter mx-2 text-blue-600 hover:cursor-pointer"></i>
                                    <i className="fa-brands fa-linkedin mx-2 text-blue-600 hover:cursor-pointer"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex justify-center my-10">
                <Link to="/trainerForm">
                    <button
                        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Be a trainer
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            ></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TrainerDetails;
