import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import wraithlord from "../../../assets/Aeldari/Wraithlord.png";

import { ParametersBlock } from "../../../Components/ParametersBlock";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

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

import W from "../../../assets/icons/W.png";

export const Wraithlord = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={wraithlord}
                M='8"' WS='3+' BS='3+' S='7' T='8' W='9' A='4' Ld='9' Sv='3+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Aeldari_flamer /> <Aeldari_mis_Sn />
                    <Aeldari_mis_S /> <Bright_lance />
                    <Ghostglaive_C /> <Ghostglaive_S />
                    <Scatter_laser /> <Shuriken_cannon />
                    <Shuriken_catapult /> <Starcannon /> <Wraithbone_fists />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Wraithbone Form' AbNum='-1' AbIcon={W}
                    AbText='Каждый раз, когда атака назначается модели в этом подразделении, вычитайте
                    1 из урона, характерного для этой атаки (как минимум до 1).'/>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <INEXHAUSTIBLE_HATRED /> <THE_GREAT_ENEMY />
                <BLADESTORM /> <DEFIANT_TO_THE_LAST />
                <FEIGNED_RETREAT /> <THE_TEARS_OF_ISHA />
                <FIRE_AND_FADE /> <PHANTASM />
                <WITHERING_VOLLEYS /> <THRICE_LAYERED_WARDS />
                <STARHAWK_MISSILE />
            </section>
        </section >
    )
}