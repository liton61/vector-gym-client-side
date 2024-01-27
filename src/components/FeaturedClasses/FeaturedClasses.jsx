import { useState, useEffect } from 'react';
import FeaturedClassesCard from './FeaturedClassesCard';

const FeaturedClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, []);

    return (
        <section className="bg-gray-100">
            <div className="lg:w-3/4 mx-auto py-10">
                <h2 className="text-4xl text-center font-bold mb-10">Featured Classes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-0 px-5">
                    {
                        classes.map(item => <FeaturedClassesCard key={item} item={item}></FeaturedClassesCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default FeaturedClasses;
