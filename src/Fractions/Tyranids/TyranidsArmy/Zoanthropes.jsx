import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import zoanthropes from "../../../assets/Tyranids/Zoanthropes.png";

import {
    UNPARALLELED_FEROCITY, OPPORTUNISTIC_ADVANCE, COMBINED_ASSAULT, CRITICAL_MASS,
    THE_DEEPEST_SHADOW, SYNAPTIC_DOMINATION, SYNAPTIC_CHANNELLING, BURIED_IN_WAIT,
    HIVE_MIND_IMPERATIVE, THE_VOID_IN_THE_WARP, OVERRUN, ENCIRCLE_THE_PREY
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
import morale from "../../../assets/icons/morale.png";

const Zoanthropes = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={zoanthropes} alt="Zoanthropes" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>6"</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={WS} alt="WS" className={style.param_img} />
                        <div className={style.param_number}>5+</div>
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
                        <div className={style.param_number}>4</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>2</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Ld} alt="Ld" className={style.param_img} />
                        <div className={style.param_number}>9</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Sv} alt="Sv" className={style.param_img} />
                        <div className={style.param_number}>5+</div>
                    </div>
                </div>
            </section >

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Warp Blast</div>
                        <div className={style.block_symbol}>
                            <img src={morale} alt="morale" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Каждый раз, когда этот юнит пытается проявить Smite или Witchfire psychic power,
                        добавляйте 1 к психическому тесту для каждой модели в этом юните. Каждый раз,
                        когда этот юнит проявляет психическую силу Удара, прибавляйте 1 к количеству
                        смертельных ран, полученных вражеским юнитом за каждую модель в этом юните
                        (максимум +3 смертельных ранения).
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Psybrood Coterie</div>
                        <div className={style.block_symbol}>
                            <img src={question} alt="question" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Отряд ZOANTHROPE может быть включен в этот отряд, не занимая места на поле боя.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Warp Field</div>
                        <div className={style.block_symbol}>
                            <img src={Sv} alt="Sv" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Модели в этом блоке имеют неуязвимое сохранение 4+.
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <UNPARALLELED_FEROCITY />
                <OPPORTUNISTIC_ADVANCE />
                <COMBINED_ASSAULT />
                <CRITICAL_MASS />
                <THE_DEEPEST_SHADOW />
                <SYNAPTIC_DOMINATION />
                <SYNAPTIC_CHANNELLING />
                <BURIED_IN_WAIT />
                <HIVE_MIND_IMPERATIVE />
                <THE_VOID_IN_THE_WARP />
                <OVERRUN />
                <ENCIRCLE_THE_PREY />
            </section>
        </section >
    )
}

export { Zoanthropes }