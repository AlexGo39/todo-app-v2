import {
  MdTask,
  MdRemoveCircleOutline,
  MdCheckCircleOutline,
} from 'react-icons/md'
import styles from './Todo.module.css'

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <li
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <MdTask className={styles.todoIcon} />
      <span className={styles.todoText}>{todo.text}</span>
      <MdRemoveCircleOutline
        className={styles.todoIconRemove}
        onClick={() => deleteTodo(todo.id)}
      />
      <MdCheckCircleOutline
        className={styles.todoIconCheck}
        onClick={() => toggleTodo(todo.id)}
      />
    </li>
  )
}

export default Todo
