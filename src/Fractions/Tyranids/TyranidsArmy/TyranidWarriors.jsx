import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Tyranidwarriors from "../../../assets/Tyranids/Tyranid Warriors.png";

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
import WS from "../../../assets/icons/WS.png";
import BS from "../../../assets/icons/BS.png";
import S from "../../../assets/icons/S.png";
import T from "../../../assets/icons/T.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";
import Ld from "../../../assets/icons/Ld.png";
import Sv from "../../../assets/icons/Sv.png";

import question from "../../../assets/icons/question.png";
import hit from "../../../assets/icons/hit.svg";

const TyranidWarriors = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={Tyranidwarriors} alt="Tyranid Warriors" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>6"</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={WS} alt="WS" className={style.param_img} />
                        <div className={style.param_number}>3+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={BS} alt="BS" className={style.param_img} />
                        <div className={style.param_number}>3+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={S} alt="S" className={style.param_img} />
                        <div className={style.param_number}>5</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={T} alt="T" className={style.param_img} />
                        <div className={style.param_number}>5</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>3</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>3</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Ld} alt="Ld" className={style.param_img} />
                        <div className={style.param_number}>9</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Sv} alt="Sv" className={style.param_img} />
                        <div className={style.param_number}>4+</div>
                    </div>
                </div>
            </section >

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Spinefists />
                    <Barbed_strangler />
                    <Deathspitter />
                    <Devourer />
                    <Venom_cannon />
                    <Bonesword />
                    <Dual_boneswords />
                    <Rending_claw />
                    <Scything_talon />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Adrenal glands</div>
                            <img src={S} alt="S" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Добавьте 1" к характеристике перемещения и добавьте 1 к
                            характеристике силы носителя.
                        </div>
                    </div>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Flesh hooks</div>
                            <img src={M} alt="M" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Когда подразделение носителя делает обычный ход, продвигается вперед или отступает
                            назад, носитель не засчитывает ни одного пройденного им расстояния по вертикали
                            против общего количества, которое он может переместить за этот ход.
                        </div>
                    </div>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Lash whip</div>
                            <img src={A} alt="A" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Каждый раз, когда носитель совершает атаку ближнего боя,
                            повторно бросайте бросок удара, равный 1.
                        </div>
                    </div>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Toxin sacs</div>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Каждый раз, когда носитель совершает атаку в ближнем бою,
                            неизмененный бросок из 6 ударов автоматически ранит цель.
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Warrior Spawning</div>
                        <div className={style.block_symbol}>
                            <div className={style.abilities_title}>1</div>
                            <img src={question} alt="question" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        В этот отряд может быть включена одна модель ТИРАНИД ПРАЙМ, не занимая места на поле боя.
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <RAPID_ADAPTATION />
                <ENHANCED_BRAIN_FUNCTIONS />
                <UNPARALLELED_FEROCITY />
                <OPPORTUNISTIC_ADVANCE />
                <COMBINED_ASSAULT />
                <CRITICAL_MASS />
                <REINFORCED_HIVE_NODE />
                <ADRENAL_SURGE />
                <SYNAPTIC_DOMINATION />
                <BURIED_IN_WAIT />
                <SHARD_LURE />
                <OVERRUN />
                <THE_VOID_IN_THE_WARP />
                <HIVE_MIND_IMPERATIVE />
                <IMPALING_HOOKS />
                <PSYCHOTROPIC_VENOM />
                <PATHOGENIC_SLIME />
            </section>
        </section >
    )
}

export { TyranidWarriors }