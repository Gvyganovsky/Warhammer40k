import React from "react";
import style from "../../scss/Fractions.module.scss";
import Eliminators from "../../assets/SpaceMarine/Eliminators.png";
import Impulsor from "../../assets/SpaceMarine/Impulsor.png";
import Infiltrators from "../../assets/SpaceMarine/Infiltrators.png";
import LieutenantinPhobosArmour from "../../assets/SpaceMarine/Lieutenant in Phobos Armour.png";
import Suppressors from "../../assets/SpaceMarine/Suppressors.png";

const SpaceMarine = () => {
    return (
        <section className={style.content}>
            <a href="/Eliminators" className={style.Combat_Unit}>
                <img src={Eliminators} alt="Eliminators" className={style.Combat_Unit_img} style={{ margin: '-30px 0px 0px -20px' }} />
                <div className={style.Combat_Unit_text}>
                    Eliminators
                </div>
            </a>

            <a href="/Impulsor" className={style.Combat_Unit}>
                <img src={Impulsor} alt="Impulsor" className={style.Combat_Unit_img} style={{ margin: '-10px 50px 0px 0px', width: '130px', height: '120px' }} />
                <div className={style.Combat_Unit_text}>
                    Impulsor
                </div>
            </a>

            <a href="/Infiltrators" className={style.Combat_Unit}>
                <img src={Infiltrators} alt="Infiltrators" className={style.Combat_Unit_img} style={{ margin: '-50px 30px 0px -20px', width: '170px' }} />
                <div className={style.Combat_Unit_text}>
                    Infiltrators
                </div>
            </a>

            <a href="/LieutenantinPhobosArmour" className={style.Combat_Unit}>
                <img src={LieutenantinPhobosArmour} alt="LieutenantinPhobosArmour" className={style.Combat_Unit_img} style={{ margin: '-15px 0px 0px -20px' }} />
                <div className={style.Combat_Unit_text}>
                    Lieutenant in Phobos Armour
                </div>
            </a>

            <a href="/Suppressors" className={style.Combat_Unit}>
                <img src={Suppressors} alt="Suppressors" className={style.Combat_Unit_img} style={{ margin: '-10px 0px 0px -20px' }} />
                <div className={style.Combat_Unit_text}>
                    Suppressors
                </div>
            </a>
        </section>
    )
}

export { SpaceMarine }