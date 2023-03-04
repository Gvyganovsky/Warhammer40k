import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import LordSolarLeonts from "../../../assets/AstraMilitarum/Lord Solar Leontus.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { DamageBlock } from "../../../Components/DamageBlock";
import { WeaponOther } from "../../../Components/WeaponOther";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Sols_Righteous_Gaze, Conquest
} from "../AstraMilitarumWeapon";

import {
    INGRAINED_PRECISION, VICIOUS_TRAPS, ACCEPTABLE_LOSSES, FIELD_PROMOTION,
    ARTILLERY_STRIKE_REQUESTED
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

export const LordSolarLeontus = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={LordSolarLeonts}
                M='12"' WS='2+' BS='2+' S='6' T='4' W='8' A='6' Ld='10' Sv='3+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Sols_Righteous_Gaze /> <Conquest />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Artificer Refractor Helm' AbNum='4+' AbIcon={Sv}
                    AbText='Эта модель имеет 4+ неуязвимых сейва. Уменьшайте вдвое урон 
                    (округляя в большую сторону).' />

                <AbilitiesBlock AbTitle='The Collegiate Astrolex' AbNum='1' AbIcon={dice}
                    AbText='В начале первой командной фазы сражения вы получаете 1 CP.' />

                <AbilitiesBlock AbTitle='Heroic Senior Officer (Aura)' AbNum='1' AbIcon={hit}
                    AbText='Если дружественный отряд находится в пределах 6" от этой модели,
                    каждый раз, когда модель в этом подразделении совершает атаку,
                    повторно бросайте бросок попадания 1 и повторно бросайте бросок
                    ранения 1.' />
            </section>

            <section className={style.Content_block}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <INGRAINED_PRECISION /> <VICIOUS_TRAPS />
                <FIELD_PROMOTION /> <ARTILLERY_STRIKE_REQUESTED /> <ACCEPTABLE_LOSSES />
            </section>
        </section >
    )
}