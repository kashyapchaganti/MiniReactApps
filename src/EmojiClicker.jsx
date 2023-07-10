import {useState} from"react"
import {v4 as uuid} from "uuid"

export default function EmojiClicker(){
    const arr= ["🤣", "🥹", "😁", "😎", "😏", "😝", "😡", "🤢", "😈"]
    function addEmoji(){
        setEmoji(emoji=> [...emoji,{id: uuid(),emoji:randomEmoji(arr)}])
    }
    function deleteEmoji(id){
        return setEmoji(e=> e.filter(x => x.id!=id))
    }

    function randomEmoji(arr){
        const random = Math.floor(Math.random()*arr.length);
        return arr[random]
    }
    const [emoji,setEmoji]= useState([{id: uuid(),emoji:randomEmoji(arr)}])
    return(
        <div>
            {
                emoji.map((e) =>(
                    <span onClick ={()=>{deleteEmoji(e.id)}}  key={e.id} style={{fontSize: "5rem"}}>{e.emoji}</span>
                ))
            }
            <button onClick ={addEmoji} style={{fontSize: "5rem"}} >Add Emoji</button>
        </div>
    )
}