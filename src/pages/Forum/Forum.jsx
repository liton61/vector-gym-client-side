import { useState, useEffect } from 'react';
import ForumCard from './ForumCard';
import { Helmet } from 'react-helmet';

const Forum = () => {
  const [forumPosts, setForumPosts] = useState([]);

  useEffect(() => {
    fetch('https://vector-gym-server-side.vercel.app/forum')
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
    <div className='bg-base-200 pb-10 lg:px-0 px-5'>
      <h1 className="text-center text-4xl font-bold py-10">Forum Posts</h1>
      {forumPosts.map((post) => (<ForumCard key={post.id} post={post}></ForumCard>))}
      <Helmet>
        <title>Vector Gym | Forum</title>
      </Helmet>
    </div>
  );
};

export default Forum;
