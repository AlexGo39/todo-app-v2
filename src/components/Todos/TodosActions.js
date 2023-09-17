import { MdRefresh, MdOutlineDeleteForever } from 'react-icons/md'
import Button from '../UI/Button'
import styles from './TodosActions.module.css'
function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.todoActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <MdRefresh />
      </Button>

      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        <MdOutlineDeleteForever />
      </Button>
    </div>
  )
}

export default TodosActions
