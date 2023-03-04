
import style from "../../../scss/CombatUnit.module.scss";
import Shocktrooper from "../../../assets/AstraMilitarum/ShockTrooper.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Bolt_pistol, Laspistol, Drum_fed_autogun, Flamer, Frag_grenade, Krak_grenade,
    Lasgun, Meltagun, Plasma_gun_S, Plasma_gun_SС, Chainsword, Frag_grenades
} from "../AstraMilitarumWeapon";

import {
    ARMOURED_FIST, VENGEANCE_FOR_CADIA, CADIA_STANDS, INGRAINED_PRECISION,
    OVERLAPPING_FIELDS_OF_FIRE, VOLLEY_FIRE, EXPERIENCED_EYE, FIRE_ON_MY_POSITION,
    BATTLEFIELD_BEQUEST, MOUNT_UP, SHIELD_OF_FLESH, VICIOUS_TRAPS, ACCEPTABLE_LOSSES
} from "../AstraMilitarumStrat";

import hit from "../../../assets/icons/hit.svg";

export const ShockTrooper = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={Shocktrooper}
                M='6"' WS='4+' BS='4+' S='3' T='3' W='1' A='2' Ld='7' Sv='5+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Bolt_pistol /> <Laspistol /><Frag_grenades />
                    <Drum_fed_autogun /> <Flamer /> <Frag_grenade />
                    <Krak_grenade /> <Lasgun /> <Meltagun />
                    <Plasma_gun_S /> <Plasma_gun_SС /> <Chainsword />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Shock Troops' AbNum='' AbIcon={hit}
                    AbText='Атаку lasgun или laspistol при выпадении 6 дает 1 дополнительное попадание.' />
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <ARMOURED_FIST /> <VENGEANCE_FOR_CADIA /> <CADIA_STANDS />
                <INGRAINED_PRECISION /> <OVERLAPPING_FIELDS_OF_FIRE /> <VOLLEY_FIRE />
                <EXPERIENCED_EYE /> <FIRE_ON_MY_POSITION /> <BATTLEFIELD_BEQUEST />
                <MOUNT_UP /> <SHIELD_OF_FLESH /> <VICIOUS_TRAPS /> <ACCEPTABLE_LOSSES />
            </section>
        </section >
    )
}