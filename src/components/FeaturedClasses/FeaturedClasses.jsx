import { useState, useEffect } from 'react';
import FeaturedClassesCard from './FeaturedClassesCard';

const FeaturedClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        // Fetch the classes data from the JSON file (or an API)
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
            // .catch(error => console.error('Error fetching classes:', error));
    }, []);

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4 py-10">
                <h2 className="text-4xl text-center font-semibold border-y-4 border-yellow-500 w-80 mx-auto p-3 mb-10">Featured Classes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        classes.map(item => <FeaturedClassesCard key={item} item={item}></FeaturedClassesCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default FeaturedClasses;
