import { useAuth } from 'hooks/use-auth'
import { removeUser } from 'store/slices/userSlice'

const Profile = () => {
    const { email } = useAuth();

    return (
        <section>
            <h1>{email}</h1>
            
        </section>
    )
}

export { Profile } 