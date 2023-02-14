import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import wraithlord from "../../../assets/Aeldari/Wraithlord.png";

import {
    Aeldari_flamer, Aeldari_mis_Sn, Aeldari_mis_S, Bright_lance, Ghostglaive_C,
    Ghostglaive_S, Scatter_laser, Shuriken_cannon, Shuriken_catapult, Starcannon,
    Wraithbone_fists
} from "../AeldariWeapon";

import {
    INEXHAUSTIBLE_HATRED, THE_GREAT_ENEMY, BLADESTORM, DEFIANT_TO_THE_LAST,
    FEIGNED_RETREAT, THE_TEARS_OF_ISHA, FIRE_AND_FADE, PHANTASM, WITHERING_VOLLEYS,
    THRICE_LAYERED_WARDS, STARHAWK_MISSILE
} from "../AeldariStrat";

import M from "../../../assets/icons/M.png";
import WS from "../../../assets/icons/WS.png";
import BS from "../../../assets/icons/BS.png";
import S from "../../../assets/icons/S.png";
import T from "../../../assets/icons/T.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";
import Ld from "../../../assets/icons/Ld.png";
import Sv from "../../../assets/icons/Sv.png";

import location from "../../../assets/icons/location.png";

const Wraithlord = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={wraithlord} alt="Wraithlord" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>8"</div>
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
                        <div className={style.param_number}>7</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={T} alt="T" className={style.param_img} />
                        <div className={style.param_number}>8</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>9</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>4</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Ld} alt="Ld" className={style.param_img} />
                        <div className={style.param_number}>9</div>
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
                    <Aeldari_flamer />
                    <Aeldari_mis_Sn />
                    <Aeldari_mis_S />
                    <Bright_lance />
                    <Ghostglaive_C />
                    <Ghostglaive_S />
                    <Scatter_laser />
                    <Shuriken_cannon />
                    <Shuriken_catapult />
                    <Starcannon />
                    <Wraithbone_fists />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Wraithbone Form</div>
                        <div className={style.block_symbol}>
                            <div className={style.abilities_title}>-1</div>
                            <img src={W} alt="W" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Каждый раз, когда атака назначается модели в этом подразделении, вычитайте
                        1 из урона, характерного для этой атаки (как минимум до 1).
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <INEXHAUSTIBLE_HATRED />
                <THE_GREAT_ENEMY />
                <BLADESTORM />
                <DEFIANT_TO_THE_LAST />
                <FEIGNED_RETREAT />
                <THE_TEARS_OF_ISHA />
                <FIRE_AND_FADE />
                <PHANTASM />
                <WITHERING_VOLLEYS />
                <THRICE_LAYERED_WARDS />
                <STARHAWK_MISSILE />
            </section>
        </section >
    )
}

export { Wraithlord }