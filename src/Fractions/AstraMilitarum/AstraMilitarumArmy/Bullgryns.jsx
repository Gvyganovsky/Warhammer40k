import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import bullgryns from "../../../assets/AstraMilitarum/Bullgryns.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { WeaponOther } from "../../../Components/WeaponOther";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Grenadier_gauntlet, Bullgryn_maul, Frag_bombs
} from "../AstraMilitarumWeapon";

import {
    ACCEPTABLE_LOSSES, VICIOUS_TRAPS, SHIELD_OF_FLESH, INGRAINED_PRECISION,
} from "../AstraMilitarumStrat";


import Sv from "../../../assets/icons/Sv.png";
import hit from "../../../assets/icons/hit.svg";
import shooting from "../../../assets/icons/shooting.png";

export const Bullgryns = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={bullgryns}
                M='6"' WS='3+' BS='4+' S='6' T='5' W='3' A='4' Ld='7' Sv='4+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Grenadier_gauntlet /> <Bullgryn_maul /> <Frag_bombs />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>
                    <WeaponOther title='Brute shield' img={Sv}
                        text='У носителя есть 4+ неуязвимых сейва.' />

                    <WeaponOther title='Slabshield' img={shooting}
                        text='Предъявитель имеет характеристику сохранения 2+.' />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Wall of Muscle' AbNum='' AbIcon={hit}
                    AbText='Каждый раз, когда атака назначается модели в этом подразделении, 
                    вычтите 1 из урона, характерного для этой атаки.' />
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <ACCEPTABLE_LOSSES /> <VICIOUS_TRAPS />
                <SHIELD_OF_FLESH /> <INGRAINED_PRECISION />
            </section>
        </section >
    )
}