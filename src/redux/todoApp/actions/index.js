// type and payload
export const ADD_TODO = "ADD_TODO";
export const DELETE_ALL = "DELETE_ALL";
export const DELETE_TODOS = "DELETE_TODOS";
export const EDIT_TODOS = "EDIT_TODOS";
export const CHECKED_TODOS = "CHECKED_TODOS";


export const addTodo = (todo) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };
};

export const deleteAll = () => {
  return (dispatch) => {
    dispatch({
      type: DELETE_ALL,
    });
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_TODOS,
      payload: id,
    });
  };
};

export const editTodoo = (payload) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_TODOS,
      payload
    });
  };
};


export const checkedTodo = (id) => {
  return (dispatch) => {
    dispatch({
      type: CHECKED_TODOS,
      payload: id
    });
  };
};
