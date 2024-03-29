import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";


const Slider = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/xj6ZTNY3/slider-4.jpg)' }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                        <Typewriter
                            words={["Building a Healthier Lifestyle"]}
                            loop={5}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /></h1>
                    <p className="mb-5 text-justify">A gym is a dedicated space designed to support physical fitness and health goals. Equipped with a variety of exercise machines, weights, and facilities, it provides an environment where individuals engage in workouts, strength training, cardio exercises, and group fitness classes.</p>
                    <Link to="/classes">
                        <button className="btn btn-active btn-secondary">Learn More <i className="fa-solid fa-arrow-right"></i></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Slider;