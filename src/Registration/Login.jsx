import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Form } from "./Form"
import { setUser } from "../store/slices/userSlice"

const Login = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('../Profile')
            })
            .catch(() => alert('Неверная почта или пароль!'))
    }

    return (
        <Form title="sign in" handleClick={handleLogin} />
    )
}

export { Login } 