/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import PostElement from '../../components/dashboardComp/creatpostComp/PostElement'
import Dashboard from '../../hoc/Dashboard'
import Tabel from '../../components/dashboardComp/creatpostComp/Table'
import { useDispatch } from 'react-redux'
import { createPost, updatePost } from '../../features/content/postSlice'
import postImg from '../../assets/1.jpg'
import { toast } from 'react-toastify'



const createPostPage = () => {
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const dateRef = useRef(null);
  const [createdPost, setCreatedPost] = useState(null);

  // calling the endpoint for creating a new post .
  const generateHandler = async (event) => {
    event.preventDefault();

    if (!titleRef.current.value || !dateRef.current.value) {
      toast.warn('add the reauired data  , pls . ', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    dispatch(createPost({ title: titleRef.current.value, timeToShare: dateRef.current.value }))
    .unwrap()
    .then(data => {
      console.log(data);
      const post = {
        img: data.image || postImg,
        hashtags: data.hashtags || [],
        caption: data.caption || 'there is no caption for this title , please try aonther title ...',
      }
      // TODO: get the caption from request!
      toast.success('post created sucessfully ... ', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setCreatedPost(post);
    }).catch(err => {
      toast.error(err, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    })

  }



  // calling the endpoint for updating the post in the db + slice state .
  const saveChangesHandler = () => {
    dispatch(updatePost())
    // showning the loading popup 
    // show the state , then make a tostofy 
    // clear the table by clear the createPost state . 
  }

  // for update the post state in the childern components . 
  const postChangesHandler = (post) => {
    setCreatedPost(post);
  }


  const content = (
    <div className='w-full flex justify-start items-center h-full gap-4 px-4 py-3  min-h-[100vh]'>
      {/* content */}
      <div className='w-[100%] lg:w-[50%] '>

        {/* From  */}
        <form className='flex flex-col 2xl:flex-row items-start 2xl:items-end justify-start gap-4 '>
          <div className="">
            <label htmlFor="keywords" className="block text-3xl font-bold text-white mb-4">Keywords </label>
            <input ref={titleRef} type="text" id="keywords" className=" border-gray-300 text-xl w-[300px] block px-5 py-2.5  text-white" placeholder="ANY TITLE ..." required />
          </div>
          <div className="">
            <label htmlFor="timeToShare" className="block text-3xl font-bold text-white mb-4">Time To Share </label>
            <input ref={dateRef} type="text" id="timeToShare" className=" border-gray-300 text-xl w-[300px] block px-5 py-2.5  text-white" placeholder="year/month/day" required />
          </div>
          <button onClick={generateHandler} type="submit" className="text-white px-5 py-2.5 text-center text-xl bg-purple w-fit h-fit sono">Generate</button>
        </form>
        {/* From  info */}
        <p className='capitalize'>
          please enter a valid date ( at least now )
        </p>



        {/* Content Tabel */}
        <div className='mt-8 border-[1px] border-solid border-[#ffffff63]'>
          <Tabel post={createdPost} changesHandler={postChangesHandler} />
        </div>

        {/* Btns */}
        <div className='w-full flex items-center justify-start gap-3 mt-8'>
          <button onClick={saveChangesHandler} className="btn btn-secondary min-w-[150px]">Save changes </button>
        </div>

      </div>

      {/* preview */}
      <div className='hidden w-[50%] lg:w-[30%] h-full md:flex items-center justify-center '>
        <PostElement post={createdPost} />
      </div>


    </div>
  );
  return (
    <div className='overflow-hidden '>
      <Dashboard chlidren={content} />
    </div>
  )
}

export default createPostPage
