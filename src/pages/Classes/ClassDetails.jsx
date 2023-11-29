/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const ClassDetails = () => {
    const { id } = useParams();
    const [classes, setClasses] = useState(null);

    useEffect(() => {
        fetch('/allClasses.json')
            .then(res => res.json())
            .then(data => {
                const classInfo = data.find(info => info._id == id);
                setClasses(classInfo);
            })
    }, [id])
    return (
        <div className="py-20">
            <div className="card lg:w-1/2 w-full bg-base-100 shadow-xl mx-auto">
                <figure><img src={classes?.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {classes?.name}
                        <div className="badge badge-secondary mx-3">Fee : {classes?.price}</div>
                    </h2>
                    <div>
                        <div className="badge badge-secondary mx-3">Day : {classes?.day}</div>
                        <div className="badge badge-secondary mx-3">Time : {classes?.timeSlot}</div>
                    </div>
                    <p className="text-justify">{classes?.description}</p>
                    <div className="card-actions">
                        <Link className="w-full mt-5" to="/trainer">
                            <button className="btn btn-success w-full text-white">Join Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;