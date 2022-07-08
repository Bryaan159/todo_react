import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Form({ setInputText, inputText, todos, setTodos, setStatus }) {
    const inputTextHandler = (ev) => {
        setInputText(ev.target.value);
    };
    const submitTodoHandler = (ev) => {
        ev.preventDefault();
        if (inputText.length > 0) {
            setTodos([
                ...todos,
                {
                    text: inputText,
                    completed: false,
                    id: uuidv4(),
                },
            ]);
            setInputText('');
        }
    };

    const statusHandler = (ev) => {
        setStatus(ev.target.value);
    };

    return (
        <form>
            <input
                type="text"
                className="todo-input"
                onChange={inputTextHandler}
                value={inputText}
            />
            <button
                className="todo-button"
                type="submit"
                onClick={submitTodoHandler}
            >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select
                    onChange={statusHandler}
                    name="todos"
                    className="filter-todo"
                >
                    <option value="all">TODO LIST</option>
                    <option value="completed">Tareas completas</option>
                    <option value="uncompleted">Tareas por hacer</option>
                </select>
            </div>
        </form>
    );
}

export default Form;
