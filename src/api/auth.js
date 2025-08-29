import axios from 'axios';

// ✅ Use local backend in development, Render backend in production
const API_BASE_URL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:5000/api'
    : 'https://dashboard-backend-3-azxf.onrender.com/api';

console.log('🌍 API Base URL:', API_BASE_URL);

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 seconds timeout
  withCredentials: true, // ✅ Allow cookies if needed
});

// ✅ Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers['Content-Type'] = 'application/json';
  return config;
});

// ✅ Handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('❌ API Error:', error.response?.data || error.message);

    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
      // Redirect to login if not already there
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

// 🔑 Auth API methods
export const authAPI = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  register: (name, email, password, passwordConfirm) =>
    api.post('/auth/register', { name, email, password, passwordConfirm }),
  getMe: () => api.get('/auth/me'),
  logout: () => api.post('/auth/logout'),
};

// 📊 Dashboard API methods
export const dashboardAPI = {
  getData: () => api.get('/dashboard/data'),
  addProfile: (profileData) => api.post('/dashboard/profile', profileData),
};

// 🩺 Test backend connection
export const testConnection = async () => {
  try {
    const response = await api.get('/health');
    return response.data;
  } catch (error) {
    console.error('⚠️ Backend connection test failed:', error);
    throw error;
  }
};

export default api;
