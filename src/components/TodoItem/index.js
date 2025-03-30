// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoList, deleteUser} = props
  const {title, id} = todoList
  const onDeleteTodo = () => {
    deleteUser(id)
  }
  return (
    <li className="todo-item-container">
      <p className="task">{title}</p>
      <button className="button" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
