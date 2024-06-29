import { useTranslation } from "react-i18next";
import TodoForm from "../TodoForm";
import langAtom from "../../atoms/lang-atom";
import { useEffect } from "react";



export default function TodoContainer() {
  const { t, i18n } = useTranslation();
  const currentLanguage = langAtom.useValue()
  useEffect(()=>{
    i18n.changeLanguage(currentLanguage)
  },[currentLanguage])

  return (
    <>
     <div className='min-h-[50vh] flex flex-col items-center justify-center'>
    <h1 className="mb-6"> {t('Welcome to React')}</h1>
    <TodoForm />
    </div>
    </>
  );
}
