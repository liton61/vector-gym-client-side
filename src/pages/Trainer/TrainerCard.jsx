/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const TrainerCard = ({ trainer }) => {
    const { name, experience, image, timeWeek, timeDay } = trainer;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl h-96">
                <figure><img className="w-36" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-xl font-semibold">{name}</h2>
                    <p className="text-center text-md font-medium text-blue-600">{timeWeek} {timeDay}</p>
                    <p className="text-center text-md font-medium text-blue-600">{experience}</p>
                    <div className="text-center">
                        <i className="mx-3 text-lg cursor-pointer text-blue-600 fab fa-facebook"></i>
                        <i className="mx-3 text-lg cursor-pointer text-blue-600 fab fa-twitter"></i>
                        <i className="mx-3 text-lg cursor-pointer text-red-600 fab fa-instagram"></i>
                        <i className="mx-3 text-lg cursor-pointer text-blue-600 fab fa-linkedin"></i>
                    </div>
                    <div>
                        <Link to={`/trainer/${trainer._id}`}>
                            <button className="btn btn-active btn-secondary mt-5 w-full">Know More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerCard;