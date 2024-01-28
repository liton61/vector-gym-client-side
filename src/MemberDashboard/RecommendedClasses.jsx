import { useEffect, useState } from "react";
import RecommendCard from "./RecommendCard";
import { Helmet } from "react-helmet";


const RecommendedClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('/recommended.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div className="py-10">
            <h1 className="text-2xl font-bold text-center pb-8">Recommended Classes</h1>
            <div className="lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-0 px-5">
                {
                    classes?.map(cls => <RecommendCard key={cls._id} cls={cls}></RecommendCard>)
                }
            </div>
            <Helmet>
                <title>Vector Gym | Recommended Classes</title>
            </Helmet>
        </div>
    );
};

export default RecommendedClasses;