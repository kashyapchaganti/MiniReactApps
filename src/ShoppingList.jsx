import { useState } from "react"
import ShoppingListForm from "./ShoppingListForm"
import {v4 as uuid} from "uuid"
export default function ShoppingList(){
    const [items, setItems]= useState([{id:uuid(), product:"Bannana", quantity:2}, {id:uuid(), product:"Apple", quantity:4}])
    const addItem = (item)=>{
        if(!item.product || !item.quantity==0){
            return 
        }
        setItems(e=>{
            return [...e, {...item,id:uuid()}]
        })
    }
return(
    <div>
        <ul>
        {items.map(i => (
        <li key={i.id} >{i.product}-{i.quantity}</li>))
        
    }
    
    </ul>
    <ShoppingListForm addItem ={addItem}/>
    </div>
)
}


