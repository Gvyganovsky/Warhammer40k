import style from "../../../scss/CombatUnit.module.scss";
import Armouredsentinels from "../../../assets/AstraMilitarum/Armoured Sentinels.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

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

import skull from "../../../assets/icons/skull.png";
import hit from "../../../assets/icons/hit.svg";

export const ArmouredSentinels = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={Armouredsentinels}
                M='8"' WS='4+' BS='4+' S='6' T='6' W='7' A='2' Ld='7' Sv='3+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Autocannon /> <Heavy_flamer />
                    <Hunter_killer_missile /> <Lascannon />
                    <Militarum_multi_laser /> <Militarum_plasma_S />
                    <Militarum_plasma_Sp /> <Missile_launcher_F />
                    <Missile_launcher_K /> <Sentinel_chainsaw />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Armoured Cockpit' AbNum='+1' AbIcon={hit}
                    AbText='Каждый раз, когда модели в этом подразделении назначается дальняя атака
                    с характеристикой урона 1, добавляйте 1 к спасброску, сделанному против
                    этой атаки.'/>

                <AbilitiesBlock AbTitle='Explodes' AbNum='+1' AbIcon={skull}
                    AbText='Каждый раз, когда модель в этом блоке уничтожается, бросайте 1D6, прежде чем
                     удалять ее из игры. На 6 он взрывается, и каждый юнит в пределах 3" получает 1 
                     смертельное ранение.'/>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <VENGEANCE_FOR_CADIA /> <INGRAINED_PRECISION />
                <OVERLAPPING_FIELDS_OF_FIRE /> <EXPERIENCED_EYE />
                <MAVERICK_MANOEUVRES /> <ACCEPTABLE_LOSSES />
                <VICIOUS_TRAPS /> <SMOKE_LAUNCHERS /> <ABLATIVE_PLATING />
            </section>
        </section >
    )
}