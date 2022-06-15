import React from 'react';

function Todo({ text, todos, todo, setTodos }) {
    const completeBtnHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    };

    const TrashBtnHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id));
    };

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                {text}
            </li>
            <button className="complete-btn" onClick={completeBtnHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={TrashBtnHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;
