import { useState } from "react";
import {getRolls, sum} from './Utils'
import Dice from "./Dice";
import "./LuckyN.css"
export default function LuckyN({numDice=2,goal=7}){

    const [dice, setDice]= useState(()=>getRolls(numDice))
    const isWinner = sum(dice)===goal?true:false;
    function reroll(){
        return setDice(getRolls(numDice))
    }
    return (
        <main >
            <h1>Target = {goal}</h1>
            <Dice dice={dice}/>
            {/* {isWinner? <p style ={{fontSize: "green"}}>Huhu!!!</p>:null} */}
            {isWinner ? <p style={{color: "green", fontSize:"40px"}}>Huhu!!!</p> : null}
            <button onClick = {reroll}> Re-Roll </button>
            
        </main>
    )
}