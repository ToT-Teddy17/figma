import { useState } from 'react'
function Neg() {

    const [text, setText] = useState('')
    const [isSending, setIsSending] = useState(false)
    const [isSend, setIsSend] = useState(false)

    async function handleSubmite(e) {
        e.preventDefault();
        setIsSending(true);
        await setMessage(text);
        setIsSending(false);
        setIsSend(true);
    }
  
    function setMessage(text) {
        return new Promise(resolve => {
            setTimeout(resolve, 2000);
        })
    }




    return isSend ? (
        <h1>thanks</h1>
    ) : (
        <div className='demo'>

            <form onSubmit={(e) => handleSubmite(e)} className=''>
                <h1>write something</h1>
                <textarea value={text} disabled={isSending} onChange={e => setText(e.target.value)} ></textarea>
                <br></br>
                <button>send</button>
                {isSending && <p>sending...........</p>}
            </form>


        </div>
    );





}

export default Neg;
