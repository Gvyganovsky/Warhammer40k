import style from "../../../scss/CombatUnit.module.scss";
import LieutenantinPhobosarmour from "../../../assets/SpaceMarine/Lieutenant in Phobos Armour.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { DamageBlock } from "../../../Components/DamageBlock";
import { WeaponOther } from "../../../Components/WeaponOther";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Bolt_pistol, Master_crafted_occulus_bolt_carbine, Paired_combat_blades,
    Frag_grenades, Krak_grenades
} from "../SpaceMarineWeapon";

import {
    OCULAR_NETWORKING, TRANSHUMAN_PHYSIOLOGY, GENE_WROUGHT_MIGHT, SONS_OF_GUILLIMAN,
    ONLY_IN_DEATH_DOES_DUTY_END, INSPIRING_COMMAND, HONOURED_BY_MACRAGGE, EXEMPLAR_OF_THE_CHAPTER, RELIC_OF_THE_CHAPTER,
    HERO_OF_THE_CHAPTER, DISPERSAL_PROTOCOLS, GUERILLA_TACTICS, STEADY_ADVANCE, UNCOMPROMISING_FIRE,
    SQUAD_DOCTRINES, AUSPEX_SCAN, TACTICAL_AUGURY
} from "../SpaceMarineStrat";

import W from "../../../assets/icons/W.png";
import question from "../../../assets/icons/question.png";

export const LieutenantinPhobosArmour = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={LieutenantinPhobosarmour}
                M='6"' WS='2+' BS='2+' S='4' T='4' W='5' A='4' Ld='8' Sv='3+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Bolt_pistol /> <Master_crafted_occulus_bolt_carbine />
                    <Paired_combat_blades /> <Frag_grenades /> <Krak_grenades />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Tactical Precision (Aura)' AbNum='' AbIcon={W}
                    AbText='В то время как дружественный ОСНОВНОЙ отряд УЛЬТРАМАРИНОВ находится 
                    в пределах 6" от этой модели, каждый раз, когда модель в этом подразделении 
                    совершает атаку, повторно делайте бросок с ранением в 1.'/>

                <AbilitiesBlock AbTitle='Company Heroes' AbNum='' AbIcon={question}
                    AbText=' Если ваша армия выкована в боях, то для каждого подразделения ЛЕЙТЕНАНТА,
                    включенного в Отряд, подразделение второго ЛЕЙТЕНАНТА может быть включено
                    в это подразделение, не занимая дополнительного места для роли на поле боя.'/>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <OCULAR_NETWORKING /> <TRANSHUMAN_PHYSIOLOGY /> <GENE_WROUGHT_MIGHT />
                <SONS_OF_GUILLIMAN /> <ONLY_IN_DEATH_DOES_DUTY_END /> <INSPIRING_COMMAND />
                <HONOURED_BY_MACRAGGE /> <EXEMPLAR_OF_THE_CHAPTER /> <RELIC_OF_THE_CHAPTER />
                <HERO_OF_THE_CHAPTER /> <DISPERSAL_PROTOCOLS /> <GUERILLA_TACTICS />
                <STEADY_ADVANCE /> <UNCOMPROMISING_FIRE /> <SQUAD_DOCTRINES />
                <AUSPEX_SCAN /> <TACTICAL_AUGURY />
            </section>
        </section >
    )
}