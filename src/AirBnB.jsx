import PropertiesList from './PropertiesList.jsx'
import './properties.css'
export default function AirBnB({p}){
return (
    <div className="properties">
        
            {p.map(i=>{
                return <PropertiesList {...i}/>
            })}
            
        

    </div>
)
}