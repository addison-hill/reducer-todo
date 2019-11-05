import React from 'react';


const Todo = props => {
    console.log('props', props)
  return (
    <div className={props.completed ? 'completed' : 'not-completed'}>
        <p className="todo" onClick={() => props.dispatch({ type: 'TOGGLE_TODO', payload: props.id})}>{props.item}</p>
    </div>
  );
};

export default Todo;