import React from "react"
import Item from "../Item/Item"
function ItemList (props) {
    return (
        <>
        {props.data.map((item)=>{
            return (
            
                <Item 
                key={item.id}
                tipo={item.tipo}
                marca={item.marca}
                modelo={item.modelo}
                origen={item.origen}
                precio={item.precio}
                id={item.id}
                imagen={item.imagen}
                
                ></Item>
            )
        })}
        </>
    )
    
}

export default ItemList