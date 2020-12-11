import React , {useState} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../js/actions'


const AddTodo = ({addTodo}) => {
  const [text , setText] = useState("")


const handleSubmit = e => {
  e.preventDefault()
  const newTodo ={
    text : text , 
    id : Date.now(),
    isComplete : false ,
  }
  if (! text.trim()) return ;
  addTodo(newTodo)
  setText("")
}


  return (
    <div className = "add-todo-container">
     <h1>  todo App  </h1>
     <form onSubmit = {handleSubmit}>
         <input type="text" value={text}
          onChange={(e) => setText(e.target.value)}
          required
          />
         <button> Add List </button>
     </form>    
    </div>
  )
}


export default connect(null , {addTodo}) (AddTodo)
