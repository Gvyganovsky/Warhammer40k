import { Link } from "react-router-dom"
import { Registration } from "../Registration/Registration"
import styles from '../scss/Registration.module.scss';
import back from '../assets/icons/back.svg'

const RegistrationPage = () => {
    return (
        <section className={styles.section_block}>
            <div className={styles.title_block}>
                <div className={styles.block_back}>
                    <img src={back} alt="back" className={styles.back} />
                    <span>Back</span>
                </div>

                <div className={styles.text_title}></div>
                <div className={styles.text_info}></div>
            </div>

            <div className={styles.block_reg_log}>
                <div className={styles.title_reg_log}>Регистрация</div>
                <Registration />
                <p>Alredy have an account? <Link to="/LoginPage">Sign in</Link></p>
            </div>
        </section>
    )
}

export { RegistrationPage }


