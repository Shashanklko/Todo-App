import { useState } from "react";
import TodoList from "./TodoList";
import Form from "./Form";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [alertMsg, setAlertMsg] = useState("");
  const completedCount = todos.filter((todo) => todo.done).length;

  function showDeleteAlert(text) {
    setAlertMsg(`${text} deleted successfully!`);
    setTimeout(() => setAlertMsg(""), 2000);
  }

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        showDeleteAlert={showDeleteAlert}
      />

      <div
        style={{
          textAlign: "center",
          margin: "20px 0",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Completed Tasks: {completedCount} / {todos.length}
      </div>

      <div
        style={{
          textAlign: "center",
          margin: "20px 0",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Total Tasks: {todos.length}
      </div>

      <div
        style={{
          textAlign: "center",
          margin: "20px 0",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        {todos.length === 0 ? "No tasks available" : ""}
      </div>

      {alertMsg && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#d4edda",
            color: "#155724",
            border: "1px solid #c3e6cb",
            borderRadius: "5px",
            textAlign: "center",
            margin: "10px auto",
            width: "fit-content",
            fontWeight: "bold",
          }}
        >
          {alertMsg}
        </div>
      )}
    </div>
  );
}
