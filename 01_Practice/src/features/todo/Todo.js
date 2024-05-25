import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
    },
  ],
};

const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      let todo = {
        id: nanoid(),
        text: actions.payload,
      };

      state.todos.push(todo);
    },

    removeTodo: (state, actions) => {},
  },
});
