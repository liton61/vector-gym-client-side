/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ClassCard = ({ cls }) => {
    const { image, name, day } = cls;
    // console.log(cls);
    return (
        <div>

            <div className="card lg:w-72 md:w-80 w-96 bg-base-100 shadow-xl mx-auto mb-7">
                <figure><img className="lg:h-48 md:h-48 w-full" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}
                        <div className="badge badge-secondary">{day}</div>
                    </h2>
                    <Link to={`/classes/${cls._id}`}>
                        <button className="font-medium mt-3">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;