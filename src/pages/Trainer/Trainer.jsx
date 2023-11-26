// import { useEffect, useState } from "react";
import useApplication from "../../hooks/useApplication";
import TrainerCard from "./TrainerCard";


const Trainer = () => {
    const [trainer] = useApplication();
    // const [trainers, setTrainers] = useState([]);
    // useEffect(() => {
    //     fetch('trainerInfo.json')
    //         .then(res => res.json())
    //         .then(data => setTrainers(data))
    // }, [])
    return (
        <div className="mt-10">
            {/* <h1>{trainer.length}</h1> */}
            <h2 className="text-4xl text-center font-semibold border-y-4 border-secondary w-80 mx-auto p-3 mb-10">Our Trainer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    trainer.map(trainer => <TrainerCard key={trainer._id} trainer={trainer}></TrainerCard>)
                }
            </div>
        </div>
    );
};

export default Trainer;