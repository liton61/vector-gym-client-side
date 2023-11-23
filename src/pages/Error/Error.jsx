import { Link } from "react-router-dom";
import error from '../../assets/4O4.jpg';


const Error = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <img src={error} alt="" />
                <div className="flex justify-center items-center mt-5">
                    <Link to="/">
                        <button className="text-lg font-semibold">Back to Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;