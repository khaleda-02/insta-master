import React from "react";
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import postImg from '../../../assets/1.jpg'
import { BsSend } from 'react-icons/bs'

//Todo validate the caption (maximum len 255 , then show "see more ...")

function PostElement({ post }) {

  return (
    <div className="post-element-container bg-[#5B185B] rounded-md pb-8">
      {/* Post image */}
      <img className="image_viewer rounded-md  " src={post?.imgUrl|| postImg} alt="post" />

      {/* Post statistics */}
      <div className="px-2 flex items-center justify-start gap-2 my-3">
        <AiOutlineHeart size={20} />
        <FaRegComment size={20} />
        <BsSend size={20} />
      </div>

      <div className="px-2">
        <h4>10&nbsp;likes</h4>
      </div>

      {/* Post Caption */}
      <div className="mt-3 text-sm capitalize px-2 ">
        <p className="my-2">{post?.caption || 'generate post to create the caption ...'}</p>
      </div>

      {/* Post hashtags  */}
      <div className="mt-3 text-xs px-2 ">
        {post?.hashTags &&
          post?.hashTags.slice(0, 6)
            .map(el => {
              return <p className="inline-block px-[2px]">{el}</p>
            })}
      </div>

    </div >
  );
}

export default PostElement;