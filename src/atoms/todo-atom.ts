
import { atom } from "@mongez/react-atom";
import { v4 as uuidv4 } from 'uuid';
export type TodoType = {
    text:string,
    id:string,  
}

const TodoAtom = atom<TodoType[]  >({
    key:"todolist",
   default: JSON.parse(localStorage.getItem("tasks") as any ) || [],
   beforeUpdate(tasks){
    localStorage.setItem("tasks",JSON.stringify(tasks))
    return tasks
   },
   actions:{
    add:(text:string)=>{
        const todoList = TodoAtom.value
        todoList.push({ text,id:uuidv4()})
        TodoAtom.update([...todoList])
    },
    deleteAtom:(item:TodoType)=>{
        const todos = TodoAtom.value.filter(todo=>todo.id !== item.id)
        TodoAtom.update(todos)
    },
    editAtom:(text:string,id:string)=>{
   const todos = TodoAtom.value
   const editedTodos =  todos.map(todo=>todo.id === id ? {text:text,id:id} : todo)
    TodoAtom.update(editedTodos)
    }
   }
})

export default TodoAtom