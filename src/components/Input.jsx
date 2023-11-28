import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import { v4 as uuidv4 } from "uuid";

function Input() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  }
  const onChangeBodyHandler = (e) => {
    setBody(e.target.value);
  }
  const submitBtnHandler = (e) => {
    e.preventDefault();
    const newTodo = {
        id: uuidv4(),
        title: title,
        body: body,
        isDone: false
    }
    dispatch(addTodo(newTodo));
  };

  return (
    <div>
      <div>
        제목
        <input onChange={onChangeTitleHandler} value={title} />
      </div>
      <div>
        내용
        <input onChange={onChangeBodyHandler} value={body} />
      </div>
      <button onClick={submitBtnHandler}>등록</button>
    </div>
  );
}

export default Input;
