import { useSelector, useDispatch } from 'react-redux'
import { resetPost, setPost } from '../../features/content/tempPostSlice.js'
import { deletePost, updatePost } from '../../features/content/postSlice.js'
import { useState } from 'react';
//TODO textarea default value 

const EditComp = () => {

  const dispatch = useDispatch();
  const { post } = useSelector(state => state.tempPost);

  const [captionState, setCaptionState] = useState('')

  const captionUpdatedHanlder = (e) => {
    setCaptionState(e.target.value);
  }

  const reset = () => {
    setCaptionState('')
    dispatch(resetPost())
  }

  const deleteHandler = () => {
    dispatch(deletePost({ postId: post._id }))
    reset()
  }

  const saveHandler = () => {
    dispatch(updatePost({ caption: captionState, postId: post._id }))
    reset()
  }


  return (
    <div>
      <h3 className="text-3xl font-extrabold text-purple">Edit Post ...</h3>
      <div className="post-content mt-3">
        <h3 className="text-xl font-bold sono text-white">{post && post.title}</h3>
        <img src={post.imgUrl} className="my-2 " />

        <div className="post-caption my-2">
          <h3 className="text-xl text-white my-1"> update post caption</h3>
          <p className='p-2 w-full  text-base '>{post.caption} </p>
          <textarea onChange={captionUpdatedHanlder} value={captionState} placeholder='new caption' className="bg-transparent  border-solid border-white border-[1px] p-2 w-full  text-base "></textarea>
        </div>

        <div className="post-hashtags my-2">
          <h3 className="text-xl text-white my-1">post tags</h3>
          <div className='max-w-full flex items-center justify-start flex-wrap gap-3' >
            {post.hashTags && post.hashTags.map((hashtag) => <button className="btn-secondary text-sm px-2 py-1 min-h-[1rem]">{hashtag}</button>)
            }
          </div>
        </div>
      </div>
      <div className="modal-action">
        <label onClick={deleteHandler} htmlFor="my-modal" className="btn btn-error">delete post</label>
        <label onClick={saveHandler} htmlFor="my-modal" className="btn btn-info">save changes</label>
        <label onClick={reset} htmlFor="my-modal" className="btn">close</label>
      </div>
    </div>
  )
}

export default EditComp