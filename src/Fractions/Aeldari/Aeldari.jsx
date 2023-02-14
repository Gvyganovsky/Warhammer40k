import React from "react";
import style from "../../scss/Fractions.module.scss";
import GuardianDefenders from "../../assets/Aeldari/Guardian Defenders.png";
import Spiritseer from "../../assets/Aeldari/Spiritseer.png";
import Windriders from "../../assets/Aeldari/Windriders.png";
import Wraithlord from "../../assets/Aeldari/Wraithlord.png";

const Aeldari = () => {
    return (
        <section className={style.content}>
            <a href="/GuardianDefenders" className={style.Combat_Unit}>
                <img src={GuardianDefenders} alt="GuardianDefenders" className={style.Combat_Unit_img} style={{ margin: '-45px 0px 0px -20px' }} />
                <div className={style.Combat_Unit_text}>
                    Guardian Defenders
                </div>
            </a>

            <a href="/Spiritseer" className={style.Combat_Unit}>
                <img src={Spiritseer} alt="Spiritseer" className={style.Combat_Unit_img} style={{ margin: '-50px 0px 0px -20px' }} />
                <div className={style.Combat_Unit_text}>
                    Spiritseer
                </div>
            </a>

            <a href="/Windriders" className={style.Combat_Unit}>
                <img src={Windriders} alt="Windriders" className={style.Combat_Unit_img} style={{ margin: '-25px -50px 0 -20px', width: '250px'}} />
                <div className={style.Combat_Unit_text}>
                    Windriders
                </div>
            </a>

            <a href="/Wraithlord" className={style.Combat_Unit}>
                <img src={Wraithlord} alt="Wraithlord" className={style.Combat_Unit_img} style={{ margin: '-60px 0px 0px -20px' }} />
                <div className={style.Combat_Unit_text}>
                    Wraithlord
                </div>
            </a>
        </section>
    )
}

export { Aeldari }