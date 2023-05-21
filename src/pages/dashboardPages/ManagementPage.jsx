import React, { useState, useEffect } from "react";
import Dashboard from "../../hoc/Dashboard";
import Pageination from "../../components/dashboardComp/PaginationComp";
import { EditorComp } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from '../../features/content/postSlice'
import { setPost } from "../../features/content/tempPostSlice";

function Card({ id, post }) {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setPost(post));
  }

  return (
    <div onClick={() => clickHandler()} className="card relative  py-2  w-[90%] mx-auto md:w-[48%] xl:w-[24%] " >
      <label htmlFor="my-modal" className="card-image-container cursor-pointer">
        <img className="card-image w-full h-full object-cover" src={post.imgUrl} alt={post.title} />
        <h2 className="card-title absolute bottom-3 left-[50%] translate-x-[-50%]">{post.title}</h2>
      </label>
    </ div>
  );
}

const ManagmentPage = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.post);
  const [currentpage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const indexOfLastPost = currentpage * postsPerPage;
  const firstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(firstPost, indexOfLastPost);
  useEffect(() => {
    dispatch(getPosts());
  }, [])

  //TODO: make a useEffect so , you can get posts from db
  const content = (
    <div className="app-container min-h-[100vh] w-full relative">
      <div className="cards-container py-2 w-full min-h-[90%]">
        <div className=" flex flex-wrap justify-center items-start w-full">
          {currentPosts.map((post, index) => (
            <Card key={index} id={index} post={post} />
          ))}
        </div>
      </div>

      <Pageination
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPosts}
      />

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <EditorComp />
        </div>
      </div>

    </div>
  );

  return (
    <Dashboard chlidren={content} />
  );
};
export default ManagmentPage;
