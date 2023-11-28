/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const ForumCard = ({ post }) => {
    const { user } = useAuth();
    const { id, title, content } = post;
    const [upvotes, setUpvotes] = useState(post.upvotes);
    const [downvotes, setDownvotes] = useState(post.downvotes);
    const [voted, setVoted] = useState(false);

    const handleUpvote = () => {
        if (user && !voted) {
            setUpvotes(upvotes + 1);
            setVoted(true);
        }
    };

    const handleDownvote = () => {
        if (user && !voted) {
            setDownvotes(downvotes + 1);
            setVoted(true);
        }
    };

    return (
        <div>
            <div className="w-96 mx-auto mt-28 mb-10">
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 mb-10 transition-transform transform hover:scale-125">
                <div className="md:flex">
                    <div className="p-8">
                        <h2 className="text-xl font-semibold mt-2">{title}</h2>
                        <p className="text-gray-700 leading-relaxed mt-4 text-justify">{content}</p>
                    </div>
                </div>
                <div className="px-8 mb-6 flex justify-between">
                    <button className='text-2xl' onClick={handleUpvote}><i className="fa-solid fa-thumbs-up text-blue-600 text-3xl"></i> {upvotes}</button>
                    <button className='text-2xl' onClick={handleDownvote}><i className="fa-regular fa-thumbs-down text-3xl"></i> {downvotes}</button>
                </div>
            </div>
        </div>

    );
};

export default ForumCard;
