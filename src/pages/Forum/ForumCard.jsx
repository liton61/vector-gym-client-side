/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const ForumCard = ({ post }) => {
    const { user } = useAuth();
    const { _id, title, description } = post;
    const [voted, setVoted] = useState(() => {
        return localStorage.getItem(`voted_${_id}`) === 'true';
    });
    const [updatedUpVotes, setUpVotes] = useState(() => {
        return parseInt(localStorage.getItem(`upvotes_${_id}`)) || 0;
    });
    const [updatedDownVotes, setDownVotes] = useState(() => {
        return parseInt(localStorage.getItem(`downvotes_${_id}`)) || 0;
    });

    useEffect(() => {
        localStorage.setItem(`voted_${_id}`, voted.toString());
        localStorage.setItem(`upvotes_${_id}`, updatedUpVotes.toString());
        localStorage.setItem(`downvotes_${_id}`, updatedDownVotes.toString());
    }, [_id, voted, updatedUpVotes, updatedDownVotes]);

    const handleVote = (voteType) => {
        if (user && !voted) {
            if (voteType === 'up') {
                setUpVotes(updatedUpVotes + 1);
            } else if (voteType === 'down') {
                setDownVotes(updatedDownVotes + 1);
            }

            setVoted(true);
        }
    };

    return (
        <div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 mb-28 transition-transform transform hover:scale-125">
                <div className="md:flex">
                    <div className="p-8">
                        <h2 className="text-xl font-semibold mt-2">{title}</h2>
                        <p className="text-gray-700 leading-relaxed mt-4 text-justify">{description}</p>
                    </div>
                </div>
                <div className="px-8 mb-6 flex justify-between">
                    <button className='text-2xl' onClick={() => handleVote('up')} disabled={voted}>
                        <i className="fa-solid fa-thumbs-up text-blue-600 text-3xl cursor-pointer"></i> {updatedUpVotes}
                    </button>
                    <button className='text-2xl' onClick={() => handleVote('down')} disabled={voted}>
                        <i className="fa-regular fa-thumbs-down text-3xl cursor-pointer"></i> {updatedDownVotes}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ForumCard;
