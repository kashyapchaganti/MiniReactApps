import { useState } from "react";
export default function BetterSignUpForm(){
    const [formData, setUserName]= useState({firstName:"", lastName:""});
    function handleChange(e){
        const field= e.target.name;
        const value = e.target.value;
        setUserName(obj =>{
            obj[field]= value;
            return {...obj}
        })
    }
    function HandleSubmit(){
        console.log(formData.firstName,formData.lastName)
    }
    return (
        <div>
            <label htmlFor="firstname"> FirstName </label>
            <input type="text" placeholder="Write Something" value={formData.firstName} onChange={handleChange} id="firstname" name="firstName"/>
            <label htmlFor="lastname"> LastName </label>
            <input type="text" placeholder="Write Something" value={formData.lastName} onChange={handleChange} id="lastname" name="lastName"/>
            <button onClick={HandleSubmit}> Submit </button>
        </div>
    )
}