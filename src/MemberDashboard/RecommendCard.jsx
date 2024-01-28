/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



const RecommendCard = ({ cls }) => {
    const { image, name, price, day, timeSlot } = cls;
    return (
        <div className="">
            <div className="card rounded-none bg-base-100 shadow-xl mx-auto">
                <figure><img className="h-40 w-full" src={image} alt="" /></figure>
                <div className="p-5">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <div>
                        <div className="badge badge-secondary mx-3">Fee : {price}</div>
                        <div className="badge badge-secondary mx-3">Day : {day}</div>
                        <div className="badge badge-secondary mx-3">Time : {timeSlot}</div>
                    </div>
                    <div className="card-actions">
                        <Link className="w-full mt-5" to="/trainer">
                            <button className="btn btn-active btn-secondary w-full text-white">Join Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendCard;