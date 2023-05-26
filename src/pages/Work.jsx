// src/pages/Work.jsx

import React from 'react';
import { useNavigate, useParams, } from 'react-router-dom';

const data = [
    { id: 1, todo: '리액트 배우기' },
    { id: 2, todo: '노드 배우기' },
    { id: 3, todo: '자바스크립트 배우기' },
    { id: 4, todo: '파이어 베이스 배우기' },
    { id: 5, todo: '넥스트 배우기' },
    { id: 6, todo: 'HTTP 프로토콜 배우기' },
];

const Work = () => {
    const param = useParams();
    const navigate = useNavigate();
    console.log(param)

    const work = data.find((work) => work.id === parseInt(param.id));

    return (
        <div>{work.todo}
            <button onClick={() => { navigate(-1); }} > 뒤로가기 </button>
        </div>
    );
}

export default Work;