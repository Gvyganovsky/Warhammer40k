import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Hivetyrant from "../../../assets/Tyranids/Hive Tyrant.png";

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
import T from "../../../assets/icons/T.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";
import Ld from "../../../assets/icons/Ld.png";
import Sv from "../../../assets/icons/Sv.png";

import skull from "../../../assets/icons/skull.png";
import hit from "../../../assets/icons/hit.svg";

const HiveTyrant = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={Hivetyrant} alt="Hive Tyrant" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>9"</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={WS} alt="WS" className={style.param_img} />
                        <div className={style.param_number}>2+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={BS} alt="BS" className={style.param_img} />
                        <div className={style.param_number}>2+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={S} alt="S" className={style.param_img} />
                        <div className={style.param_number}>7</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={T} alt="T" className={style.param_img} />
                        <div className={style.param_number}>8</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>12</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>5</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Ld} alt="Ld" className={style.param_img} />
                        <div className={style.param_number}>10</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Sv} alt="Sv" className={style.param_img} />
                        <div className={style.param_number}>2+</div>
                    </div>
                </div>
            </section >

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Изменение характеристик от урона</div>
                <div className={style.damage_content}>
                    <div className={style.damage_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.damage_nubmer}>7-12</div>
                        <div className={style.damage_nubmer}>4-6</div>
                        <div className={style.damage_nubmer}>1-3</div>
                    </div>

                    <div className={style.damage_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.damage_nubmer}>9"</div>
                        <div className={style.damage_nubmer}>8"</div>
                        <div className={style.damage_nubmer}>6"</div>
                    </div>

                    <div className={style.damage_block}>
                        <img src={BS} alt="BS" className={style.param_img} />
                        <div className={style.damage_nubmer}>2+</div>
                        <div className={style.damage_nubmer}>3+</div>
                        <div className={style.damage_nubmer}>4+</div>
                    </div>

                    <div className={style.damage_block}>
                        <img src={WS} alt="WS" className={style.param_img} />
                        <div className={style.damage_nubmer}>2+</div>
                        <div className={style.damage_nubmer}>3+</div>
                        <div className={style.damage_nubmer}>4+</div>
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Heavy_venom_cannon />
                    <Stranglethorn_cannon />
                    <Monstrous_bonesword />
                    <Monstrous_scything_talon />
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
                        <div className={style.abilities_title}>Will of the Hive Mind</div>
                        <div className={style.block_symbol}>
                            <div className={style.abilities_title}>1</div>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        До начала вашей следующей командной фазы, каждый раз, когда модель в этом
                        подразделении совершает атаку, повторяйте бросок хита, равный 1.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Psychic Barrier</div>
                        <div className={style.block_symbol}>
                            <div className={style.abilities_title}>4+</div>
                            <img src={Sv} alt="Sv" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Эта модель обладает неуязвимым сейвом 4+.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Death Throes</div>
                        <div className={style.block_symbol}>
                            <div className={style.abilities_title}>4+</div>
                            <img src={skull} alt="skull" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Когда эта модель будет уничтожена, бросьте 1D6, прежде чем
                        выводить ее из игры. На 6+ ближайший вражеский юнит в радиусе 6"
                        получает смертельные ранения D3.
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <THUNDEROUS_IMPACT />
                <TERRIFYING_CHARGE />
                <BREAKING_THROUGH />
                <GUARD_AND_CONSUME />
                <OPPORTUNISTIC_ADVANCE />
                <COMBINED_ASSAULT />
                <CRITICAL_MASS />
                <INDOMITABLE_MONSTROSITY />
                <ADRENAL_SURGE />
                <VORACIOUS_APPETITE />
                <TRAMPLING_CHARGE />
                <SYNAPTIC_CHANNELLING />
                <DEATH_FRENZY />
                <POWER_OF_THE_HIVE_MIND />
                <CONTROL_OF_THE_SWARM />
                <SYNAPTIC_DOMINATION />
                <ANIMATED_BY_THE_HIVE_MIND />
                <THE_DEEPEST_SHADOW />
                <HIVE_PREDATOR />
                <ALPHA_LEADER_BEAST />
                <BURIED_IN_WAIT />
                <RAREFIED_ENHANCEMENTS />
                <SHARD_LURE />
                <INSTINCTIVE_RAMPAGE />
                <THE_VOID_IN_THE_WARP />
                <HIVE_MIND_IMPERATIVE />
                <HYPER_TOXICITY />
                <PSYCHOTROPIC_VENOM />
                <PATHOGENIC_SLIME />
            </section>
        </section >
    )
}

export { HiveTyrant }