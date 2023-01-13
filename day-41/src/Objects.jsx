import { useState } from "react";

export default function Object(){
   
   
    const[user ,setUser]=useState({age:10, name:"ted"})
    const check=()=>{
        const newUser={...user}
        newUser.age+=20;
        setUser(newUser)
        
    }
    return(<div>
        <button onClick={check}>{user.age}</button>
    </div>
    )
}