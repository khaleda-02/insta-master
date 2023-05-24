import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
  } from "@progress/kendo-react-charts";
  import { COLORS } from "../../../insightsConsts";
  import { useEffect, useState } from "react";
  import { useSelector } from "react-redux";
  const labelContent = (e) => e.status
  // Graph data
  const followersData = [
    {
     status: "Private",
     value: (data)=>{
      let count = 0;
      for(const key in data){
        if(data[key].is_private){
          count++;
        }
      }
    return count; 
     },
     color: COLORS.private,
    //  data: 10,
   },
    {
     status: "Scammer",
     value: (data)=>{
      let count = 0;
        for(const key in data){
          if(data[key].is_possible_scammer){
            count++;
          }
        }
      return count; 
     }, 
     color: COLORS.scammer,
    //  data: 10,

   },
    {
     status: "Public",
     value: (data)=>{
      let count = 0;
      for(const key in data){
        if(!data[key].is_private){
          count++;
        }
      }
    return count; 
     }, 
     color: COLORS.public,
    //  data: 10,

   },

 ];
const getFigures = (followersData,followers) => {
  const output = []
  for(var item of followersData){
    var data = item.value(followers);
    item.data = data; 
    output.push(item.data);
    console.log(item.color)
}
return output;
}
 
  const Charts = () => {
    const insights = useSelector((state) => state.insights);
    const  {followers}  = insights.insights;
    const figures =  getFigures(followersData, followers);
    useEffect(() => {
  }, [insights]);
 
    return (
      <Chart>
        <ChartTitle text="Followers (private, public, scammer)" />
        <ChartLegend/>
        <ChartSeries>
          <ChartSeriesItem
             overlay={{
              gradient: "sharpBevel",
            }}
            tooltip={{
              visible: true,
            }}
            type="donut"
            data={figures} 
            categoryField="status"
            name = "status"
            // field="data"
          >
            <ChartSeriesLabels
              color="#fff"
              background="none"
              content={labelContent}
              font = "10px Arial, sans-serif"
            />
          </ChartSeriesItem>
        </ChartSeries>
      </Chart>
    );
  };
  
  export default Charts;
  