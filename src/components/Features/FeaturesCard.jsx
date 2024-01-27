/* eslint-disable react/prop-types */


const FeaturesCard = ({ feature }) => {
    const { image, title, description } = feature;
    return (
        <div className="card rounded-none h-52 image-full mx-auto">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="text-center text-3xl font-semibold">{title}</h2>
                <p className="text-justify">{description}</p>
            </div>
        </div>
    );
};

export default FeaturesCard;