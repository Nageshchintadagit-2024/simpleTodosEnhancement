import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {
    tasksList: initialTodosList,
    todoItem: '',
  }

  deleteUser = id => {
    const {tasksList} = this.state
    const filteredList = tasksList.filter(each => each.id !== id)
    this.setState({tasksList: filteredList})
  }

  onChangeTodo = event => {
    this.setState({todoItem: event.target.value})
  }

  handleAddTodo = () => {
    const {todoItem} = this.state
    const newTodoTitle = todoItem.trim()
    const lastChar = newTodoTitle.charAt(newTodoTitle.length - 1)
    console.log(lastChar)
    if (newTodoTitle) {
      if (!isNaN(lastChar)) {
        for (let i = 0; i < lastChar; i++) {
          const newTodoItem = {
            id: uuidv4(),
            title: newTodoTitle.slice(0, newTodoTitle.length - 1),
          }
          this.setState(prevState => ({
            tasksList: [...prevState.tasksList, newTodoItem],
            todoItem: '',
          }))
        }
      } else {
        if (newTodoTitle) {
          const newTodoItem = {
            id: uuidv4(),
            title: newTodoTitle,
          }
          this.setState(prevState => ({
            tasksList: [...prevState.tasksList, newTodoItem],
            todoItem: '',
          }))
        }
      }
    }
  }

  renderAddTodoItem = () => {
    const {tasksList, todoItem} = this.state
    return (
      <div className="add-todo-container">
        <input
          type="text"
          className="add-todo"
          placeholder="Add your todo here..."
          value={todoItem}
          onChange={this.onChangeTodo}
        />
        <button
          type="button"
          className="add-button"
          onClick={this.handleAddTodo}
        >
          Add
        </button>
      </div>
    )
  }

  render() {
    const {tasksList} = this.state
    return (
      <div className="container">
        <div className="todos-container">
          <h1 className="heading">Simple Todos</h1>
          {this.renderAddTodoItem()}
          <ul className="list-name-container">
            {tasksList.map(each => (
              <TodoItem
                todoList={each}
                key={each.id}
                deleteUser={this.deleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
