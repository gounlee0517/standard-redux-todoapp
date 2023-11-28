import { v4 as uuidv4 } from "uuid";
// import shortid from "shortid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};
export const switchTodo = (payload) => {
  return { type: SWITCH_TODO, payload };
};

const initialState = [
  {
    id: uuidv4(),
    title: "제목1",
    body: "내용",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "제목2",
    body: "내용",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "제목3",
    body: "내용",
    isDone: true,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];

    case DELETE_TODO:
      return state.filter((item) => item.id !== action.payload);

    case SWITCH_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};

export default todos;
