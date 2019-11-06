import React, { useReducer } from 'react';
import { appReducer, initialState } from './reducers/reducer';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';



function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  console.log(state);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
