import Axios from 'axios';

const apiUrl = 'http://localhost:5000';

const API = Axios.create({
    baseURL: apiUrl,
    withCredentials: true,
});

export const createTodo = (data: { title: string; description: string }) =>
    API.post('/todo', data);
export const getTodos = () => API.get('/todo');
export const updateTodo = (
    id: number,
    data: { title: string; description: string }
) => API.put(`/todo/${id}`, data);
export const deleteTodo = (id: number) => API.delete(`/todo/${id}`);
