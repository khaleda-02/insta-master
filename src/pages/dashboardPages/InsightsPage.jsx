/* eslint-disable no-unused-vars */
import React from "react";
import Dashboard from "../../hoc/Dashboard";
import Bar from "../../components/dashboardComp/insightsComp/Bar";
import FollowersDonut from "../../components/dashboardComp/insightsComp/FollowersDonut";
import PostsPie from "../../components/dashboardComp/insightsComp/PostPie";
import KPI from "../../components/dashboardComp/insightsComp/KPI";
import { getInsights } from "../../features/content/insightSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Insights = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInsights());
  }, [dispatch]);

  return (
    <div className="max-h-[100vh] overflow-hidden ">
      {/* <h1 className='text-white'>Insights</h1> */}
      <Dashboard
        chlidren={
          <div className="w-full h-[100vh] flex items-center justify-center">
            <div className="grid grid-cols-2 gap-10">
              <FollowersDonut />
              <PostsPie />
              <KPI />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Insights;
