import './properties.css'
export default function PropertiesList({name, rating, price,id }){
return(
    <div>
        <h2>{name}</h2>
        <h3>{rating} ⭐️</h3>
        <h4>$ {price}</h4>
        
    </div>
)
}