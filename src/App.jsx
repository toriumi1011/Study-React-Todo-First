import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { InputTodo } from './components/inputTodo'
import { IncompleteTodos } from './components/incompleteTodos'
import { CompleteTodos } from './components/completeTodos'

function App() {

  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([])
  const onCompleteTodoText = (event) => setTodoText(event.target.value)
  const onClickAdd = () => {
    const newTodos = [...incompleteTodos, todoText];
    if (todoText === "") return;
    setIncompleteTodos(newTodos)
    setTodoText("")
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos)
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1)

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onclickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);

  }
  return (
    <>
      <InputTodo todoText={todoText} onChange={onCompleteTodoText} onClick={onClickAdd} disabled={incompleteTodos.length >= 5} />
      {incompleteTodos.length >= 5 && <p style={{ color: 'red' }}>上限に達しています。</p>}
      <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
      <CompleteTodos todos={completeTodos} onclickBack={onclickBack} />
    </>
  );
};

export default App;
