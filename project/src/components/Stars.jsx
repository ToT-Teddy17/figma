
// import { useState } from "react";
// import { Rating } from "react-simple-star-rating";
// export default function  Stars() {
    
// }
// function handleUpVote() {
    
    
// }

import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export function Stars() {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = () => {
   

    // other logic
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  

  return (
    <div className='App'>
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        
        /* Available Props */
      />
    </div>
  )
}
