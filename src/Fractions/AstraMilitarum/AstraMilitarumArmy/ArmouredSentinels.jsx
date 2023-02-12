import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Armouredsentinels from "../../../assets/AstraMilitarum/Armoured Sentinels.png";

import {
    Heavy_flamer, Hunter_killer_missile, Lascannon,
    Militarum_multi_laser, Militarum_plasma_S, Militarum_plasma_Sp,
    Missile_launcher_F, Missile_launcher_K, Sentinel_chainsaw, Autocannon
} from "../AstraMilitarumWeapon";

import {
    VENGEANCE_FOR_CADIA, INGRAINED_PRECISION, OVERLAPPING_FIELDS_OF_FIRE, EXPERIENCED_EYE,
    MAVERICK_MANOEUVRES, ACCEPTABLE_LOSSES, VICIOUS_TRAPS, SMOKE_LAUNCHERS,
    ABLATIVE_PLATING
} from "../AstraMilitarumStrat";

import M from "../../../assets/icons/M.png";
import WS from "../../../assets/icons/WS.png";
import BS from "../../../assets/icons/BS.png";
import S from "../../../assets/icons/S.png";
import T from "../../../assets/icons/T.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";
import Ld from "../../../assets/icons/Ld.png";
import Sv from "../../../assets/icons/Sv.png";

import skull from "../../../assets/icons/skull.png";
import hit from "../../../assets/icons/hit.svg";

const ArmouredSentinels = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={Armouredsentinels} alt="Armoured Sentinels" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>8"</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={WS} alt="WS" className={style.param_img} />
                        <div className={style.param_number}>4+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={BS} alt="BS" className={style.param_img} />
                        <div className={style.param_number}>4+</div>
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
                        <div className={style.param_number}>7</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>2</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Ld} alt="Ld" className={style.param_img} />
                        <div className={style.param_number}>7</div>
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
                    <Autocannon />
                    <Heavy_flamer />
                    <Hunter_killer_missile />
                    <Lascannon />
                    <Militarum_multi_laser />
                    <Militarum_plasma_S />
                    <Militarum_plasma_Sp />
                    <Missile_launcher_F />
                    <Missile_launcher_K />
                    <Sentinel_chainsaw />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Armoured Cockpit</div>
                        <div className={style.block_symbol}>
                            <div className={style.abilities_title}>+1</div>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Каждый раз, когда модели в этом подразделении назначается дальняя атака
                        с характеристикой урона 1, добавляйте 1 к спасброску, сделанному против
                        этой атаки.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Explodes</div>
                        <div className={style.block_symbol}>
                            <div className={style.abilities_title}>+1</div>
                            <img src={skull} alt="skull" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Каждый раз, когда модель в этом блоке уничтожается, бросайте 1D6, прежде чем удалять ее
                        из игры. На 6 он взрывается, и каждый юнит в пределах 3" получает 1 смертельное ранение.
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <VENGEANCE_FOR_CADIA />
                <INGRAINED_PRECISION />
                <OVERLAPPING_FIELDS_OF_FIRE />
                <EXPERIENCED_EYE />
                <MAVERICK_MANOEUVRES />
                <ACCEPTABLE_LOSSES />
                <VICIOUS_TRAPS />
                <SMOKE_LAUNCHERS />
                <ABLATIVE_PLATING />
            </section>
        </section >
    )
}

export { ArmouredSentinels }