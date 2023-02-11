import React from "react";
import styles from '../scss/HomePage.module.scss';
import TauEmpireImg from '../assets/logoFractions/TauEmpire.png';
import AstraMilitarumImg from '../assets/logoFractions/AstraMilitarum.png';
import SpaceMarineImg from '../assets/logoFractions/SpaceMarine.png';
import BlackLegionImg from '../assets/logoFractions/BlackLegion.png';
import NecronsImg from '../assets/logoFractions/Necrons.png';
import TyranidsImg from '../assets/logoFractions/Tyranids.png';

const HomePage = () => {
    return (
        <section className={styles.content}>
            <a href="./TauEmpire">
                <div className={styles.block_conent}>
                    <img src={TauEmpireImg} alt="TauEmpire" className={styles.content_img} />
                    <div className={styles.content_title}>Империя Тау</div>
                </div>
            </a>

            <a href="./AstraMilitarum">
                <div className={styles.block_conent}>
                    <img src={AstraMilitarumImg} alt="AstraMilitarum" className={styles.content_img} style={{ width: '100px', height: '50px', margin: '15px 0' }} />
                    <div className={styles.content_title}>Имперская Гвардия</div>
                </div>
            </a>

            <a href="./SpaceMarine">
                <div className={styles.block_conent}>
                    <img src={SpaceMarineImg} alt="SpaceMarine" className={styles.content_img} />
                    <div className={styles.content_title}>Космодесант</div>
                </div>
            </a>

            <a href="./BlackLegion">
                <div className={styles.block_conent}>
                    <img src={BlackLegionImg} alt="BlackLegion" className={styles.content_img} />
                    <div className={styles.content_title}>Черный Легион</div>
                </div>
            </a>

            <a href="./Necrons">
                <div className={styles.block_conent}>
                    <img src={NecronsImg} alt="Necrons" className={styles.content_img} style={{ width: '50px'}}/>
                    <div className={styles.content_title}>Некроны</div>
                </div>
            </a>

            <a href="./Tyranids">
                <div className={styles.block_conent}>
                    <img src={TyranidsImg} alt="Tyranids" className={styles.content_img} />
                    <div className={styles.content_title}>Тираниды</div>
                </div>
            </a>
        </section>
    )
}

export { HomePage }