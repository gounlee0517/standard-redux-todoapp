import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

function Detail() {
  const navigate = useNavigate();
  const paramId = useParams().id;
  const todos = useSelector(state => state.todos);

  const detailTodo = todos.filter((item) => item.id === paramId)[0];

  return (
    <div>
      <h2>Detail</h2>
      <h4>{detailTodo.title}</h4>
      <p>{detailTodo.body}</p>
      <button onClick={() => navigate('/')}>Home으로 돌아가기</button>
    </div>
  )
}

export default Detail
