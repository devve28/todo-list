import { v4 as uuidv4 } from 'uuid';

export const generateTodos = (n = 5000) => {
    const todos = [];
    for (let i = 0; i < n; i++) {
        todos.push(generateTodo());
    }
    return todos;
};

export const generateTodo = () => ({
    id: uuidv4(),
    title: getRandomString(), 
    completed: Math.random() > 0.5,
    timestamp: new Date().toLocaleString(), 
    priority: 'Not Urgent', 
});

export const getRandomString = () => Math.random().toString(36).substring(2);

