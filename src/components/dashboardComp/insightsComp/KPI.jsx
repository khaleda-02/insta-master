import React from 'react';
import { useEffect } from "react";
// import { json } from "react-router-dom";
import { useSelector } from "react-redux";

const KPI = ()=> {
  const trend = 10; 
  const {insights} = useSelector((state) => state.insights);
  useEffect(() => {
  }, [insights]);
  console.log("in kpi", insights);

  const getFigures = (insights) => { 
    console.log("in getFigures", insights);
    const posts = insights['posts'];
    const followers = insights?.followers;
    console.log("followers ", followers);
    const followersCount = followers.length
    const postsCount = posts.length
    const likes = posts?.reduce((a, b) => a.like_number + b.like_number, 0)
    const comments = posts?.reduce((a, b) => a.comment_number + b.comment_number, 0)
    console.log("likes ", likes);
    console.log("comments ", comments);
    return {postsCount, followersCount, likes, comments};
  };
  const figures = getFigures(insights);
  return (
    <div  className="grid grid-cols-4 gap-10">
    <div className="KPI-container"> 
      <div className="KPI-label">Number of followers</div>
      <div className="KPI-value">{figures.followersCount}</div>
    </div>
     <div className="KPI-container"> 
     <div className="KPI-label">Number of posts</div>
     <div className="KPI-value">{figures.postsCount}</div>
   </div>
   <div className="KPI-container"> 
     <div className="KPI-label">Number of likes</div>
     <div className="KPI-value">{figures.likes}</div>
   </div>
   <div className="KPI-container"> 
     <div className="KPI-label">Number of comments</div>
     <div className="KPI-value">{figures.comments}</div>
   </div>
   </div>
  );
};

export default KPI;
