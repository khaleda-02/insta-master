import React, { useState } from "react";
import { useEffect } from "react";
// import { json } from "react-router-dom";
import { useSelector } from "react-redux";

const KPI = () => {
  // const trend = 10;
  // const insights = useSelector((state) => state.insights);
  // const [figures, setFigures] = useState();

  // const getFigures = ?() => {
  //   const stats = insights.insights;
  //   console.log(stats, " in getfigures insight");
  //   const posts = stats["posts"];
  //   const followers = stats?.followers;
  //   const followersCount = followers.length;
  //   const postsCount = posts.length;
  //   const likes = posts?.reduce((a, b) => a.like_number + b.like_number, 0);
  //   const comments = posts?.reduce(
  //     (a, b) => a.comment_number + b.comment_number,
  //     0
  //   );
  //   console.log("likes ", likes);
  //   console.log("comments ", comments);
  //   setFigures({ postsCount, followersCount, likes, comments });
  // };

  // useEffect(() => {
  //   getFigures();
  // }, []);

  return (
    <div className="grid grid-cols-4 gap-10">
      <div className="KPI-container">
        <div className="KPI-label">Number of followers</div>
        <div className="KPI-value">{15}</div>
      </div>
      <div className="KPI-container">
        <div className="KPI-label">Number of posts</div>
        <div className="KPI-value">{20}</div>
      </div>
      <div className="KPI-container">
        <div className="KPI-label">Number of likes</div>
        <div className="KPI-value">{500}</div>
      </div>
      <div className="KPI-container">
        <div className="KPI-label">Number of comments</div>
        <div className="KPI-value">{180}</div>
      </div>
    </div>
  );
};

export default KPI;
