// shared/router.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoApp from '../pages/TodoApp';
import TodoDetail from '../pages/TodoDetail';

const Router = ({ todos, completedTodos }) => {
  todos = Array.isArray(todos) ? todos : [];
  completedTodos = Array.isArray(completedTodos) ? completedTodos : [];

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoApp />} /> 
          <Route path="/todos/:id" element={<TodoDetail />} />  
        </Routes>
    </BrowserRouter>
  );
};

export default Router;
