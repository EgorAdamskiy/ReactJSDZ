import './App.css';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MyTodoList from "./components/ToDoList/ToDoList"

import { root } from './reducers/index';

const store = createStore(root)

function App() {
  return (
    <Provider store={store}>
      <MyTodoList />
    </Provider>
  )
}

export default App;