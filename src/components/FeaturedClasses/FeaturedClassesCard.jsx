/* eslint-disable react/prop-types */


const FeaturedClassesCard = ({ item }) => {
    const { title, description, instructor, image } = item;
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-700">{description}</p>
            <div className="avatar flex gap-5 mt-5">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={image} />
                </div>
                <p className="text-gray-600 mt-2">Instructor: {instructor}</p>
            </div>
        </div>
    );
};

export default FeaturedClassesCard;