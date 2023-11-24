import { useEffect, useState } from "react";
import TrainerCard from "./TrainerCard/TrainerCard";


const Trainer = () => {
    const [trainers, setTrainers] = useState([]);
    useEffect(() => {
        fetch('trainerInfo.json')
            .then(res => res.json())
            .then(data => setTrainers(data))
    }, [])
    return (
        <div className="mt-10">
           <h2 className="text-4xl text-center font-semibold border-y-4 border-secondary w-80 mx-auto p-3 mb-10">Our Trainer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    trainers.map(trainer => <TrainerCard key={trainer} trainer={trainer}></TrainerCard>)
                }
            </div>
        </div>
    );
};

export default Trainer;