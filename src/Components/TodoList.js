import React from 'react'
import {connect} from 'react-redux'
import TodoCard from './TodoCard'


const TodoList = ({ todolist }) => {
  return (
    <div className="todo-list">
       { todolist.map(el=> (
      <TodoCard key={el.id} todo={el} />
       ) )}
    </div>
  )
}
const mapStateToProps = (state) => ({
 todolist : state.todos ,
})



export default connect(mapStateToProps) (TodoList);
