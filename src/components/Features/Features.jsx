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
        <div className="lg:w-[1080px] mx-auto">
            <h1 className="text-4xl text-center font-semibold border-y-4 border-yellow-500 w-60 mx-auto p-3 m-10">Features</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
                {
                    features.map(feature => <FeaturesCard key={feature.id} feature={feature}></FeaturesCard>)}
            </div>
        </div>
    );
};

export default Features;