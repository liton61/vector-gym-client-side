/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ClassCard = ({ cls }) => {
    const { image, name } = cls;
    return (
        <div className="">
            <div className="card rounded-md bg-base-100 shadow-xl mb-7">
                <figure><img className="lg:h-48 md:h-48 w-full" src={image} alt="" /></figure>
                <div className="p-5">
                    <Link to={`/classes/${cls._id}`}>
                        <button className="btn btn-active btn-secondary w-full">{name}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;