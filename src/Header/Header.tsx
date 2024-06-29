import langAtom from "../atoms/lang-atom";

export default function Header() {
  return (
    <>
      <div className="header flex justify-between items-center">
        <div className="todo">
          <h1>TODO</h1>
        </div>
       <div className="flex gap-3">
       <button onClick={()=>langAtom.update("en")}>en</button>
       <button onClick={()=>langAtom.update("ar")}>ar</button>
       </div>
   
      </div>
    </>
  );
}
