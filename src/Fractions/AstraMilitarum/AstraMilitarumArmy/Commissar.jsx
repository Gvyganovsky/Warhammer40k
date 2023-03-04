
import style from "../../../scss/CombatUnit.module.scss";
import commissar from "../../../assets/AstraMilitarum/Commissar.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Bolt_pistol, Plasma_pistol_S, Plasma_pistol_SP, Chainsword,
    Power_sword
} from "../AstraMilitarumWeapon";

import {
    FIELD_PROMOTION, OFFICER_CADRE, IMPERIAL_COMMANDERS_ARMOURY, THUNDEROUS_CHARGE,
    ACCEPTABLE_LOSSES, VICIOUS_TRAPS, SHIELD_OF_FLESH
} from "../AstraMilitarumStrat";

import Sv from "../../../assets/icons/Sv.png";
import question from "../../../assets/icons/question.png";
import morale from "../../../assets/icons/morale.png";

export const Commissar = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={commissar}
                M='6"' WS='3+' BS='3+' S='3' T='3' W='4' A='3' Ld='8' Sv='5+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Bolt_pistol /> <Plasma_pistol_S />
                    <Plasma_pistol_SP /> <Chainsword /><Power_sword />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Refractor Field' AbNum='5+' AbIcon={Sv}
                    AbText='Эта модель имеет 5+ неуязвимых сейвов.' />

                <AbilitiesBlock AbTitle='Political Overwatch' AbNum='' AbIcon={question}
                    AbText='Для каждого COMMANDANT и подразделения COMMAND SQUAD, включенного
                    в Отряд, одна модель комиссара может быть включена в этот отряд,
                    не занимая места для ролей на поле боя.' />

                <AbilitiesBlock AbTitle='Summary Execution' AbNum='6"' AbIcon={morale}
                    AbText='Один раз за ход, когда дружественный основной отряд ASTRA MILITARUM в 
                    радиусе 6" от этой модели не проходит проверку боевого духа, эта модель может 
                    использовать эту способность. Если это так, то до конца фразы каждый раз, когда
                    для этого подразделения проводится тест на боевое истощение, он автоматически 
                    проходит.' />
            </section>

            <section className={style.Content_block}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <FIELD_PROMOTION /> <OFFICER_CADRE />
                <IMPERIAL_COMMANDERS_ARMOURY /> <THUNDEROUS_CHARGE />
                <ACCEPTABLE_LOSSES /> <VICIOUS_TRAPS /> <SHIELD_OF_FLESH />
            </section>
        </section >
    )
}