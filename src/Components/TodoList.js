import React from 'react'
import {connect} from 'react-redux'

import TodoCard from './TodoCard'
import { filterTask } from "../js/actions";


function filterTodos(todoList, filterQuery) {
  // todoList : Array , filterQuery : String
  //filterQuery  ["no-filter" , "done" ,"undone"]
  switch (filterQuery) {
    case "done":
      return todoList.filter((todo) => todo.isComplete === true);
    case "undone":
      return todoList.filter((todo) => todo.isComplete === false);
    case "no-filter":
    default:
      return todoList;
  }
}



const TodoList = ({todolist , filterQuery }) => {
  const result = filterTodos(todolist, filterQuery);
  return (
    <div className="todo-list">
       { result.map(el=> (
      <TodoCard key={el.id} todo={el} />
       ) )}
    </div>
  )
}
const mapStateToProps = (state) => ({
 todolist : state.todos ,
 filterQuery: state.filterTask,
})



export default connect(mapStateToProps) (TodoList);
