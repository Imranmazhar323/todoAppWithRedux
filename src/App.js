import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Form from "./components/Form";
import Todos from "./components/Todos";
import { deleteAll } from "./redux/todoApp/actions";

function App() {
  const dispatch = useDispatch();
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState("");

  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  };
  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };

  const cancelUpdate = () => {
    setEditFormVisibility(false);
  };

  const todos = useSelector((state) => state.operationsReducer);
  return (
    <div className="App">
      <div className="wrapper">
        <br></br>
        <h4 className="text-center">Todo App using React - Redux</h4>
        <Form
          editFormVisibility={editFormVisibility}
          editTodo={editTodo}
          cancelUpdate={cancelUpdate}
        />
        <Todos
          handleEditClick={handleEditClick}
          editFormVisibility={editFormVisibility}
        />
        {todos.length > 1 && (
          <button style={{ marginTop: "20px" }}
            className="btn btn-danger btn-md delete-all"
            onClick={handleDeleteAll}
          >
            DELETE All
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
