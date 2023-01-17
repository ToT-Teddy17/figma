import {useParams,} from 'react-router-dom'
import movieData from "../data/movies"
export default function Movie(){
    const {id}=useParams();
    const movie=movieData.filter((data)=>data.id==id);

    
   


    return(
        <div>
            <h1>Movie Detail page{id}</h1>
            {
                
                movie.map((m,idx)=>{
                    return(
                        <div key={idx}>
                            <p>{m.name}</p>
                            <p>{m.id}</p>
                            <p>{m.ISBN}</p>
                            <p>{m.genre}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}