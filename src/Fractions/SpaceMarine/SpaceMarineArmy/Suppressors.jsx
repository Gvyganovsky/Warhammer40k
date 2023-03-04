import style from "../../../scss/CombatUnit.module.scss";
import suppressors from "../../../assets/SpaceMarine/Suppressors.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { DamageBlock } from "../../../Components/DamageBlock";
import { WeaponOther } from "../../../Components/WeaponOther";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Bolt_pistol, Accelerator_autocannon,
    Frag_grenades, Krak_grenades
} from "../SpaceMarineWeapon";

import {
    TRANSHUMAN_PHYSIOLOGY, GENE_WROUGHT_MIGHT, OCULAR_NETWORKING, SONS_OF_GUILLIMAN,
    PIVOTAL_MOMENT, HONOURED_SERGEANT, SQUAD_DOCTRINES, HAMMER_OF_WRATH, UNCOMPROMISING_FIRE,
    STEADY_ADVANCE, DISPERSAL_PROTOCOLS, AUSPEX_SCAN, TACTICAL_AUGURY
} from "../SpaceMarineStrat";

import hit from "../../../assets/icons/hit.svg";

export const Suppressors = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={suppressors}
                M='12"' WS='3+' BS='3+' S='4' T='4' W='2' A='2' Ld='7' Sv='3+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Bolt_pistol /> <Accelerator_autocannon />
                    <Frag_grenades /> <Krak_grenades />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Suppressing Fire' AbNum='' AbIcon={hit}
                    AbText='Каждый раз, когда модель в этом подразделении совершает атаку с помощью 
                    accelerator autocannon против вражеского пехотного подразделения, если засчитывается
                    попадание, это вражеское подразделение не может вести огонь в течение этого хода.'/>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <TRANSHUMAN_PHYSIOLOGY /> <GENE_WROUGHT_MIGHT /> <OCULAR_NETWORKING />
                <SONS_OF_GUILLIMAN /> <PIVOTAL_MOMENT /> <HONOURED_SERGEANT />
                <SQUAD_DOCTRINES /> <HAMMER_OF_WRATH /> <UNCOMPROMISING_FIRE />
                <STEADY_ADVANCE /> <DISPERSAL_PROTOCOLS /> <AUSPEX_SCAN /> <TACTICAL_AUGURY />
            </section>
        </section >
    )
}