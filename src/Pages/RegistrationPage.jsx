import { Link } from "react-router-dom"
import { Registration } from "../Registration/Registration"

const RegistrationPage = () => {
    return (
        <div>
            <h1>Registration</h1>
            <Registration />
            <p>Alredy have an account? <Link to="/LoginPage">Sign in</Link></p>
        </div>
    )
}

export { RegistrationPage }


