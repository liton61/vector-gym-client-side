import { useEffect, useState } from "react";
import RecommendCard from "./RecommendCard";


const RecommendedClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('/recommended.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div>
            <h1 className="text-2xl font-semibold text-center mt-5">Recommended Classes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                {
                    classes?.map(cls => <RecommendCard key={cls._id} cls={cls}></RecommendCard>)
                }
            </div>
        </div>
    );
};

export default RecommendedClasses;