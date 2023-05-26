import React from 'react';
import './style.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Todo = ({ todo, onDelete, onComplete, onCancel }) => {
  return (
    <div className="card">
      <h2>{todo.title}</h2>
      <p>{todo.desc}</p>
      <Link to={`/todos/${todo.id}`} state={{todo:todo} }>상세보기</Link>
      <div className="button-set">
        <button className="btn_delete" onClick={() => onDelete(todo.id)}>삭제하기</button>
        {!todo.isDone ? (
          <button className="btn_complete" onClick={() => onComplete(todo.id)}>완료</button>
        ) : (
          <button className="btn_cancel" onClick={() => onCancel(todo.id)}>취소하기</button>
        )}
      </div>
    </div>
  );
};

export default Todo;
