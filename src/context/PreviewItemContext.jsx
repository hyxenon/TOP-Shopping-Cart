import { createContext, useEffect, useState } from "react";


const PreviewItemContext = createContext()


export function PreviewItemProvider({ children }){

    const [item, setItem] = useState( JSON.parse(localStorage.getItem('item')) || {
        name: "",
        price: "",
        img: ""
    })

    useEffect(()=> {
        localStorage.setItem('item',JSON.stringify(item))
    },[item])
    const cardClick = (name1,price1,img1) => {
        setItem({name:name1,price:price1,img:img1})
    }

    return(
        <PreviewItemContext.Provider value={{cardClick,item}}>
            {children}
        </PreviewItemContext.Provider>
    )
}

export default PreviewItemContext