import React from "react";
// import Calendar from "../../components/dashboardComp/CalendarComp/Calendar";
// import Sidebar from "../../components/dashboardComp/Sidebar";
import Dashboard from "../../hoc/Dashboard";
import Bar from "../../components/dashboardComp/insightsComp/Bar";
import Pie from "../../components/dashboardComp/insightsComp/Pie";
import KPI from "../../components/dashboardComp/insightsComp/KPI";
const Insights = () => {
  // request ins 
  return (
    <div className="max-h-[100vh] overflow-hidden ">
      {/* <h1 className='text-white'>Insights</h1> */}
      <Dashboard
        chlidren={
          <div>
            <div className="grid grid-cols-3 gap-10">
              <Bar />
              <Pie />
              <div className="grid grid-cols-1 gap-1">
                <h1>Followers insights</h1>
                <div className="KPI-wrapper">
                  <KPI label="You follow Each other" value="$10,000" trend={5} />
                  <KPI label="Follows you only" value="100" trend={-10} />
                  <KPI label="You follow only" value="500" trend={20} />
                </div>
                <h1>Posts insights</h1>
                <div className="KPI-wrapper">
                  <KPI label="You follow Each other" value="$10,000" trend={5} />
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
