import React from "react";
import style from "../../scss/Fractions.module.scss";
import DarkApostle from "../../assets/BlackLegion/Dark Apostle.png";
import Helbrute from "../../assets/BlackLegion/Helbrute.png";
import Havocs from "../../assets/BlackLegion/Havocs.png";
import ChaosSpaceMarines from "../../assets/BlackLegion/Chaos Space Marines.png";

const BlackLegion = () => {
    return (
        <section className={style.content}>
            <a href="/DarkApostle" className={style.Combat_Unit}>
                <img src={DarkApostle} alt="DarkApostle" className={style.Combat_Unit_img} style={{ margin: '-50px 0px 0px -20px' }} />
                <div className={style.Combat_Unit_text}>
                    Dark Apostle
                </div>
            </a>

            <a href="/Helbrute" className={style.Combat_Unit}>
                <img src={Helbrute} alt="Helbrute" className={style.Combat_Unit_img} style={{ margin: '-35px 0px 0px -20px' }} />
                <div className={style.Combat_Unit_text}>
                    Helbrute
                </div>
            </a>

            <a href="/Havocs" className={style.Combat_Unit}>
                <img src={Havocs} alt="Havocs" className={style.Combat_Unit_img} style={{ margin: '-40px 0px 0px -20px' }} />
                <div className={style.Combat_Unit_text}>
                    Havocs
                </div>
            </a>

            <a href="/ChaosSpaceMarines" className={style.Combat_Unit}>
                <img src={ChaosSpaceMarines} alt="ChaosSpaceMarines" className={style.Combat_Unit_img} style={{ margin: '-30px 0px 0px -20px' }} />
                <div className={style.Combat_Unit_text}>
                    Chaos Space Marines
                </div>
            </a>
        </section>
    )
}

export { BlackLegion }