import api from '../client';
const getInsightsAPI = async () => {
    // it suppose to pass the whole post obj , {postId , title , newCaption || old , hashtags  , newImg || old }
    return await api.get(`/api/insights`);
  }
  export { getInsightsAPI }