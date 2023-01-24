import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form"
import { setUser } from "../store/slices/userSlice"

const Registration = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        console.log(auth);
        createUserWithEmailAndPassword(auth, email, password)
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
        <Form title="register" handleClick={handleRegister} />
    )
}

export { Registration } 