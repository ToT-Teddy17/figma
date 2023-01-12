import { useState } from "react";

 export default function Update(){
     let nextId=0;
     const [name,setName]=useState("");
     const [books,setBooks]=useState([]);
     
     
   
     return(
         <div>
             <h1>book list</h1>
             <input type={name} onChange={(e)=>setName(e.target.value)} />
             <button onClick={()=>{
                 setName("");
                 setBooks([...books,{id:nextId++,name:name}]);

             }}>Add</button>
             <ul>
                 {books.map((book)=>(<li key={book.id}>{book.name}

                 </li>))}
             </ul>
         </div>
     )
 }