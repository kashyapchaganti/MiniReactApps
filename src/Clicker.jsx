
export default function Clicker({msg, button}){
    function func(e){
        e.preventDefault();
        alert(msg)
    }
    return(
        <>
        <button onClick={func}>{button}</button>
        </>
        )}