import { useState } from "react";
import ShoppingList from "./ShoppingList";
export default function ShoppingListForm({addItem}){
    const [formData , setFormData]= useState({product:"", quantity:0});
    const setChange = (e)=>{
        return setFormData(obj =>  {
            return {...obj, [e.target.name]:e.target.value}
        })
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        addItem(formData);
        setFormData({product:"", quantity:0});
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>Product Name :{formData.product } and Quantity : {formData.quantity}</h1>
            <label htmlFor="product">Product</label>
            <input type="text" id="product" name="product" value={formData.product} onChange={setChange}/>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={setChange}/>
            <button > Add Item</button>
        </form>
        
        
            
            
        
        
        
    )
}