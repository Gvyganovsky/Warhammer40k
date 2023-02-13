import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Nightscythe from "../../../assets/Necrons/Night Scythe.png";

import {
    Twin_tesla_destructor
} from "../NecronsWeapon";

import {
    BLOOD_RITES, METHODICAL_DESTRUCTION, TECHNO_ORACULAR_TARGETING, TALENT_FOR_ANNIHILATION,
    STELLAR_ALIGNMENT_PROTOCOL, PRISMATIC_DIMENSIONAL_BREACH, CURSE_OF_THE_PHAERON, EMPYRIC_DAMPING,
    DISRUPTION_FIELDS, MALEVOLENT_ARCING, SOLAR_PULSE
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

const NightScythe = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={Nightscythe} alt="Nightscythe" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>50"</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={WS} alt="WS" className={style.param_img} />
                        <div className={style.param_number}>6+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={BS} alt="BS" className={style.param_img} />
                        <div className={style.param_number}>3+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={S} alt="S" className={style.param_img} />
                        <div className={style.param_number}>6</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={T} alt="T" className={style.param_img} />
                        <div className={style.param_number}>6</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>12</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>3</div>
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
                <div className={style.content_title}>Изменение характеристик от урона</div>
                <div className={style.damage_content}>
                    <div className={style.damage_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.damage_nubmer}>7-12</div>
                        <div className={style.damage_nubmer}>4-6</div>
                        <div className={style.damage_nubmer}>1-3</div>
                    </div>

                    <div className={style.damage_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.damage_nubmer}>50"</div>
                        <div className={style.damage_nubmer}>40"</div>
                        <div className={style.damage_nubmer}>30"</div>
                    </div>

                    <div className={style.damage_block}>
                        <img src={BS} alt="BS" className={style.param_img} />
                        <div className={style.damage_nubmer}>3+</div>
                        <div className={style.damage_nubmer}>4+</div>
                        <div className={style.damage_nubmer}>5+</div>
                    </div>

                    <div className={style.damage_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.damage_nubmer}>3</div>
                        <div className={style.damage_nubmer}>D3</div>
                        <div className={style.damage_nubmer}>1</div>
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Twin_tesla_destructor />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <BLOOD_RITES />
                <METHODICAL_DESTRUCTION />
                <TECHNO_ORACULAR_TARGETING />
                <TALENT_FOR_ANNIHILATION />
                <STELLAR_ALIGNMENT_PROTOCOL />
                <PRISMATIC_DIMENSIONAL_BREACH />
                <CURSE_OF_THE_PHAERON />
                <EMPYRIC_DAMPING />
                <DISRUPTION_FIELDS />
                <MALEVOLENT_ARCING />
                <SOLAR_PULSE />
            </section>
        </section >
    )
}

export { NightScythe }