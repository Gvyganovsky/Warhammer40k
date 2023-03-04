import style from "../../../scss/CombatUnit.module.scss";
import infiltrators from "../../../assets/SpaceMarine/Infiltrators.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { DamageBlock } from "../../../Components/DamageBlock";
import { WeaponOther } from "../../../Components/WeaponOther";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Bolt_pistol, Marksman_bolt_carbine, Frag_grenades, Krak_grenades
} from "../SpaceMarineWeapon";

import {
    OCULAR_NETWORKING, TRANSHUMAN_PHYSIOLOGY, GENE_WROUGHT_MIGHT, SONS_OF_GUILLIMAN,
    PIVOTAL_MOMENT, HONOURED_SERGEANT, SQUAD_DOCTRINES, UNCOMPROMISING_FIRE, STEADY_ADVANCE,
    GUERILLA_TACTICS, DISPERSAL_PROTOCOLS, AUSPEX_SCAN, SMOKESCREEN, TACTICAL_AUGURY,
    VOXBREAKER_AUSPEX, SABOTEUR_EXPLOSIVE_PACK
} from "../SpaceMarineStrat";

import M from "../../../assets/icons/M.png";
import WS from "../../../assets/icons/WS.png";
import BS from "../../../assets/icons/BS.png";
import S from "../../../assets/icons/S.png";
import T from "../../../assets/icons/T.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";
import Ld from "../../../assets/icons/Ld.png";
import Sv from "../../../assets/icons/Sv.png";

import question from "../../../assets/icons/question.png";
import location from "../../../assets/icons/location.png";

export const Infiltrators = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={infiltrators}
                M='6"' WS='3+' BS='3+' S='4' T='4' W='2' A='2' Ld='7' Sv='3+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Bolt_pistol /> <Marksman_bolt_carbine />
                    <Frag_grenades /> <Krak_grenades />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>
                    <WeaponOther title='Helix gauntlet' img={W}
                        text='Один раз за ход, при первом неудачном спасброске для подразделения
                        носителя, характеристика урона от этой атаки изменяется на 0.'/>

                    <WeaponOther title='Infiltrator comms array' img={question}
                        text='Считается, что подразделение носителя всегда находится в пределах 
                        досягаемости следующих способностей ауры любых дружественных подразделений 
                        ультрамаринов ФОБОСА, находящихся на поле боя: Боевые ритуалы; Тактическая 
                        точность.'/>
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Omni-scrambler' AbNum='' AbIcon={location}
                    AbText='Вражеские подразделения, размещенные на поле боя в
                    качестве подкрепления, не могут быть размещены в
                    пределах 12 дюймов от этого подразделения.'/>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <OCULAR_NETWORKING /> <TRANSHUMAN_PHYSIOLOGY /> <GENE_WROUGHT_MIGHT />
                <SONS_OF_GUILLIMAN /> <PIVOTAL_MOMENT /> <HONOURED_SERGEANT />
                <SQUAD_DOCTRINES /> <UNCOMPROMISING_FIRE /> <STEADY_ADVANCE />
                <GUERILLA_TACTICS /> <DISPERSAL_PROTOCOLS /> <AUSPEX_SCAN />
                <SMOKESCREEN /> <TACTICAL_AUGURY /> <VOXBREAKER_AUSPEX /> <SABOTEUR_EXPLOSIVE_PACK />
            </section>
        </section >
    )
}