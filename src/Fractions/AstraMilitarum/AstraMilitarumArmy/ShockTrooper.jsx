import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Shocktrooper from "../../../assets/AstraMilitarum/ShockTrooper.png";

import {
    Bolt_pistol, Laspistol, Drum_fed_autogun, Flamer, Frag_grenade, Krak_grenade,
    Lasgun, Meltagun, Plasma_gun_S, Plasma_gun_SС, Chainsword, Frag_grenades
} from "../AstraMilitarumWeapon";

import {
    ARMOURED_FIST, VENGEANCE_FOR_CADIA, CADIA_STANDS, INGRAINED_PRECISION,
    OVERLAPPING_FIELDS_OF_FIRE, VOLLEY_FIRE, EXPERIENCED_EYE, FIRE_ON_MY_POSITION,
    BATTLEFIELD_BEQUEST, MOUNT_UP, SHIELD_OF_FLESH, VICIOUS_TRAPS, ACCEPTABLE_LOSSES
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

import hit from "../../../assets/icons/hit.svg";
import dice from "../../../assets/icons/dice.png";

const ShockTrooper = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={Shocktrooper} alt="ShockTrooper" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>6"</div>
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
                        <div className={style.param_number}>3</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={T} alt="T" className={style.param_img} />
                        <div className={style.param_number}>3</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>1</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>1</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Ld} alt="Ld" className={style.param_img} />
                        <div className={style.param_number}>6</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Sv} alt="Sv" className={style.param_img} />
                        <div className={style.param_number}>5+</div>
                    </div>
                </div>
            </section >

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Bolt_pistol />
                    <Laspistol />
                    <Drum_fed_autogun />
                    <Flamer />
                    <Frag_grenade />
                    <Krak_grenade />
                    <Lasgun />
                    <Meltagun />
                    <Plasma_gun_S />
                    <Plasma_gun_SС />
                    <Chainsword />
                    <Frag_grenades />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Shock Troops</div>
                        <div className={style.block_symbol}>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Атаку lasgun или laspistol при выпадении 6 дает 1 дополнительное попадание.
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <ARMOURED_FIST />
                <VENGEANCE_FOR_CADIA />
                <CADIA_STANDS />
                <INGRAINED_PRECISION />
                <OVERLAPPING_FIELDS_OF_FIRE />
                <VOLLEY_FIRE />
                <EXPERIENCED_EYE />
                <FIRE_ON_MY_POSITION />
                <BATTLEFIELD_BEQUEST />
                <MOUNT_UP />
                <SHIELD_OF_FLESH />
                <VICIOUS_TRAPS />
                <ACCEPTABLE_LOSSES />
            </section>
        </section >
    )
}

export { ShockTrooper }