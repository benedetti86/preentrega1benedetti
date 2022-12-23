import { getListItemSecondaryActionClassesUtilityClass } from "@mui/material";
import React ,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList/ItemList"
import {getItems, getItemsByCategory } from "../../services/MockAPI"
function ItemListContainer (props){
    const[data, setData] = useState ([])
    const {cat} =useParams()
    useEffect (()=>{
        setData ([])
        if(cat===undefined){
        getItems()
        .then((productData)=>{
            setData (productData)
        })} else {
            getItemsByCategory(cat) 
            .then((productData)=>{
                setData(productData)
            })
        }
    }, {cat})
 return(
    <>
    <div>
        <h1>{props.greeting}</h1>
    </div>
    <div>
        <ItemList data={data}/>
    </div>
    </>
 )
}

export default ItemListContainer