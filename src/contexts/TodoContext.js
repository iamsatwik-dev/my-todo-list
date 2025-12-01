import { createContext,useContext } from "react";
export const TodoContext = createContext({
    todo:[
        {
            id:1,
            todo:"write msg",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    ToggleComplete:(id)=>{}
})
export const useTodo=()=>useContext(TodoContext)
export const TodoContextProvider=TodoContext.Provider;
