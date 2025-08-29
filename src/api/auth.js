import axios from 'axios';

// Create axios instance with base configuration
const API_BASE_URL = 'https://dashboard-backend-1-weka.onrender.com/api'; // ✅ only one slash

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API methods
export const authAPI = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  register: (name, email, password, passwordConfirm) =>
    api.post('/auth/register', { name, email, password, passwordConfirm }),
  getMe: () => api.get('/auth/me'),
};

// Dashboard API methods
export const dashboardAPI = {
  getData: () => api.get('/dashboard/data'),
  addProfile: (profileData) => api.post('/dashboard/profile', profileData),
};

export default api;
