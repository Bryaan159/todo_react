//Agregando las variables
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        getLocalTodos();
    }, []);

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(
                    todos.filter((item) => item.completed === true)
                );
                break;
            case 'uncompleted':
                setFilteredTodos(
                    todos.filter((item) => item.completed === false)
                );
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };

    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todoLocal);
        }
    };

    return (
        <div className="App">
            <header>
                <h1>Lista de Tareas</h1>
            </header>
            <Form
                setInputText={setInputText}
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setStatus={setStatus}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
            />
        </div>
    );
}

export default App;
