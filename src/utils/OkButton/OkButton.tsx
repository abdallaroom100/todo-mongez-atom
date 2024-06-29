import TodoAtom from "../../atoms/todo-atom";
import "./index.css"
export default function OkButton(item:{text:string,id:string}) {
  return (
    <button  type="button" className="btn" onClick={()=>TodoAtom.editAtom(item.text,item.id)}>
    <strong>ok</strong>
    <div id="container-stars">
      <div id="stars"></div>
    </div>
  
    <div id="glow">
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  </button>
  
  );
}
