import { useSelector } from "react-redux"

export const useTodo=()=>{
    const todos=useSelector(state=>state.todos)
    return todos
}

 
