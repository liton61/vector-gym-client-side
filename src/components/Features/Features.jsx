import { useEffect, useState } from "react";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('features.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, []);

    return (
        <div className="lg:w-3/4 mx-auto">
            <h1 className="text-4xl text-center font-bold m-10">Featured Section</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-0 px-5 mb-10">
                {
                    features.map(feature => <FeaturesCard key={feature.id} feature={feature}></FeaturesCard>)}
            </div>
        </div>
    );
};

export default Features;
