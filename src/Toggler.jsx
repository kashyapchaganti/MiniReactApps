import {useState} from "react"
import "./toggler.css"


export default function Toggler(){
    const [num, setNum]= useState(true);
    function setToggle(){
        return setNum(!num);
    }
    return(
        <div>
            <p  className="toggle" onClick={setToggle} >{num?"😁":"🥹"}</p>
        </div>
    )
}