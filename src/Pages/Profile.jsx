import { useAuth } from 'hooks/use-auth'
import { useDispatch } from 'react-redux'
import { removeUser } from 'store/slices/userSlice'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'

const Profile = () => {
    const { email } = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <section>
            <h1>{email}</h1>
            <button onClick={() => 
                dispatch(removeUser(),
                navigate('/')
                )}></button>
        </section>
    )
}

export { Profile } 