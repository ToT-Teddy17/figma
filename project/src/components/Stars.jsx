

import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import cards from '../data/card'

export function Stars(props) {
  
  return (
    <div className='starnuud'>
      <Rating
      initialValue={cards.rate}
      />
    </div>
  )
}
