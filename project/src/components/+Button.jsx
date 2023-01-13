import { useState } from 'react'

export default function ClickButton(props) {
    const [counter, setCounter] = useState(0);
    const handleClick = () => {
        setCounter(counter + 1)
        console.log(counter)
        props.setWishList(props.wishlist+1)
    }
    return (
        <div>
            <p>{counter}</p>
            <button onClick={handleClick} className='subbutton' class="bi bi-cart bg-warning rounded-circle">{setCounter}</button>
        </div>
    )
}