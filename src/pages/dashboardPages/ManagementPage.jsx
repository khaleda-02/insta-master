import React, { useState, useEffect } from "react";
import Dashboard from "../../hoc/Dashboard";
import Pageination from "../../components/dashboardComp/PaginationComp";
import test_pp_icon from "./../../assets/1.jpg"
import { EditorComp } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../features/content/tempPostSlice";

const cards = [
  { title: "Card 1", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 1 , joooooo", tags: [] },
  { title: "Card 2", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 21 , joooooo", tags: [] },
  { title: "Card 3", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 3, joooooo", tags: [] },
  { title: "Card 4", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement ,4 joooooo", tags: [] },
  { title: "Card 5", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement , 5joooooo", tags: [] },
  { title: "Card 6", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 6 , joooooo", tags: [] },
  { title: "Card 7", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 7, joooooo", tags: [] },
  { title: "Card 8", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 8, joooooo", tags: [] },
  { title: "Card 9", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 9, joooooo", tags: [] },
  { title: "Card 10", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 10  , joooooo", tags: [] },
  { title: "Card 11", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 11 , joooooo", tags: [] },
  { title: "Card 13", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 13, joooooo", tags: [] },
  { title: "Card 14", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 14 , joooooo", tags: [] },
  { title: "Card 15", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement15 , joooooo", tags: [] },
  { title: "Card 16", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 16 , joooooo", tags: [] },
  { title: "Card 17", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 17 , joooooo", tags: [] },
  { title: "Card 18", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 18 , joooooo", tags: [] },
  { title: "Card 20", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 19 , joooooo", tags: [] },
  { title: "Card 20", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 20 , joooooo", tags: [] },
  { title: "Card 21", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 21 , joooooo", tags: [] },
  { title: "Card 22", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 22, joooooo", tags: [] },
];

function Card({ id, card }) {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(setPost(card));
  }

  return (
    <div onClick={() => clickHandler()} className="card relative  py-2  w-[90%] mx-auto md:w-[48%] xl:w-[24%] " >
      <label htmlFor="my-modal" className="card-image-container cursor-pointer">
        <img className="card-image w-full h-full object-cover" src={card.imageUrl} alt={card.title} />
        <h2 className="card-title absolute bottom-3 left-[50%] translate-x-[-50%]">{card.title}</h2>
      </label>
    </ div>
  );
}

const ManagmentPage = () => {
  const { postsList } = useSelector(state => state.posts);
  const [currentpage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const indexOfLastPost = currentpage * postsPerPage;
  const firstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsList.slice(firstPost, indexOfLastPost);


  //TODO: make a useEffect so , you can get posts from db

  const content = (
    <div className="app-container min-h-[100vh] w-full relative">
      <div className="cards-container py-2 w-full min-h-[90%]">
        <div className=" flex flex-wrap justify-center items-start w-full">
          {currentPosts.map((card, index) => (
            <Card key={index} id={index} card={card} />
          ))}
        </div>
      </div>

      <Pageination
        totalPosts={cards.length}
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
