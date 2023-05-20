/* eslint-disable no-unused-vars */
import React from "react";
// import Calendar from "../../components/dashboardComp/CalendarComp/Calendar";
// import Sidebar from "../../components/dashboardComp/Sidebar";
import Dashboard from "../../hoc/Dashboard";
import Bar from "../../components/dashboardComp/insightsComp/Bar";
import Pie from "../../components/dashboardComp/insightsComp/Pie";
import KPI from "../../components/dashboardComp/insightsComp/KPI";
import { getInsightsAPI } from "../../api/content/insights";
import { useEffect, useState } from "react";

const Insights = () => {
<<<<<<< HEAD
  // request ins 
=======
  const [insights, setInsights] = useState(null);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const { data } = await getInsightsAPI();
        console.log("data", data);
        setInsights(data.data);
      } catch (error) {
        console.error("Error fetching insights:", error);
      }
    };
    fetchInsights();
  }, []);
>>>>>>> a7dc600d3f977f96a93ab9e767544cef770f1cfe
  return (
    <div className="max-h-[100vh] overflow-hidden ">
      {/* <h1 className='text-white'>Insights</h1> */}
      <Dashboard
        chlidren={
          <div>
            <div className="grid grid-cols-3 gap-10">
<<<<<<< HEAD
              <Bar />
              <Pie />
              <div className="grid grid-cols-1 gap-1">
                <h1>Followers insights</h1>
                <div className="KPI-wrapper">
                  <KPI label="You follow Each other" value="$10,000" trend={5} />
=======
              <Bar posts={insights?.posts} />
              <Pie posts={insights?.posts}/>
              <div className="grid grid-cols-1 gap-1">
                <h1>Followers insights</h1>
                <div className="KPI-wrapper">
                  <KPI
                    label="You follow Each other"
                    value="$10,000"
                    trend={5}
                  />
>>>>>>> a7dc600d3f977f96a93ab9e767544cef770f1cfe
                  <KPI label="Follows you only" value="100" trend={-10} />
                  <KPI label="You follow only" value="500" trend={20} />
                </div>
                <h1>Posts insights</h1>
                <div className="KPI-wrapper">
<<<<<<< HEAD
                  <KPI label="You follow Each other" value="$10,000" trend={5} />
=======
                  <KPI
                    label="You follow Each other"
                    value="$10,000"
                    trend={5}
                  />
>>>>>>> a7dc600d3f977f96a93ab9e767544cef770f1cfe
                  <KPI label="Follows you only" value="100" trend={-10} />
                  <KPI label="You follow only" value="500" trend={20} />
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Insights;
