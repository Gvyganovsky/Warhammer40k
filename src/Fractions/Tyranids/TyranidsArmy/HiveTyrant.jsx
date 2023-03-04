import style from "../../../scss/CombatUnit.module.scss";
import Hivetyrant from "../../../assets/Tyranids/Hive Tyrant.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { DamageBlock } from "../../../Components/DamageBlock";
import { WeaponOther } from "../../../Components/WeaponOther";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Heavy_venom_cannon, Stranglethorn_cannon, Monstrous_bonesword, Monstrous_scything_talon
} from "../TyranidsWeapon";

import {
    THUNDEROUS_IMPACT, TERRIFYING_CHARGE, BREAKING_THROUGH, GUARD_AND_CONSUME, OPPORTUNISTIC_ADVANCE,
    COMBINED_ASSAULT, CRITICAL_MASS, INDOMITABLE_MONSTROSITY, ADRENAL_SURGE, VORACIOUS_APPETITE, TRAMPLING_CHARGE,
    SYNAPTIC_CHANNELLING, DEATH_FRENZY, POWER_OF_THE_HIVE_MIND, CONTROL_OF_THE_SWARM, SYNAPTIC_DOMINATION,
    ANIMATED_BY_THE_HIVE_MIND, THE_DEEPEST_SHADOW, HIVE_PREDATOR, ALPHA_LEADER_BEAST, BURIED_IN_WAIT,
    RAREFIED_ENHANCEMENTS, SHARD_LURE, INSTINCTIVE_RAMPAGE, THE_VOID_IN_THE_WARP, HIVE_MIND_IMPERATIVE,
    HYPER_TOXICITY, PSYCHOTROPIC_VENOM, PATHOGENIC_SLIME
} from "../TyranidsStrat";

import M from "../../../assets/icons/M.png";
import WS from "../../../assets/icons/WS.png";
import BS from "../../../assets/icons/BS.png";
import S from "../../../assets/icons/S.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";
import Sv from "../../../assets/icons/Sv.png";

import skull from "../../../assets/icons/skull.png";
import hit from "../../../assets/icons/hit.svg";

export const HiveTyrant = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={Hivetyrant}
                M='9"' WS='2+' BS='2+' S='7' T='8' W='12' A='5' Ld='10' Sv='2+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Изменение характеристик от урона</div>
                <DamageBlock
                    img1={W} num1='7-12' num2='4-6' num3='1-3'
                    img2={M} num4='9"' num5='8"' num6='6"'
                    img3={BS} num7='2+' num8='3+' num9='4+'
                    img4={WS} num10='2+' num11='3+' num12='4+' />
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Heavy_venom_cannon /> <Stranglethorn_cannon />
                    <Monstrous_bonesword /> <Monstrous_scything_talon />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>
                    <WeaponOther title='Adrenal glands' img={S}
                        text='Добавьте 1" к характеристике перемещения и добавьте 1 к
                        характеристике силы носителя.'/>

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
                <AbilitiesBlock AbTitle='Will of the Hive Mind' AbNum='1' AbIcon={hit}
                    AbText='До начала вашей следующей командной фазы, каждый раз, когда модель в этом
                    подразделении совершает атаку, повторяйте бросок хита, равный 1.'/>

                <AbilitiesBlock AbTitle='Psychic Barrier' AbNum='4+' AbIcon={Sv}
                    AbText='Эта модель обладает неуязвимым сейвом 4+.' />

                <AbilitiesBlock AbTitle='Death Throes' AbNum='4+' AbIcon={skull}
                    AbText='Когда эта модель будет уничтожена, бросьте 1D6, прежде чем
                    выводить ее из игры. На 6+ ближайший вражеский юнит в радиусе 6"
                    получает смертельные ранения D3.' />
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <THUNDEROUS_IMPACT /> <TERRIFYING_CHARGE /> <BREAKING_THROUGH /> <GUARD_AND_CONSUME />
                <OPPORTUNISTIC_ADVANCE /> <COMBINED_ASSAULT /> <CRITICAL_MASS />
                <INDOMITABLE_MONSTROSITY /> <ADRENAL_SURGE /> <VORACIOUS_APPETITE />
                <TRAMPLING_CHARGE /> <SYNAPTIC_CHANNELLING /> <DEATH_FRENZY />
                <POWER_OF_THE_HIVE_MIND /> <CONTROL_OF_THE_SWARM /> <SYNAPTIC_DOMINATION />
                <ANIMATED_BY_THE_HIVE_MIND /> <THE_DEEPEST_SHADOW /> <HIVE_PREDATOR />
                <ALPHA_LEADER_BEAST /> <BURIED_IN_WAIT /> <RAREFIED_ENHANCEMENTS />
                <SHARD_LURE /> <INSTINCTIVE_RAMPAGE /> <THE_VOID_IN_THE_WARP />
                <HIVE_MIND_IMPERATIVE /> <HYPER_TOXICITY /> <PSYCHOTROPIC_VENOM /> <PATHOGENIC_SLIME />
            </section>
        </section >
    )
}