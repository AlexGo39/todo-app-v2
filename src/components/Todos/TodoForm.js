import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (text !== '') {
      addTodo(text)
      setText('')
    }
  }
  return (
    <form className={styles.todoForm} onSubmit={onSubmitHandler}>
      <input
        className={styles.todoFormInput}
        placeholder="Enter new todo"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <Button className={styles.todoFormButton} type="submit" title="Submit">
        Submit
      </Button>
    </form>
  )
}

export default TodoForm
