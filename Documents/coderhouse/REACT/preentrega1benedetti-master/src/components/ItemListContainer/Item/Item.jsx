import React from "react";
import { Button } from "@mui/material"; 
import {Link} from "react-router-dom"

function Item (props){
    let {tipo,marca,modelo,imagen,origen,precio,id}=props
    const urlDetail=`/instrumentos/${id}`
return (
<div className="ClaseCart">
    <div>
        <img src={imagen} alt={marca+ " " + modelo} />
    </div>
    <div>
        <h2>marca: {marca}</h2>
        <h2>modelo: {modelo}</h2>
        <h2>origen: {origen}</h2>
        <h2>precio: {precio}</h2>
        
    </div>
    <Link to={urlDetail}>
   <Button>
        Comprar
    </Button>
    </Link>



</div>



); 
}
export default Item;