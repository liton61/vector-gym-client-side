/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */


const TeamCard = ({ team }) => {
    const { image, name, experience, info } = team;
    return (
        <div>
            <div className="flex flex-col items-center justify-center space-y-8 mt-7">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-52 mx-auto" src={image} alt="Profile Picture" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{name}</div>
                        <p className="text-gray-700 text-base text-justify">
                            <strong>Experience : </strong>{experience}
                        </p>
                        <p className="text-gray-700 text-base text-justify">
                            <strong>Expertise : </strong> {info}
                        </p>
                    </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                </div>
            </div>
        </div>
    );
};

export default TeamCard;