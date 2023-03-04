import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Tankcommander from "../../../assets/AstraMilitarum/Tank Commander.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { DamageBlock } from "../../../Components/DamageBlock";
import { WeaponOther } from "../../../Components/WeaponOther";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Demolisher_battle_cannon, Eradicator_nova_cannon, Executioner__cannon_S,
    Executioner__cannon_Sp, Exterminator_autocannon, Heavy_bolter,
    Heavy_flamer, Heavy_stubber, Hunter_killer_missile,
    Leman_Russ_battle_cannon, Militarum_plasma_S, Militarum_plasma_Sp,
    Multi_melta, Punisher_gatling_cannon, Storm_bolter, Vanquisher_battle_cannon
} from "../AstraMilitarumWeapon";

import {
    INGRAINED_PRECISION, RELENTLESS, FIELD_PROMOTION, VENGEFUL_SALUTE,
    CRUSH_THEM, OFFICER_CADRE, IMPERIAL_COMMANDERS_ARMOURY, ARTILLERY_STRIKE_REQUESTED,
    ACCEPTABLE_LOSSES, VICIOUS_TRAPS, SMOKE_LAUNCHERS, ABLATIVE_PLATING
} from "../AstraMilitarumStrat";

import M from "../../../assets/icons/M.png";
import BS from "../../../assets/icons/BS.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";

import shooting from "../../../assets/icons/shooting.png";
import location from "../../../assets/icons/dice.png";
import hit from "../../../assets/icons/hit.svg";

export const TankCommander = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={Tankcommander}
                M='10"' WS='6+' BS='4+' S='7' T='8' W='13' A='6' Ld='7' Sv='2+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Изменение характеристик от урона</div>
                <DamageBlock
                    img1={W} num1='7-13' num2='4-6' num3='1-3'
                    img2={M} num4='10"' num5='8"' num6='6"'
                    img3={BS} num7='4+' num8='5+' num9='6+'
                    img4={A} num10='6' num11='D6' num12='D3' />
            </section>

            <section className={style.Content_block}>
                <div className={style.line}></div>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Demolisher_battle_cannon /> <Eradicator_nova_cannon />
                    <Executioner__cannon_S /> <Executioner__cannon_Sp />
                    <Exterminator_autocannon /> <Heavy_bolter />
                    <Heavy_flamer /> <Heavy_stubber />
                    <Hunter_killer_missile /> <Leman_Russ_battle_cannon />
                    <Militarum_plasma_S /> <Militarum_plasma_Sp />
                    <Multi_melta /> <Punisher_gatling_cannon />
                    <Storm_bolter /> <Vanquisher_battle_cannon />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>
                    <WeaponOther title='Dozer blade' img={location}
                        text='Если носитель имеет DOZER BLADE, то может игнорировать любые или
                        все модификаторы к его характеристике перемещения, передовым роликам
                        и загрузочным роликам.'/>

                    <WeaponOther title='Armoured tracks' img={shooting}
                        text='Если носитель получает ключевое слово "БРОНИРОВАННЫЙ", и каждый раз, 
                        когда носителю назначается дальняя атака с характеристикой урона, равной 1, 
                        добавляйте 1 к спасброску брони, сделанному против этой атаки.'/>
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Shock Troops' AbNum='' AbIcon={hit}
                    AbText='Атаку lasgun или laspistol при выпадении 6 дает 1 дополнительное попадание.' />
            </section>

            <section className={style.Content_block}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <INGRAINED_PRECISION /> <RELENTLESS />
                <FIELD_PROMOTION /> <VENGEFUL_SALUTE />
                <CRUSH_THEM /> <OFFICER_CADRE />
                <IMPERIAL_COMMANDERS_ARMOURY /> <ARTILLERY_STRIKE_REQUESTED />
                <ACCEPTABLE_LOSSES /> <VICIOUS_TRAPS /> 
                <SMOKE_LAUNCHERS /> <ABLATIVE_PLATING />
            </section>
        </section >
    )
}