// Write your code here
import React, {useState} from 'react'

import './index.css'

const TodoItem = props => {
  const {todoList, deleteUser} = props
  const {title, id} = todoList

  const [editButtonClicked, setEditButtonState] = useState(true)
  const [isTitleClicked, setTitleClicked] = useState(false)
  const [todo, setTodo] = useState(title)
  const onDeleteTodo = () => {
    deleteUser(id)
  }
  const onClickEditButton = () => {
    setEditButtonState(prevState => !prevState)
  }

  const onEditTitle = event => {
    setTodo(event.target.value)
  }

  const onClickTitle = () => {
    setTitleClicked(prevState => !prevState)
  }

  const titleStrike = isTitleClicked ? 'striked-class' : ''

  return (
    <li className="todo-item-container">
      <label>
        <input type="checkbox" className="check-box" onChange={onClickTitle} />
        {editButtonClicked ? (
          <p className={`task ${titleStrike}`}>{todo}</p>
        ) : (
          <input
            type="text"
            className="edited-text"
            value={todo}
            onChange={onEditTitle}
          />
        )}
      </label>
      <div className="edit-and-delete-container">
        <button
          className="edit-button"
          type="button"
          onClick={onClickEditButton}
        >
          {editButtonClicked ? 'Edit' : 'Save'}
        </button>
        <button className="button" type="button" onClick={onDeleteTodo}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
