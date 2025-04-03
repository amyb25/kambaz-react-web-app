import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const fetchWelcomeMessage = async () => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
    return response.data;
};
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;
export const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_API}`);
    return response.data;
};
export const updateTitle = async (title: string) => {
    const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
    return response.data;
};

// manipulate remote arrays on the server from the user 
// interface and update a user interface to reflect the changes in the remote array
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;
export const fetchTodos = async () => {
    const response = await axios.get(TODOS_API);
    return response.data;
};
// delete request to server
export const removeTodo = async (todo: any) => {
    const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
    return response.data;
};
// requests creating a new todo item
export const createTodo = async () => {
    const response = await axios.get(`${TODOS_API}/create`);
    return response.data;
};
// HTTP POST Method -- postTodo client function
export const postTodo = async (todo: any) => {
    const response = await axios.post(`${TODOS_API}`, todo);
    return response.data;
};
// HTTP DELETE Method -- deleteTodo client function
export const deleteTodo = async (todo: any) => {
    const response = await axios.delete(`${TODOS_API}/${todo.id}`);
    return response.data;
};
// HTTP UPDATE Method -- updateTodo client function
export const updateTodo = async (todo: any) => {
    const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
    return response.data;
  };
  



