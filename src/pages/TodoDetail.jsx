import React from 'react';
import { useLocation, useParams, useNavigate, Link } from 'react-router-dom';

const TodoDetail = () => {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  // Access the state from the location object
  const todo = location.state ? location.state.todo : null;

  if (!todo) {
    // Here you can handle the case when the todo is not provided
    // For example, you can return to the main page
    navigate('/');
    return null;
  }

  return (
    <div>
      <h1>Todo Detail</h1>
      <p>Viewing details for todo id: {id}</p>
      <div>
        <h2>{todo.title}</h2>
        <p>{todo.desc}</p>
      </div>
      <Link to={"/"}>
        Back
      </Link>
    </div>
  );
};

export default TodoDetail;
