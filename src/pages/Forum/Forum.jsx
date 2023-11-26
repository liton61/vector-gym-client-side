import { useState, useEffect } from 'react';
import ForumCard from './ForumCard';

const Forum = () => {
  const [forumPosts, setForumPosts] = useState([]);

  useEffect(() => {
    fetch('/forum.json') // Replace with the correct path to your JSON file
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setForumPosts(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <div className="w-96 mx-auto mt-28 mb-10">
        <h1 className="text-center text-4xl font-semibold">Forum Posts</h1>
        <hr className="border-t-4 border-pink-600 mt-2" />
      </div>
      {forumPosts.map((post) => (<ForumCard key={post.id} post={post}></ForumCard>))}
    </div>
  );
};

export default Forum;
