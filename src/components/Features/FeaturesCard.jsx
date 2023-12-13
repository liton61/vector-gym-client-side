/* eslint-disable react/prop-types */


const FeaturesCard = ({ feature }) => {
    const { image, title, description } = feature;
    return (
        <div className="card w-80 h-52 image-full mx-auto mb-7" data-aos="zoom-in" data-aos-duration="3000">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="text-center text-3xl font-semibold">{title}</h2>
                <p className="text-center">{description}</p>
            </div>
        </div>
    );
};

export default FeaturesCard;