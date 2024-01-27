// import { useEffect, useState } from "react";
// import useApplication from "../../hooks/useApplication";
import { useEffect, useState } from "react";
import TrainerCard from "./TrainerCard";
import { Helmet } from "react-helmet";


const Trainer = () => {
    const [trainers, setTrainers] = useState([]);
    useEffect(() => {
        fetch('https://vector-gym-server-side.vercel.app/trainerApplication?role=trainer')
            .then(res => res.json())
            .then(data => setTrainers(data))
    }, [])
    return (
        <div className="lg:w-3/4 mx-auto my-10 lg:px-0 px-5">
            <h2 className="text-4xl text-center font-bold mb-10">Our Trainer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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