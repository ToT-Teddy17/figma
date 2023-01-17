import { useState } from "react"
import Accordion from "./Accordion"

export default function Panel ({ h2,children,title}){
    const [isActive,setIsActive]=useState(false)
    return(
        <div>
           
            <h3>{title}</h3>

            {
                isActive? <p>{children}<button></button> </p>
                :<button onClick={()=>setIsActive(true)}>Show</button>
                

            }
           
            
            
        </div>
    )
}