/* eslint-disable react/prop-types */


const TrainerCard = ({ trainer }) => {
    const { name, image, experience, slot } = trainer;
    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md lg:w-96 md:w-80 rounded-xl bg-clip-border mx-auto mb-7">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                <img src={image} alt="profile-picture" />
            </div>
            <div className="p-6 text-center">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {name}
                </h4>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                    Time slot : {slot}
                </p>
                <p className="font-medium text-blue-600">
                    {experience}
                </p>
                <div>
            <i className="fa-brands fa-facebook mx-2 text-blue-600"></i>
            <i className="fa-brands fa-instagram mx-2 text-red-500"></i>
            <i className="fa-brands fa-twitter mx-2 text-blue-600"></i>
            <i className="fa-brands fa-linkedin mx-2 text-blue-600"></i>
            </div>
            </div>
        </div>
    );
};

export default TrainerCard;