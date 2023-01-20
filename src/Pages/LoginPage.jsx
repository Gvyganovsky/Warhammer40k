import { Link } from "react-router-dom"
import { Login } from "../Registration/Login"

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <Login />
            <p>Or <Link to="/RegistrationPage">Registration</Link></p>
        </div>
    )
}

export { LoginPage }
