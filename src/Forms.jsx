import { useState } from "react";
export default function userForm(){
    const [username, setUserName]= useState("");
    function changeName(e){
        setUserName(e.target.value)
    }
    return (
        <div>
            <label htmlFor="username">UserName </label>
            <input type="text" placeholder="Write Something" value={username} onChange={changeName} id="username"/>
            <button> Submit </button>
        </div>
    )
}