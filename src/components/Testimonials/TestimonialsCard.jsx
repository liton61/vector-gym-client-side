/* eslint-disable react/prop-types */


const TestimonialsCard = ({ testimonial }) => {
    const { stories, image, name } = testimonial;
    return (
        <div>
            <div className="card card-compact lg:w-96 md:w-80 md:h-80 bg-base-100 shadow-xl mx-auto mb-5">
                <figure><img className="h-52 w-full" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{stories}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCard;