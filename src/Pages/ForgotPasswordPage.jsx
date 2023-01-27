import { useState } from "react";
import { Link } from "react-router-dom";
import styles from '../scss/Registration.module.scss';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPasswordPage = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');

    sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log('Password reset email sent!')
        })
        .catch((error) => {
            console.log(error.message)
        });



    return (
        <section className={styles.section_block}>
            <div className={styles.block_reg_log}>
                <div className={styles.title_reg_log}>Восстановление пароля</div>
                <div className={styles.text_reg_log}>Мигом вернем вам память!</div>
                <div className={styles.inputBlock}>
                    <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className={styles.inputEm} />
                    <button onClick={() => sendPasswordResetEmail()}  className={styles.buttonReg}>..</button>
                </div>
                <div className={styles.block_or}>
                    <div className={styles.line}></div>
                    <div className={styles.or_text}>OR</div>
                    <div className={styles.line}></div>
                </div>
                <Link to="/RegistrationPage"><p className={styles.title_log}>Вернуться к регистрации</p></Link>
            </div>
        </section>
    )
}

export { ForgotPasswordPage }
