import styles from "./Todo_item.module.css";

export default function TodoItem({ item, todos, setTodos, showDeleteAlert }) {
  function handleDelete() {
    setTodos(todos.filter((todo) => todo.id !== item.id));
    showDeleteAlert(item.name);
  }

  function handleClick() {
    setTodos(
      todos.map((todo) =>
        todo.id === item.id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  return (
    <div className={styles.todoitem}>
      <div className={styles.todoitem_name}>
        <span
          className={styles.todoitem_checkbox}
          onClick={handleClick}
          style={{
            textDecoration: item.done ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {item.name}
        </span>
        <span>
          <button onClick={handleDelete} className={styles.delete_button}>
            <i className="fa fa-trash" aria-hidden="true">X</i>
          </button>
        </span>
      </div>
      <hr className={styles.todoitem_line} />
    </div>
  );
}
