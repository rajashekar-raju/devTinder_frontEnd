import React, { useEffect } from 'react';
import UserCard from './UserCard';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';

const FeedPage = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    try {
      const results = await axios.get("http://localhost:4000/feed", { withCredentials: true });
      dispatch(addFeed(results.data));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  // Check if feed exists and has at least one item before rendering UserCard
  return (
    <div>
      {feed && feed.length > 0 ? (
        <UserCard user={feed[0]} />
      ) : (
        <div className='text-center text-xl font-bold'>no feed</div>
      )}
    </div>
  );
};

export default FeedPage; 
