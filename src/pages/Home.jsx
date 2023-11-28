import React from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import TodoList from "../components/TodoList";

const Home = () => {
  return <>
    <Header />
    <Input />
    <TodoList isActive = {true} />
    <TodoList isActive = {false} />
  </>;
};

export default Home;
