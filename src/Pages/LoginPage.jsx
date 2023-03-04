import { Link } from "react-router-dom";
import { Login } from "../Registration/Login";
import styles from '../scss/Registration.module.scss';

const LoginPage = () => {
    return (
        <section className={styles.section_block}>
            <div className={styles.block_reg_log}>
                <div className={styles.title_reg_log}>Вход</div>
                <Login />
                <Link to="../ForgotPasswordPage"><div className={styles.text_reg_log}>Забыли пароль?</div></Link>
                <div className={styles.block_or}>
                    <div className={styles.line}></div>
                    <div className={styles.or_text}>OR</div>
                    <div className={styles.line}></div>
                </div>
                <Link to="/RegistrationPage"><p className={styles.title_log}>Мне нужно зарегистрироваться</p></Link>
            </div>
        </section>
    )
}

export { LoginPage }
