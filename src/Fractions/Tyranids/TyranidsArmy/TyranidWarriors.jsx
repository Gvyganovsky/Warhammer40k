import style from "../../../scss/CombatUnit.module.scss";
import Tyranidwarriors from "../../../assets/Tyranids/Tyranid Warriors.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { WeaponOther } from "../../../Components/WeaponOther";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Spinefists, Barbed_strangler, Deathspitter, Devourer, Venom_cannon,
    Bonesword, Dual_boneswords, Rending_claw, Scything_talon
} from "../TyranidsWeapon";

import {
    RAPID_ADAPTATION, ENHANCED_BRAIN_FUNCTIONS, UNPARALLELED_FEROCITY, OPPORTUNISTIC_ADVANCE,
    COMBINED_ASSAULT, CRITICAL_MASS, REINFORCED_HIVE_NODE, ADRENAL_SURGE, SYNAPTIC_DOMINATION,
    BURIED_IN_WAIT, SHARD_LURE, OVERRUN, THE_VOID_IN_THE_WARP, HIVE_MIND_IMPERATIVE,
    IMPALING_HOOKS, PSYCHOTROPIC_VENOM, PATHOGENIC_SLIME
} from "../TyranidsStrat";

import M from "../../../assets/icons/M.png";
import S from "../../../assets/icons/S.png";
import A from "../../../assets/icons/A.png";
import question from "../../../assets/icons/question.png";
import hit from "../../../assets/icons/hit.svg";

export const TyranidWarriors = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={Tyranidwarriors}
                M='6"' WS='3+' BS='3+' S='5' T='5' W='3' A='3' Ld='9' Sv='4+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Spinefists /> <Barbed_strangler />
                    <Deathspitter /> <Devourer />
                    <Venom_cannon /> <Bonesword />
                    <Dual_boneswords /> <Rending_claw /> <Scything_talon />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>
                    <WeaponOther title='Adrenal glands' img={S}
                        text='Добавьте 1" к характеристике перемещения и добавьте 1 к
                        характеристике силы носителя.'/>

                    <WeaponOther title='Flesh hooks' img={M}
                        text='Когда подразделение носителя делает обычный ход, продвигается вперед 
                        или отступает назад, носитель не засчитывает ни одного пройденного им расстояния
                        по вертикали против общего количества, которое он может переместить за этот ход.'/>

                    <WeaponOther title='Lash whip' img={A}
                        text='Каждый раз, когда носитель совершает атаку ближнего боя,
                        повторно бросайте бросок удара, равный 1.'/>

                    <WeaponOther title='Toxin sacs' img={hit}
                        text='Каждый раз, когда носитель совершает атаку в ближнем бою,
                        неизмененный бросок из 6 ударов автоматически ранит цель.'/>
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Warrior Spawning' AbNum='1' AbIcon={question}
                    AbText='В этот отряд может быть включена одна модель ТИРАНИД ПРАЙМ, не 
                    занимая места на поле боя.' />
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <RAPID_ADAPTATION /> <ENHANCED_BRAIN_FUNCTIONS />
                <UNPARALLELED_FEROCITY /> <OPPORTUNISTIC_ADVANCE />
                <COMBINED_ASSAULT /> <CRITICAL_MASS />
                <REINFORCED_HIVE_NODE /> <ADRENAL_SURGE />
                <SYNAPTIC_DOMINATION /> <BURIED_IN_WAIT />
                <SHARD_LURE /> <OVERRUN /> <THE_VOID_IN_THE_WARP />
                <HIVE_MIND_IMPERATIVE /> <IMPALING_HOOKS />
                <PSYCHOTROPIC_VENOM /> <PATHOGENIC_SLIME />
            </section>
        </section >
    )
}