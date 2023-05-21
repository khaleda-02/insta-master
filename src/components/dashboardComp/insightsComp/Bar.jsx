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
import { json } from "react-router-dom";

const series = [
  {
    status: "Comments",
    // data: [10, 20, 30], //TODO : fetch comments number data from db
    color: COLORS.comments,
    getData: (data) => {
      return data?.map((item) => {
        console.log("comment number ", item.comment_number);
        return item.comment_number;
      });
    },
  },

  {
    status: "Likes",
    // data: [10,20,30], //TODO : fetch likes number data from db
    color: COLORS.likes,
    getData: (data) => {
      return data?.map((item) => {
        console.log("like number ", item.like_number);
        return item.like_number;
      });
    },
  },
];

const categories = (posts) => {
  console.log("posts in categories", posts);
  const data = JSON.parse(posts[0]); 
  console.log(data);
  return data?.map((item) => {
    // console.log("post id ",item);
    return item.id;
  });
}; //TODO : fetch posts (id or anything good) data from db

const seriesLabels = {
  visible: true,
  padding: 3,
  font: "normal 10px Arial, sans-serif",
  position: "center",
  color: "white",
};

const Bar = ({ posts }) => {
  const [postIds, setPostIds] = useState();
  useEffect(() => {
    setPostIds(categories(posts));
  }, [posts]);
  return (
    <Chart>
      <ChartTitle text="Number of likes and Comments per Post" />
      <ChartLegend position="top" orientation="horizontal" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={postIds} startAngle={45}>
          <ChartCategoryAxisTitle text="Months" />
        </ChartCategoryAxisItem>
      </ChartCategoryAxis>
      <ChartSeries>
        {series?.map((item, idx) => (
          <ChartSeriesItem
            key={idx}
            type="bar"
            gap={2}
            overlay={{
              gradient: "sharpBevel",
            }}
            //   spacing={0.25}
            labels={seriesLabels}
            // eslint-disable-next-line react/prop-types
            data={item.getData(posts)}
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
