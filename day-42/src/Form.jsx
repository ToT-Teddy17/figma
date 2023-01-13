import { useState } from 'react'

export default function Form() {
    const [users, setUsers] = useState([])
    
  
 
  
    

    
  
    function handleRegister(event) {
        event.preventDefault()
        console.log(event.target.firstname.value)
        console.log(users)
        const user = {
            firstname: event.target.firstname.value,
            lastname: event.target.lastname.value,
            password: event.target.password.value,
        }
        setUsers([...users, user])
    }
    return (
        <div>
            <form onSubmit={handleRegister} className='box'>
                <div>FirstName:<input name='firstname'></input></div>
                <div>LastName:<input name='lastname'></input></div>
                <div>Password:<input name='password'></input></div>
                <div>ConfirmPassword:<input name='confirm'></input></div>
                <div>
                    
                    <button  >Register</button></div>
            </form>

            {users.map(u => {
                return (
                    <div className='cutes'>
                        <div className=''>{u.firstname}</div>
                        <div> {u.lastname}</div>
                        {u.password}
                    </div>
                )
            })}
            </div>


            )
}