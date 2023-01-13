import useState from "./data/state"
export default function Day41(){
  
    const[count,setcount]=useState
  return(
    <div>
      <button onClick={()=>{
     setcount(n=>n+1);}}>
      
      </button>
    </div>
  )
  
  }