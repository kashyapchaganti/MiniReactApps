export default function Game({v1, v2,v3}){
    const isWinner= v1===v2 && v2===v3;
    const colors = isWinner? "Green":"Red"; 
    
    return (
        <>
        <h1> {v1} {v2} {v3}</h1>
        <h2 style={{color: isWinner?"green":"red"}}> {isWinner? "You Won": "You Lost"}</h2>
        <h3>{isWinner?"Congrats":null}</h3>
        </>
    )
}