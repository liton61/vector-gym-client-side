/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */


const TeamCard = ({ team }) => {
    const { image, name, experience, info } = team;
    return (
        <div className="rounded shadow-lg h-96">
            <img className="w-28 mx-auto" src={image} alt="Profile Picture" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">{name}</div>
                <p className="text-gray-700 text-base text-justify">
                    <strong>Experience : </strong>{experience}
                </p>
                <p className="text-gray-700 text-base text-justify">
                    <strong>Expertise : </strong> {info}
                </p>
            </div>
        </div>
    );
};

export default TeamCard;