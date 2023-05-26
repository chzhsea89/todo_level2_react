// react-router-dom5
// src/pages/works.jsx
import { useLocation, useNavigate, Link } from "react-router-dom";

const data = [
  { id: 1, todo: "리액트 배우기" },
  { id: 2, todo: "노드 배우기" },
  { id: 3, todo: "자바스크립트 배우기" },
  { id: 4, todo: "파이어 베이스 배우기" },
  { id: 5, todo: "넥스트 배우기" },
  { id: 6, todo: "HTTP 프로토콜 배우기" },
];

const Works = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location :>> ", location);
  return (
    <div>
      <div>{`현재 페이지 : ${location.pathname.slice(1)}`}</div>
      <div>
        {data.map((work) => {
          return (
            <div key={work.id}>
              <div>할일: {work.id}</div>
              <Link to={`/works/${work.id}`}>
                <span style={{ cursor: "pointer" }}>➡️ Go to: {work.todo}</span>
              </Link>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          navigate("/About");
        }}
      >
        about으로 이동
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      > 뒤로가기
      </button>
    </div>
  );
};

export default Works;