import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { getPostsByDay } from "../../../features/content/postSlice";

const Popup = ({ data }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  // Convert month label into number like: May => 5
  function convertMonthToNumber(month) {
    const dateObj = new Date(`${month} 1, 2000`);
    const monthNumber = dateObj.getMonth() + 1;
    return monthNumber;
  }

  const processDate = {
    year: `20${data.split('-')[2].trim()}`,
    month: convertMonthToNumber(data.split('-')[1]),
    day: data.split('-')[0]
  };
  const finalDate = `${processDate.year}-${processDate.month}-${processDate.day}`;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await dispatch(getPostsByDay({ date: finalDate }));
        setPosts(response.payload);
        setIsLoading(false);
      } catch (err) {
        // console.log('Error fetching posts:', err);
      }
    };

    fetchPosts();
  }, [dispatch, finalDate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h1 className="font-bold w-full border-b-2 border-[#D644D6] border-solid pb-2 text-2xl text-center">{data}</h1>
          <div className="posts-list">
            {posts?.map((post, index) => (
              <div className="post-group my-3 px-2 flex items-center justify-between" key={index}>
                <h2>{post.title}</h2>
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="my-modal" className="btn btn-outline btn-info min-h-[20px] h-[2rem] card-image-container cursor-pointer">edit & delete</label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
