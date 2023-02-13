import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Necronimmortals from "../../../assets/Necrons/Necron Immortals.png";

import {
    Gauss_blaster, Tesla_carbine
} from "../NecronsWeapon";

import {
    BLOOD_RITES, METHODICAL_DESTRUCTION, DIMENSIONAL_CORRIDOR, TECHNO_ORACULAR_TARGETING,
    TALENT_FOR_ANNIHILATION, TRANSLOCATION_CRYPT, RECLAIM_A_LOST_EMPIRE, PRISMATIC_DIMENSIONAL_BREACH,
    RELENTLESS_ONSLAUGHT, EMPYRIC_DAMPING, DISRUPTION_FIELDS, DISINTEGRATION_CAPACITORS, MALEVOLENT_ARCING,
    SOLAR_PULSE
} from "../NecronsStrat";

import M from "../../../assets/icons/M.png";
import WS from "../../../assets/icons/WS.png";
import BS from "../../../assets/icons/BS.png";
import S from "../../../assets/icons/S.png";
import T from "../../../assets/icons/T.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";
import Ld from "../../../assets/icons/Ld.png";
import Sv from "../../../assets/icons/Sv.png";

const NecronImmortals = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={Necronimmortals} alt="NecronImmortals" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>5"</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={WS} alt="WS" className={style.param_img} />
                        <div className={style.param_number}>3+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={BS} alt="BS" className={style.param_img} />
                        <div className={style.param_number}>3+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={S} alt="S" className={style.param_img} />
                        <div className={style.param_number}>4</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={T} alt="T" className={style.param_img} />
                        <div className={style.param_number}>5</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>1</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>2</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Ld} alt="Ld" className={style.param_img} />
                        <div className={style.param_number}>10</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Sv} alt="Sv" className={style.param_img} />
                        <div className={style.param_number}>3+</div>
                    </div>
                </div>
            </section >

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Gauss_blaster />
                    <Tesla_carbine />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <BLOOD_RITES />
                <METHODICAL_DESTRUCTION />
                <DIMENSIONAL_CORRIDOR />
                <TECHNO_ORACULAR_TARGETING />
                <TALENT_FOR_ANNIHILATION />
                <TRANSLOCATION_CRYPT />
                <RECLAIM_A_LOST_EMPIRE />
                <PRISMATIC_DIMENSIONAL_BREACH />
                <RELENTLESS_ONSLAUGHT />
                <EMPYRIC_DAMPING />
                <DISRUPTION_FIELDS />
                <DISINTEGRATION_CAPACITORS />
                <MALEVOLENT_ARCING />
                <SOLAR_PULSE />
            </section>
        </section >
    )
}

export { NecronImmortals }