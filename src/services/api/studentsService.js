import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
api.interceptors.response.use(
    (response) => {
        console.log('[API SUCCESS]' + response.config.method.toUpperCase() + 'request to' + (response.config.url || '/') + 'completed successfully.');
        return response;
    },
    (error) => {
        console.error(`[API ERROR] Request failed:`, error.response?.data || error.message);
        return Promise.reject(error);
    }
);
export const getStudents = async () => {
    const response = await api.get('');
    return response.data;
};

export const createStudent = async (studentData) => {
    const response = await api.post('', studentData);
    return response.data;
};

export const updateStudent = async (id, studentData) => {
    const response = await api.put(`/${id}`, studentData);
    return response.data;
};

export const deleteStudent = async (id) => {
    const response = await api.delete(`/${id}`);
    return response.data;
};