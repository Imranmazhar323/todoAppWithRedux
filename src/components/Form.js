import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodoo } from "../redux/todoApp/actions";

const Form = ({ editFormVisibility, editTodo, cancelUpdate }) => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    let editedObj = {
      id: editTodo.id,
      todo: editValue,
      completed: false,
    };
    dispatch(editTodoo(editedObj));
  };

  return (
    <div>
      {editFormVisibility === false ? (
        <form className="form-group custom-form" onSubmit={handleSubmit}>
          <h5>Add your todo-items</h5>
          <div className="input-and-btn">
            <input style={{ width: "70%" }}
              type="text"
              className="form-control"
              required
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
            />
            <button style={{ width: "30%" }} type="submit" className="btn btn-secondary btn-md">
              Add Todo
            </button>
          </div>
        </form>
      ) : (
        <form className="form-group custom-form" onSubmit={handleEditSubmit}>
          <h5>Update your todo-items</h5>
          <div className="input-and-btn">
            <input
              type="text"
              className="form-control"
              required
              value={editValue || ""}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary btn-md">
              Update
            </button>
          </div>
          <button style={{ marginTop: "20px" }} onClick={cancelUpdate} className="btn btn-primary ">
            Go back
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
