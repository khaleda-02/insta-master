import api from '../client';

const createPostAPI = async (title, timeToShare) => {
  return await api.post('/api/content/create-post', { title, timeToShare });
}
const getPostsAPI = async () => {
  return await api.get('/api/content/get-posts');
}
const getPostsByDayAPI = async (date) => {
  // decode date from url params and pass it to api call 
  // const datee = new Date(2023, 4, 23); // Create a Date object with the desired date
  // const encodedDate = encodeURIComponent(datee.toISOString()); // Encode the date
  return await api.get(
    `http://localhost:5173/api/content/get-posts-by-day/${date}`
  );
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