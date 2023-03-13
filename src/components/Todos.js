import React from "react";
import Icon from "react-icons-kit";
import { useDispatch, useSelector } from "react-redux";
import { trash } from "react-icons-kit/feather/trash";
import { edit2 } from "react-icons-kit/feather/edit2";
import { checkedTodo, deleteTodo } from "../redux/todoApp/actions";

function Todos({ handleEditClick, editFormVisibility }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleChecked = (id) => {
    dispatch(checkedTodo(id));
  };

  return todos.map((todo) => (
    <div key={todo.id} className="todo-box">
      <div className="content">
        {editFormVisibility === false && (
          <input type="checkbox" checked={todo.completed} onChange={() => handleChecked(todo.id)}></input>
        )}
        <p
          style={
            todo.completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todo.todo}
        </p>
      </div>
      <div className="actions-box">
        {editFormVisibility === false && (
          <>
            <span onClick={() => handleEditClick(todo)}>
              <Icon icon={edit2} />
            </span>
            <span onClick={() => handleDeleteTodo(todo.id)}>
              <Icon icon={trash} />
            </span>
          </>
        )}
      </div>
    </div>
  ));
}

export default Todos;
