/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";


const Team = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])
    return (
        <div className="lg:w-3/4 mx-auto my-20 lg:px-0 px-5">
            <h2 className="text-4xl text-center font-bold mb-10">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    teams.map(team => <TeamCard key={team.id} team={team}></TeamCard>)
                }
            </div>
        </div>
    );
};

export default Team;