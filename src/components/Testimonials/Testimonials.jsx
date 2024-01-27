import { useEffect, useState } from "react";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <section className="py-12 bg-gray-100 lg:px-0 px-5">
            <div className="lg:w-3/4 mx-auto">
                <h2 className="text-4xl text-center font-bold mb-10">Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 rounded">
                    {
                        testimonials.map(testimonial => <TestimonialsCard key={testimonial.id} testimonial={testimonial}></TestimonialsCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
