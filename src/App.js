import React from 'react'

import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList'
import FilterTasks from './Components/FilterTasks'

import './App.css'

const App = () => {
  return (
    <div>
      < AddTodo />
      <FilterTasks />
      <TodoList />
     
    </div>
  )
}

export default App


  
       
  


