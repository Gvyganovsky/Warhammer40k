import React from "react";
import style from "../../scss/Fractions.module.scss";
import DeffDread from "../../assets/Orks/Deff Dread.png";
import Deffkoptas from "../../assets/Orks/Deffkoptas.png";
import OrkBoyz from "../../assets/Orks/Ork Boyz.png";
import WarbossinMegaArmour from "../../assets/Orks/Warboss in Mega Armour.png";

const Orks = () => {
    return (
        <section className={style.content}>
            <a href="/DeffDread" className={style.Combat_Unit}>
                <img src={DeffDread} alt="DeffDread" className={style.Combat_Unit_img} style={{ margin: '-60px 0px 0px -20px' }} />
                <div className={style.Combat_Unit_text}>
                    Deff Dread
                </div>
            </a>

            <a href="/Deffkoptas" className={style.Combat_Unit}>
                <img src={Deffkoptas} alt="Deffkoptas" className={style.Combat_Unit_img} style={{ margin: '-35px 0px 0px -20px' }} />
                <div className={style.Combat_Unit_text}>
                    Deffkoptas
                </div>
            </a>

            <a href="/OrkBoyz" className={style.Combat_Unit}>
                <img src={OrkBoyz} alt="OrkBoyz" className={style.Combat_Unit_img} style={{ margin: '-45px 0px 0px -20px' }} />
                <div className={style.Combat_Unit_text}>
                    Ork Boyz
                </div>
            </a>

            <a href="/WarbossinMegaArmour" className={style.Combat_Unit}>
                <img src={WarbossinMegaArmour} alt="WarbossinMegaArmour" className={style.Combat_Unit_img} style={{ margin: '-65px 0px 0px -20px' }} />
                <div className={style.Combat_Unit_text}>
                    Warboss in Mega Armour
                </div>
            </a>
        </section>
    )
}

export { Orks }