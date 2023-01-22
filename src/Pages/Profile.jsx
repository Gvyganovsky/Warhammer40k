import { redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useAuth } from 'hooks/use-auth'
import { removeUser } from 'store/slices/userSlice'

const Profile = () => {
    const dispatch = useDispatch();
    const { isAuth, email } = useAuth();

    return (
        <section>
            <h1>{email}</h1>
            
        </section>
    )
}

export { Profile } 