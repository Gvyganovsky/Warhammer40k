import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import commissar from "../../../assets/AstraMilitarum/Commissar.png";

import {
    Bolt_pistol, Plasma_pistol_S, Plasma_pistol_SP, Chainsword,
    Power_sword
} from "../AstraMilitarumWeapon";

import {
    FIELD_PROMOTION, OFFICER_CADRE, IMPERIAL_COMMANDERS_ARMOURY, THUNDEROUS_CHARGE,
    ACCEPTABLE_LOSSES, VICIOUS_TRAPS, SHIELD_OF_FLESH
} from "../AstraMilitarumStrat";

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

const Commissar = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={commissar} alt="Commissar" className={style.combat_unit_img} />
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
                        <div className={style.param_number}>3</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={T} alt="T" className={style.param_img} />
                        <div className={style.param_number}>3</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>4</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>3</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Ld} alt="Ld" className={style.param_img} />
                        <div className={style.param_number}>8</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Sv} alt="Sv" className={style.param_img} />
                        <div className={style.param_number}>5+</div>
                    </div>
                </div>
            </section >

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Bolt_pistol />
                    <Plasma_pistol_S />
                    <Plasma_pistol_SP />
                    <Chainsword />
                    <Power_sword />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Refractor Field</div>
                        <div className={style.block_symbol}>
                            <div className={style.symbol_text}>5+</div>
                            <img src={Sv} alt="Sv" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Эта модель имеет 5+ неуязвимых сейвов.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Political Overwatch</div>
                        <div className={style.block_symbol}>
                            <img src={question} alt="question" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Для каждого COMMANDANT и подразделения COMMAND SQUAD, включенного
                        в Отряд, одна модель комиссара может быть включена в этот отряд,
                        не занимая места для ролей на поле боя.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Summary Execution</div>
                        <div className={style.block_symbol}>
                            <div className={style.symbol_text}>6"</div>
                            <img src={morale} alt="morale" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Один раз за ход, когда дружественный основной отряд ASTRA MILITARUM в радиусе 6"
                        от этой модели не проходит проверку боевого духа, эта модель может использовать
                        эту способность. Если это так, то до конца фразы каждый раз, когда для этого
                        подразделения проводится тест на боевое истощение, он автоматически проходит.
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <FIELD_PROMOTION />
                <OFFICER_CADRE />
                <IMPERIAL_COMMANDERS_ARMOURY />
                <THUNDEROUS_CHARGE />
                <ACCEPTABLE_LOSSES />
                <VICIOUS_TRAPS />
                <SHIELD_OF_FLESH />
            </section>
        </section >
    )
}

export { Commissar }