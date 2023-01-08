import React from "react";
import { Outlet } from 'react-router-dom';
import styles from '../scss/HomePage.module.scss';
import TauEmpireImg from '../assets/TauEmpire.png';

//adb devices

const HomePage = () => {
    return (
        <div>
            <section className={styles.content}>
                <a href="./TauEmpire">
                    <div className={styles.block_conent}>
                        <img src={TauEmpireImg} alt="TauEmpire" className={styles.content_img} />
                        <div className={styles.content_title}>Империя Тау</div>
                    </div>
                </a>

                <a href="./Orks">
                    <div className={styles.block_conent} href="/TauEmpireArmy">
                        <img src={TauEmpireImg} alt="TauEmpire" className={styles.content_img} />
                        <div className={styles.content_title}>Империя Тау</div>
                    </div>
                </a>

                <div className={styles.block_conent} href="/TauEmpire">
                    <img src={TauEmpireImg} alt="TauEmpire" className={styles.content_img} />
                    <div className={styles.content_title}>Империя Тау</div>
                </div>

                <div className={styles.block_conent} href="/TauEmpire">
                    <img src={TauEmpireImg} alt="TauEmpire" className={styles.content_img} />
                    <div className={styles.content_title}>Империя Тау</div>
                </div>
                < Outlet />
            </section>
        </div>
    )
}

export { HomePage }