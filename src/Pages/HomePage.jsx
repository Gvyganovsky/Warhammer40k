import React from "react";
import styles from '../scss/HomePage.module.scss';
import TauEmpireImg from '../assets/logoFractions/TauEmpire.png';
import AstraMilitarumImg from '../assets/logoFractions/AstraMilitarum.png';

const HomePage = () => {
    return (
        <section className={styles.content}>
            <a href="./RegistrationPage">
                <div className={styles.block_conent}>
                    <img src={TauEmpireImg} alt="TauEmpire" className={styles.content_img} />
                    <div className={styles.content_title}>Регистрация</div>
                </div>
            </a>

            <a href="./TauEmpire">
                <div className={styles.block_conent}>
                    <img src={TauEmpireImg} alt="TauEmpire" className={styles.content_img} />
                    <div className={styles.content_title}>Империя Тау</div>
                </div>
            </a>

            <a href="./AstraMilitarum">
                <div className={styles.block_conent} href="/TauEmpireArmy">
                    <img src={AstraMilitarumImg} alt="AstraMilitarum" className={styles.content_imgAstraMilitarumImg} />
                    <div className={styles.content_title}>Им. Гвардия</div>
                </div>
            </a>

            <div className={styles.block_conent} href="/TauEmpire">
                <img src={TauEmpireImg} alt="TauEmpire" className={styles.content_img} />
                <div className={styles.content_title}>Некроны</div>
            </div>
        </section>
    )
}

export { HomePage }