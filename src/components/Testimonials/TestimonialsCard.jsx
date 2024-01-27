/* eslint-disable react/prop-types */


const TestimonialsCard = ({ testimonial }) => {
    const { stories, image, name } = testimonial;
    return (
        <div>
            <div className=" bg-base-100 mx-auto h-96 rounded-b border">
                <figure><img className="h-52 w-full rounded-t" src={image} alt="" /></figure>
                <div className="p-5">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-justify">{stories}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCard;