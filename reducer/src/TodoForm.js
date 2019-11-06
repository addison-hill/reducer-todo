import React, { useState } from 'react';

const TodoForm = ({dispatch}) => {
    const [todo, setTodo] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: todo });
        setTodo('');
    };

    const handleClear = () => {
        dispatch({ type: 'CLEAR_COMPLETED' })
    };

    
    return (
        <div className='todo-form'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="todo"
                    value={todo}
                    placeholder="What's next?"
                    onChange={e => setTodo(e.target.value)}
                />
                <div className='buttons'>
                    <button className="submit-btn" type='submit'>Add Todo</button>
                    <button className="clear-btn" onClick={handleClear} >Clear Completed</button>
                </div>
            </form>
        </div>
    );
};

export default TodoForm;