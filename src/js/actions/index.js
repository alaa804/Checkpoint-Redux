import {ADD_TODO , REMOVE_TODO , TOGGLE_COMPLETE , EDIT_TASK, FILTER_TASKS} from '../const';



export const addTodo = (newTodo) => ({
    // newTodo its an object contain {text , id , isComplete} = newTodo
    type : ADD_TODO ,
    payload : newTodo , 
});

export const removeTodo = (id) => ({
    type : REMOVE_TODO ,
    payload : id ,
});


export const toggleComplete = (id) => ({
    type : TOGGLE_COMPLETE , 
    payload : id ,
});


export const editTask = (editedTask) => ({
    // editedTask its an object contain {text , id(the old id) , isCompleted} = editedTask
    type : EDIT_TASK , 
    payload : editedTask ,
});

export const filterTask = (str) => ({
    type: FILTER_TASKS,
    payload: str,
  });