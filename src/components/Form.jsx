import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.name.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      name: todo.name.trim(),
      done: false,
    };

    setTodos([...todos, newTodo]);
    setTodo({ name: "", done: false });
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.modernform}>
        <input
          className={styles.moderninput}
          placeholder="Add a new task"
          type="text"
          value={todo.name}
          onChange={(e) =>
            setTodo({ ...todo, name: e.target.value, done: false })
          }
        />
        <button className={styles.modernbutton} type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
}
