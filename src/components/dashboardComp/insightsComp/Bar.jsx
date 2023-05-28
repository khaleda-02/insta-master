/* eslint-disable no-unused-vars */
import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisTitle,
  ChartCategoryAxisItem,
} from "@progress/kendo-react-charts";
import { COLORS } from "../../../insightsConsts";
import { useEffect, useState } from "react";
// import { json } from "react-router-dom";
import { useSelector } from "react-redux";
// import { ca } from "date-fns/locale";

const seriesData = [
  {
    status: "Comments",
    // data: [10, 20, 30], //TODO : fetch comments number data from db
    color: COLORS.comments,
    getData: (posts) => {
      return (posts?.map((item) => item.comment_number));
    },
    data: [10, 20, 30], //TODO : fetch comments number data from db
  },

  {
    status: "Likes",
    color: COLORS.likes,
    getData:  (posts) => {
      return (posts?.map((item) => item.like_number));
    },
    data: [10, 20, 30], //TODO : fetch comments number data from db
    },
  
];

const seriesLabels = {
  visible: true,
  padding: 3,
  font: "normal 10px Arial, sans-serif",
  position: "center",
  color: "white",
};
const getSerirs = async (series , posts)=>{
  const output = []
  for (var item of series) {
    var data = await item.getData(posts);
    item.data = data;
    output.push(item.data);
  }
  return output;
}
const Bar = () => {
  const {insights} = useSelector((state) => state.insights);
  const { posts } = insights; 
  console.log("posts in bar: ", posts);
  const getCategories = async (posts) => {
    // const categories =  await posts?.map((item) => {
    //   return item.text.substring(0, 1);
    // });
    return [1,2,3,4,5,6,7,8,9,10, 11, 12];
  };
  useEffect(() => {
  }, [insights]);
  
  return (
    <Chart>
      <ChartTitle text="Number of likes and Comments per Post" />
      <ChartLegend position="top" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={getCategories(posts)} startAngle={45}>
          <ChartCategoryAxisTitle text="Posts" />
        </ChartCategoryAxisItem>
      </ChartCategoryAxis>
      <ChartSeries>
     
        {seriesData?.map((item, idx) => (
          <ChartSeriesItem
            key={idx}
            type="bar"
            gap={2}
            overlay={{
              gradient: "sharp",
            }}
            //   spacing={0.25}
            labels={seriesLabels}
            // eslint-disable-next-line react/prop-types
            data={item.data}
            name={item.status}
            color={item.color}
            width={"10px"}
          />
        ))}
      </ChartSeries>
    </Chart>
  );
};

export default Bar;
