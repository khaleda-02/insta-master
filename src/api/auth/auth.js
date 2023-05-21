import api from '../client'

const loginAPI = async (email, password) => {
  console.log(email, password);
  return await api.post('/api/auth/login', { email, password });
}
const registerAPI = async (username, email, password) => {
  return await api.post('/api/auth/register', { username, email, password });
}
const logoutAPI = async () => {
  return await api.get('/api/auth/logout');
}
const isAuthAPI = async () => {
  return await api.get('/api/auth/isauth');
}

export { loginAPI, registerAPI, logoutAPI, isAuthAPI }