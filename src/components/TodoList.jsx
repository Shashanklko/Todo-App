import TodoItem from "./Todo_Item";
import styles from "./TodoList.module.css";

export default function TodoList({ todos, setTodos, showDeleteAlert }) {
    const sortedTodos = todos.slice().sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.todolist}>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.id} // Use id instead of index for better key performance
          item={item}
          todos={todos}
          setTodos={setTodos}
          showDeleteAlert={showDeleteAlert} // Pass this prop to each item
        />
      ))}
    </div>
  );
}
