export default function Register(){
    return(
        <div>
            <form>
            <label for='email'>Email:</label>
                <input  name="email" type="email" />
                <label for='firstname'>FirstName:</label>
                <input name="firstname" type="text" />


                <label for='password'>Password:</label>
                <input name="password" type="passwprd" />
                <button>Register</button>
            </form>
        </div>
    )
}