
import TodoAtom from "../../atoms/todo-atom";
import Loader from "../../utils/Loader";

import Todo from "../Todo/Todo";

export default function TodoItem() {

  const todoList = TodoAtom.useValue()
  if(!todoList.length) return <Loader />
  return (
    <>
      {todoList.length && todoList.map(item=>(
      
        <div className="todoItem flex justify-between items-center mt-3" style={{ width:"clamp(354px, 2vw, 320px);"}}>
          <Todo item={item} />
        </div>
     
      ))}
    </>
  );
}
