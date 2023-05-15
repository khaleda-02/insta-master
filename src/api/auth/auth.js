import api from '../client'

const loginAPI = async (email, password) => {
  return await api.post('/api/auth/login', { email, password });
}
const loginUserWithGoogleAPI = async (accessToken) => {
  return await api.post('/api/auth/login', { googleToken: accessToken });
}
const registerAPI = async (username, email, password) => {
  return await api.post('/api/auth/register', { username, email, password });
}
const registerUserWithGoogleAPI = async (accessToken) => {
  return await api.post('/api/auth/register', { googleToken: accessToken });
}
const logoutAPI = async () => {
  return await api.get('/api/auth/logout');
}
const isAuthAPI = async () => {
  return await api.get('/api/auth/isauth');
}

export { loginAPI, registerAPI, loginUserWithGoogleAPI, registerUserWithGoogleAPI, logoutAPI, isAuthAPI }