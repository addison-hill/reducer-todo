import React from 'react';
import Todo from './Todo';

const TodoList = ({state, dispatch}) => {
    const createTodos = () => {
        return state.map(todo => <Todo {...todo} dispatch={dispatch}/>)
    };
    console.log(state);
    return (
        <div className="todo-list">
            {createTodos()}
        </div>
    );
}

export default TodoList;
