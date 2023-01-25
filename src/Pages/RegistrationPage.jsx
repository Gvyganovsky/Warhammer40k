import { Link } from "react-router-dom"
import { Registration } from "../Registration/Registration"
import styles from '../scss/Registration.module.scss';

const RegistrationPage = () => {
    return (
        <section className={styles.section_block}>
            <div className={styles.block_reg_log}>
                <div className={styles.title_reg_log}>Регистрация</div>
                <div className={styles.text_reg_log}>Похоже, у вас нет учетной записи. Давайте создадим для вас новую!</div>
                <Registration />
                <div className={styles.block_or}>
                    <div className={styles.line}></div>
                    <div className={styles.or_text}>OR</div>
                    <div className={styles.line}></div>
                </div>
                <Link to="/LoginPage"><p className={styles.title_log}>У меня уже есть аккаунт</p></Link>
            </div>
        </section>
    )
}

export { RegistrationPage }


