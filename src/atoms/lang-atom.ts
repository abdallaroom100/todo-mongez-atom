import { atom } from "@mongez/react-atom";

 const langAtom = atom<"ar" | "en">({
    key:"lang",
    default:localStorage.getItem("lang") as ("en" | "ar") || "en",
    beforeUpdate(lang){
        localStorage.setItem("lang",lang)
        return lang
    },

})


export default langAtom