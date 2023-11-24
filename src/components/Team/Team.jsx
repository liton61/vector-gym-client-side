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
        <div className="mt-20">
            <h2 className="text-4xl text-center font-semibold border-y-4 border-yellow-500 w-80 mx-auto p-3 mb-10">Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    teams.map(team => <TeamCard key={team.id} team={team}></TeamCard>)
                }
            </div>
        </div>
    );
};

export default Team;