import { ADD_TODO, DELETE_ALL, DELETE_TODOS, EDIT_TODOS, CHECKED_TODOS } from "../actions";

const initialState = [
  { id: 1, todo: "Buy Laptop", completed: false },
  { id: 2, todo: "Master Redux", completed: false },
  { id: 3, todo: "Watering Plants", completed: false },
];
export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_ALL:
      return [];

    case DELETE_TODOS:
      const filteredTodo = state.filter((todo) => todo.id !== action.payload);
      return filteredTodo;

    case EDIT_TODOS:
      let data = action.payload;
      let updatedArray = [];
      state.map((item) => {
        if (item.id === data.id) {
          item.id = data.id;
          item.todo = data.todo;
          item.completed = data.completed;
        }
        return updatedArray.push(item);
      });
      return updatedArray;

    case CHECKED_TODOS:
      let todoArray = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        return todoArray.push(item)
      })
      return todoArray;
    default:
      return state;
  }
};
