// import { useEffect, useState } from "react";
// import useApplication from "../../hooks/useApplication";
import { useEffect, useState } from "react";
import TrainerCard from "./TrainerCard";
import { Helmet } from "react-helmet";


const Trainer = () => {
    // const [trainer] = useApplication();
    const [trainers, setTrainers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/trainerApplication?role=trainer')
            .then(res => res.json())
            .then(data => setTrainers(data))
    }, [])
    return (
        <div className="mt-10">
            <h2 className="text-4xl text-center font-semibold border-y-4 border-secondary w-80 mx-auto p-3 mb-10">Our Trainer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    trainers.map(trainer => <TrainerCard key={trainer._id} trainer={trainer}></TrainerCard>)
                }
            </div>
            <Helmet>
                <title>Vector Gym | Trainer</title>
            </Helmet>
        </div>
    );
};

export default Trainer;