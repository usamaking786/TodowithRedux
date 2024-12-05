import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos :[{id:1, text:"first todo",edit:false}]
}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action) =>{
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        editToggle: (state,action)=>{
            state.todos = state.todos.map((todo)=> todo.id === action.payload ?{...todo,edit:!todo.edit}:todo)
        },
        updateTodo : (state,action) =>{
            state.todos = state.todos.map((todo)=> todo.id === action.payload.id ? {...todo, text:action.payload.text} : todo )
        },
    }
})

    export const {addTodo, removeTodo, editToggle,updateTodo} = todoSlice.actions

    export default todoSlice.reducer