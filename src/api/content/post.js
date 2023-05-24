import api from '../client';

const createPostAPI = async (title, timeToShare) => {
  return await api.post('/api/content/create-post', { title, timeToShare });
}
const getPostsAPI = async () => {
  return await api.get('/api/content/get-posts');
}
const getPostsByDayAPI = async (date) => {
  console.log(date);
  return await api.post('/api/content/get-posts-by-day', { date: '2024/4/4' });
}
const getPostsByMonthAPI = async (date) => {
  return await api.get('/api/content/get-posts-by-month', { date });
}
const deletePostAPI = async (postId) => {
  return await api.delete(`/api/content/delete-post/${postId}`);
}
const updatePostAPI = async (caption, postId) => {
  return await api.put(`/api/content/update-post/${postId}`, { caption });
}

export { createPostAPI, getPostsAPI, getPostsByDayAPI, getPostsByMonthAPI, deletePostAPI, updatePostAPI }