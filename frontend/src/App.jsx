// App.js
import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchTodos() {
            try {
                const response = await fetch("http://localhost:3000/todos");
                const data = await response.json();
                setTodos(data.todos); // Assuming your API returns an object with a todos array
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        }

        fetchTodos();
    }, []);

    return (
        <div>
            <CreateTodo />
            <Todos todos={todos} />
        </div>
    );
}

export default App;
