import { useAuth } from 'hooks/use-auth'
import { useDispatch } from 'react-redux'
import { removeUser } from 'store/slices/userSlice'
import { useNavigate } from "react-router-dom";
import styles from '../scss/Profile.module.scss'
import profile from '../assets/icons/profile.svg'

const Profile = () => {
    const { email } = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <section className={styles.profile}>
            <img src={profile} alt="profile" className={styles.profile_img} />
            <h1 className={styles.profile_email}>{email}</h1>
            <button onClick={() =>
                dispatch(removeUser(),
                    navigate('/')
                )} className={styles.profile_but}>Выйти из аккаунта</button>
        </section>
    )
}

export { Profile } 