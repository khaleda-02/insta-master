import React, { useEffect, useState } from 'react'
import test_pp_icon from "./../../assets/1.jpg"
import { useSelector, useDispatch } from 'react-redux'
import { resetPost } from '../../features/content/tempPostSlice.js'
const EditComp = () => {

  // selecte the tempPost state and get the selected post
  // make a codintion rendering so if therse no post in tempPost do not render anything.
  const dispatch = useDispatch();
  const { post } = useSelector(state => state.tempPost);

  // and when the user click on save => loading , request for updating  , close edit, update the posts slice state  ,reset tempPost , tostofy for success ,  
  // when the user click on delete   =>  loading , request for deletign  , close edit, update the posts slice state  ,reset tempPost , tostofy for success ,
  // when the user click on close    => close edit ,reset tempPost .

  const deleteHandler = () => {
    dispatch(resetPost())
    // dispatch the delete thunk from posts slice , 
    // while isLoading is true , show up the loading page 
  }

  const saveHandler = () => {
    dispatch(resetPost());
  }

  return (

    <div>

      <h3 className="text-3xl font-extrabold text-purple">Edit Post ...</h3>
      <div className="post-content mt-3">
        <h3 className="text-xl font-bold sono text-white">{post && post.title}</h3>


        <img src={test_pp_icon} className="my-2 " />

        <div className="post-caption my-2">
          <h3 className="text-xl text-white my-1">post caption</h3>
          <textarea defaultValue={post ? post.caption : ""} className="bg-transparent resize-none border-solid border-white border-[1px] p-2 w-full h-[100px] text-base ">
          </textarea>
        </div>

        <div className="post-hashtags my-2">
          <h3 className="text-xl text-white my-1">post tags</h3>
          <div className='max-w-full flex items-center justify-start flex-wrap gap-3' >
            <button className="btn-secondary text-sm px-2 py-1 min-h-[1rem]">#tag</button>
            <button className="btn-secondary text-sm px-2 py-1 min-h-[1rem]">#tag</button>
            <button className="btn-secondary text-sm px-2 py-1 min-h-[1rem]">#code</button>
            <button className="btn-secondary text-sm px-2 py-1 min-h-[1rem]">#prog</button>
          </div>
        </div>
      </div>
      <div className="modal-action">
        <label onClick={deleteHandler} htmlFor="my-modal" className="btn btn-error">delete post</label>
        <label onClick={saveHandler} htmlFor="my-modal" className="btn btn-info">save changes</label>
        <label htmlFor="my-modal" className="btn">close</label>
      </div>
    </div>
  )
}

export default EditComp
