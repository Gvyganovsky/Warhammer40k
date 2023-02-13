import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Necronsoverlord from "../../../assets/Necrons/Necron Overlord.png";

import {
    Staff_of_light, Tachyon_arrow, Hyperphase_glaive, Hyperphase_sword,
    Voidblade, Voidscythe, Warscythe
} from "../NecronsWeapon";

import {
    BLOOD_RITES, METHODICAL_DESTRUCTION, TECHNO_ORACULAR_TARGETING, RESURRECTION_PROTOCOLS,
    HAND_OF_THE_PHAERON, DYNASTIC_HEIRLOOMS, RAREFIED_NOBILITY, TALENT_FOR_ANNIHILATION,
    TRANSLOCATION_CRYPT, RECLAIM_A_LOST_EMPIRE, EMPYRIC_DAMPING, SOLAR_PULSE
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

import general from "../../../assets/icons/general.png";

const NecronsOverlord = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={Necronsoverlord} alt="Necron overlord" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>6"</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={WS} alt="WS" className={style.param_img} />
                        <div className={style.param_number}>2+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={BS} alt="BS" className={style.param_img} />
                        <div className={style.param_number}>2+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={S} alt="S" className={style.param_img} />
                        <div className={style.param_number}>5</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={T} alt="T" className={style.param_img} />
                        <div className={style.param_number}>5</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>5</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>4</div>
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
                    <Staff_of_light />
                    <Tachyon_arrow />
                    <Hyperphase_glaive />
                    <Hyperphase_sword />
                    <Staff_of_light />
                    <Voidblade />
                    <Voidscythe />
                    <Warscythe />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>
                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Resurrection Orb</div>
                            <img src={general} alt="general" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Один раз за битву, на этапе вашего командования, носитель может использовать свой шар воскрешения.
                            Если это произойдет, выберите одно дружественное подразделение в пределах 6" от носителя, которое
                            не достигло своей начальной численности и протоколы реанимации которого не были введены в действие
                            на этом этапе. Вводятся в действие протоколы реанимации этого подразделения, и каждая уничтоженная
                            модель в этом подразделении начинает собираться заново.
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <BLOOD_RITES />
                <METHODICAL_DESTRUCTION />
                <TECHNO_ORACULAR_TARGETING />
                <RESURRECTION_PROTOCOLS />
                <HAND_OF_THE_PHAERON />
                <DYNASTIC_HEIRLOOMS />
                <RAREFIED_NOBILITY />
                <TALENT_FOR_ANNIHILATION />
                <TRANSLOCATION_CRYPT />
                <RECLAIM_A_LOST_EMPIRE />
                <EMPYRIC_DAMPING />
                <SOLAR_PULSE />
            </section>
        </section >
    )
}

export { NecronsOverlord }