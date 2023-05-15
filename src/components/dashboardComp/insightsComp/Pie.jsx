import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
  } from "@progress/kendo-react-charts";
  import { COLORS } from "../../../insightsConsts";
  const getPosts = async() =>{
    const res = await fetch('http://localhost:3001/api/insights');
    const data = await res.json();
    console.log(data);
    return data['data']['posts'];
  }
  // const posts = getPosts();
  const posts = [
    {
      id : 1,
      isPrivate: true, 
      isScammer : false,
    },
  
    {
      id : 10,
      isPrivate: false, 
      isScammer : false,
    },
  
    {
      id :2,
      isPrivate: false, 
      isScammer : true,
    },
  
    {
      id : 3,
      isPrivate: true, 
      isScammer : false,
    },
  
    {
      id : 4,
      isPrivate: false, 
      isScammer : false,
    },
  
  ]; 
  // Graph data
  const postsPie = [
     {
      status: "Private",
      value: (data)=>{
        return data.filter((item)=>item.isPrivate).length;
      }, //TODO : fetch private followers  from db
      color: COLORS.private,
      data: 10,
    },
     {
      status: "Scammer",
      value: (data)=>{
        return data.filter((item)=>item.isScammer).length;
      }, //TODO : fetch private followers  from db
      color: COLORS.scammer,
      data: 10,

    },
     {
      status: "Public",
      value: (data)=>{
        return data.filter((item)=>!item.isPrivate).length;
      }, //TODO : fetch private followers  from db
      color: COLORS.public,
      data: 10,

    },
 
  ];
  for(var post of postsPie){
    var data = post.value(posts);
    post.data = data; 
    console.log(post.data);
  }
  // Show category label for each item in the donut graph
  const labelContent = e => e.category;
  
  const Charts = props => {
    return (
      <Chart>
        <ChartTitle text="Applications status - this month" />
        <ChartLegend visible={false} />
        <ChartSeries>
          <ChartSeriesItem
            type="donut"
            data={postsPie} 
            categoryField="status"
            field="data"
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
  