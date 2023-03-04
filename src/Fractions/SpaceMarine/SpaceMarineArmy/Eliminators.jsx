import style from "../../../scss/CombatUnit.module.scss";
import eliminators from "../../../assets/SpaceMarine/Eliminators.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { WeaponOther } from "../../../Components/WeaponOther";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Bolt_pistol, Bolt_sniper_E, Bolt_sniper_H, Bolt_sniper_M,
    Instigator_bolt_carbine, Las_fusil, Frag_grenades, Krak_grenades
} from "../SpaceMarineWeapon";

import {
    TRANSHUMAN_PHYSIOLOGY, GENE_WROUGHT_MIGHT, SONS_OF_GUILLIMAN, OCULAR_NETWORKING,
    PIVOTAL_MOMENT, HONOURED_SERGEANT, UNCOMPROMISING_FIRE, STEADY_ADVANCE, GUERILLA_TACTICS,
    SQUAD_DOCTRINES, DISPERSAL_PROTOCOLS, AUSPEX_SCAN, TACTICAL_AUGURY
} from "../SpaceMarineStrat";

import T from "../../../assets/icons/T.png";
import question from "../../../assets/icons/question.png";

export const Eliminators = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={eliminators}
                M='6"' WS='3+' BS='2+' S='4' T='4' W='2' A='2' Ld='7' Sv='3+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Bolt_pistol /> <Bolt_sniper_E />
                    <Bolt_sniper_H /> <Bolt_sniper_M />
                    <Instigator_bolt_carbine /> <Las_fusil />
                    <Frag_grenades /> <Krak_grenades />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>
                    <WeaponOther title='Camo Cloak' img={T}
                        text='Каждый раз, когда носителю назначается дальняя атака,
                        в то время как он получает преимущества прикрытия,
                        добавляйте дополнительный 1 к любому спасброску брони,
                        сделанному против этой атаки.'/>
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Covering Fire' AbNum='' AbIcon={question}
                    AbText='На вашей фазе стрельбы, после того, как это подразделение выстрелило,
                    если оно не находится в пределах досягаемости каких-либо вражеских
                    подразделений и содержит сержанта-ликвидатора, оснащенного болтовым
                    карабином "подстрекатель", оно может совершить обычное движение,
                    как если бы это была ваша фаза передвижения.'/>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <TRANSHUMAN_PHYSIOLOGY /> <GENE_WROUGHT_MIGHT />
                <SONS_OF_GUILLIMAN /> <OCULAR_NETWORKING />
                <PIVOTAL_MOMENT /> <HONOURED_SERGEANT />
                <UNCOMPROMISING_FIRE /> <STEADY_ADVANCE />
                <GUERILLA_TACTICS /> <SQUAD_DOCTRINES />
                <DISPERSAL_PROTOCOLS /> <AUSPEX_SCAN /> <TACTICAL_AUGURY />
            </section>
        </section >
    )
}