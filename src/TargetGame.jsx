import { useState } from "react";
import { v4 as uuid} from "uuid";

export default function TargetGame({numberOfPlayers,target}){
    const players= [];
    const [score, setScore] = useState(() => {
        const initialScore = [];
        for (let i = 0; i < numberOfPlayers; i++) {
          initialScore.push({ id: uuid(), score: 0, idx: i + 1 });
        }
        return initialScore;
      });
      
    function increment(id){
        return setScore(s=> {
            s.map(obj=>{
                if(obj.id==id){
                    return {...obj, score:obj.score+1}
                }else{
                    return obj;
                }
            })
        })
    }
    
    // function reset(){
    //     return setScore(new Array(numberOfPlayers).fill(0));
    // }
    
    return(
        <div style={{fontSize:"15px"}}>
            <h1> Score Keeper </h1>
            <>
            {
                score.map((s)=>  {return(
                    <>
                    <p> Player {s.idx} : {s.score} </p>
                    <span><button onClick={()=> increment(s.id)}> +1 </button> </span>
                    <span> {s.score>=target? <p>Winner!!</p>:null}</span>
                    </>
                )})
                    
                
            }
            </>
            {/* <div><button onClick = {reset}>reset </button></div> */}
            
        </div>
    )
}