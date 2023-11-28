import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, switchTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function TodoList({ isActive }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDeleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  const onSwitchHandler = (id) => {
    dispatch(switchTodo(id));
  };

  return (
    <div>
      <h3>{isActive ? "plans to do" : "done to do"}</h3>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <div>
              <TodoListDiv key={item.id}>
                <h4>{item.title}</h4>
                <p onClick={() => navigate(`/${item.id}`)}>{item.body}</p>
                <button onClick={() => onSwitchHandler(item.id)}>
                  {isActive ? "완료" : "취소"}
                </button>
                <DeleteBtn onClick={() => onDeleteHandler(item.id)}>
                  삭제
                </DeleteBtn>
              </TodoListDiv>
            </div>
          );
        })}
    </div>
  );
}

const TodoListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill);
`;
const TodoListDiv = styled.div`
  width: 200px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 30px;
  background-color: white;
`;
const DeleteBtn = styled.button`
  background-color: #ed7070;
`;

export default TodoList;
