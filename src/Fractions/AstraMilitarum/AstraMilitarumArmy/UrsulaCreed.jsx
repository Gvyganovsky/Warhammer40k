import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Ursulacreed from "../../../assets/AstraMilitarum/Ursula Creed.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { WeaponOther } from "../../../Components/WeaponOther";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Duty_and_Vengeance, Power_sword
} from "../AstraMilitarumWeapon";

import {
    INGRAINED_PRECISION, VICIOUS_TRAPS, ACCEPTABLE_LOSSES, FIELD_PROMOTION,
    ARTILLERY_STRIKE_REQUESTED
} from "../AstraMilitarumStrat";

import Sv from "../../../assets/icons/Sv.png";
import question from "../../../assets/icons/question.png";
import dice from "../../../assets/icons/dice.png";

export const UrsulaCreed = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={Ursulacreed}
                M='6"' WS='3+' BS='3+' S='3' T='3' W='5' A='5' Ld='9' Sv='4+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Duty_and_Vengeance /> <Power_sword />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Lord Castellan’s Fury' AbNum='1' AbIcon={question}
                    AbText='Каждый раз, когда эта модель отдает приказ подразделению, до начала вашей 
                    следующей фазы командования, каждый раз, когда модель в этом подразделении совершает 
                    атаку дальнего боя, прибавляйте 1 к характеристике силы этой атаки.'/>

                <AbilitiesBlock AbTitle='Refractor Field' AbNum='5+' AbIcon={Sv}
                    AbText='Эта модель имеет 5+ неуязвимых сейвов.' />

                <AbilitiesBlock AbTitle='Tactical Genius' AbNum='2' AbIcon={question}
                    AbText='Пока эта модель находится на поле боя, вы можете использовать стратегию 
                    повторного броска команды до двух раз за фазу, а не только один раз.' />

                <AbilitiesBlock AbTitle='Senior Officer (Aura)' AbNum='1' AbIcon={dice}
                    AbText='Пока дружественный отряд находится в пределах 6" от этой модели, когда 
                    модель в этом подразделении совершает атаку, повторно бросайте бросок удара, равный 1.' />
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <INGRAINED_PRECISION /> <VICIOUS_TRAPS />
                <FIELD_PROMOTION /> <ARTILLERY_STRIKE_REQUESTED />
                <ACCEPTABLE_LOSSES />
            </section>
        </section >
    )
}