import React from "react";
import style from "../../scss/Fractions.module.scss";
import HiveTyrant from "../../assets/Tyranids/Hive Tyrant.png";
import Termagant from "../../assets/Tyranids/Termagant.png";
import TyranidWarriors from "../../assets/Tyranids/Tyranid Warriors.png";
import Zoanthropes from "../../assets/Tyranids/Zoanthropes.png";

const Tyranids = () => {
    return (
        <section className={style.content}>
            <a href="/HiveTyrant" className={style.Combat_Unit}>
                <img src={HiveTyrant} alt="HiveTyrant" className={style.Combat_Unit_img} style={{ margin: '-55px 0px 0px -20px' }} />
                <div className={style.Combat_Unit_text}>
                    Hive Tyrant
                </div>
            </a>

            <a href="/Termagant" className={style.Combat_Unit}>
                <img src={Termagant} alt="Termagant" className={style.Combat_Unit_img} style={{ margin: '-70px 0px 0px -20px' }} />
                <div className={style.Combat_Unit_text}>
                    Termagant
                </div>
            </a>

            <a href="/TyranidWarriors" className={style.Combat_Unit}>
                <img src={TyranidWarriors} alt="TyranidWarriors" className={style.Combat_Unit_img} style={{ margin: '-65px 0px 0px -20px' }} />
                <div className={style.Combat_Unit_text}>
                    Tyranid Warriors
                </div>
            </a>

            <a href="/Zoanthropes" className={style.Combat_Unit}>
                <img src={Zoanthropes} alt="Zoanthropes" className={style.Combat_Unit_img} style={{ margin: '-45px 0px 0px -20px' }} />
                <div className={style.Combat_Unit_text}>
                    Zoanthropes
                </div>
            </a>
        </section>
    )
}

export { Tyranids }