/* eslint-disable react/prop-types */


const FeaturesCard = ({ feature }) => {
    const { image, title, description } = feature;
    return (
        <div className="">
            <div className="h-64 mx-auto border p-5 rounded">
                <figure><img className="w-24 mx-auto" src={image} alt="" /></figure>
                <h2 className="text-center text-xl font-bold">{title}</h2>
                <p className="text-justify">{description}</p>
            </div>
        </div>
    );
};

export default FeaturesCard;