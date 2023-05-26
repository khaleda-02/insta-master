import React, { useEffect } from "react";
import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";
import { useSelector } from "react-redux";
import { COLORS } from "../../../insightsConsts";
const postsData = [
  {
    category: "Image",
    getValue: (data) => {
      return data?.filter((item) => item.type === "image").length;
    },
    color: COLORS.image,
    data: 10,
  },
  {
    category: "Video",
    getValue: (data) => {
      return data?.filter((item) => item.type === "video").length;
    },
    color: COLORS.video,
    data: 10,
  },
];
const getFigures = (postsData, posts) => {
  const output = [];
  for (var item of postsData) {
    var data = item.getValue(posts);
    item.data = data;
    output.push(item.data);
  }
  return output;
};

const labelContent = (props) => {
  let formatedNumber = Number(props.value).toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 2,
  });
  return `${props.dataItem.status} years old: ${formatedNumber}`;
};
const Charts = () => {
  const insights = useSelector((state) => state.insights);
  const { posts } = insights.insights;
  const figures = getFigures(postsData, posts);

  useEffect(() => {}, [insights]);

  return (
    <Chart>
      <ChartTitle text="Posts (image, video)" />
      <ChartLegend position="top" orientation="horizontal" />
      <ChartSeries>
        <ChartSeriesItem
          type="pie"
          overlay={{
            gradient: "sharpBevel",
          }}
          tooltip={{
            visible: true,
          }}
          data={figures}
          field="data"
          categoryField="name"
        />
      </ChartSeries>
    </Chart>
  );
};

export default Charts;
