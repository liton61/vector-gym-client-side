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
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
            <h2 className="text-4xl text-center font-semibold border-y-4 border-yellow-500 w-80 mx-auto p-3 mb-10">Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        testimonials.map(testimonial =><TestimonialsCard key={testimonial.id} testimonial={testimonial}></TestimonialsCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
