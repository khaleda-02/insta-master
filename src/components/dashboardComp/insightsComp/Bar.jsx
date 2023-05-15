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
      comment_number: 10, 
      like_number : 20,
    },
    {
      id : 2,
      comment_number: 10, 
      like_number : 20,
    },
    {
      id : 3,
      comment_number: 10, 
      like_number : 20,
    },
    {
      id :4,
      comment_number: 10, 
      like_number : 20,
    },
    {
      id : 5,
      comment_number: 10, 
      like_number : 20,
    },
    {
      id : 6,
      comment_number: 10, 
      like_number : 20,
    },
  
  ];
 
  // Graph data
  const series = [
    {
        status: "Comments",
        // data: [10,20,30], //TODO : fetch comments number data from db
        color: COLORS.comments,
        getData: (data)=>{
          return data.map((item)=>item.comment_number);
        },
      },
      
    {
        status: "Likes",
        // data: [10,20,30], //TODO : fetch likes number data from db
        color: COLORS.likes,
        getData: (data)=>{
          return data.map((item)=>item.like_number);
        },
      },
   
  
  ];
  
  const categories = (posts)=>{
    return posts.map((item)=>item.id);
  }; //TODO : fetch posts (id or anything good) data from db
  
  const seriesLabels = {
    visible: true,
    padding: 3,
    font: "normal 10px Arial, sans-serif",
    position: "center",
    color: "white"
  };
  
  const Bar = props => {
    return (
   
     <Chart>
        <ChartTitle text="Number of likes and Comments per Post" />
        <ChartLegend  position="top" orientation="horizontal"/>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={categories(posts)} startAngle={45}>
            <ChartCategoryAxisTitle text="Months" />
          </ChartCategoryAxisItem>
        </ChartCategoryAxis>
        <ChartSeries>
          {series.map((item, idx) => (
            <ChartSeriesItem
              key={idx}
              type="bar"
              gap={2}
              overlay={{
                gradient: "sharpBevel",
              }}
            //   spacing={0.25}
              labels={seriesLabels}
              data={item.getData(posts)}
              name={item.status}
              color={item.color}
              width = {'10px'}
            />
          ))}
        </ChartSeries>
          </Chart>
    
    );
  };
  
  export default Bar;
