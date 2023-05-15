import api from '../client';

const createPostAPI = async (title, timeToShare) => {
  console.log(title, timeToShare);
  return await api.post('/api/content/create-post', { title, timeToShare });
}
const getPostsAPI = async () => {
  return await api.get('/api/content/get-posts');
}
const getPostsByDayAPI = async (date) => {
  return await api.get('/api/content/get-posts-by-day', { date });
}
const getPostsByMonthAPI = async (date) => {
  return await api.get('/api/content/get-posts-by-month', { date });
}
const deletePostAPI = async (postId) => {
  return await api.delete(`/api/content/delete-post/${postId}`);
}
const updatePostAPI = async (title, timeToShare, postId) => {
  // it suppose to pass the whole post obj , {postId , title , newCaption || old , hashtags  , newImg || old }
  return await api.put(`/api/content/update-post/${postId}`, { title, timeToShare });
}

export { createPostAPI, getPostsAPI, getPostsByDayAPI, getPostsByMonthAPI, deletePostAPI, updatePostAPI }