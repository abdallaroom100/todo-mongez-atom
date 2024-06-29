import { useState } from "react";
import Delete from "../../utils/icons/Delete";
import Edit from "../../utils/icons/Edit";
import OkButton from "../../utils/OkButton";

export default function Todo({ item }: { item: { text: string, id: string } }) {
  const [editInputText, setInputText] = useState<string>("")
  const [allowEdit,setAllowEdit] = useState<boolean>(false)
  const onClickHandler = (text:string)=>{
    setAllowEdit(!allowEdit)
    setInputText(text)
  }
  return (
    <>
      {allowEdit ?
        <input className="bg-transparent h-[100%] text-[26px] w-[85%] outline-none border-b"  onChange={(e) => setInputText(e.target.value)} value={editInputText} type="text" />
        : <h2 className="text text-[26px]">{item.text}</h2>}
      <div className="tools flex gap-2">
        <Delete item={item} />
        {allowEdit?<span  onClick={()=>{editInputText && setAllowEdit(false)}}><OkButton  text={editInputText}  id={item.id} /></span>
        :<span onClick={()=>onClickHandler(item.text)}><Edit id={item.id} /></span>}
      </div>
    </>
  );
}
