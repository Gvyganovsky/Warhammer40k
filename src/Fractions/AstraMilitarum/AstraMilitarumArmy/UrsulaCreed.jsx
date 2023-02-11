import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Ursulacreed from "../../../assets/AstraMilitarum/Ursula Creed.png";

import {
    Duty_and_Vengeance, Power_sword
} from "../AstraMilitarumWeapon";

import {
    INGRAINED_PRECISION, VICIOUS_TRAPS, ACCEPTABLE_LOSSES, FIELD_PROMOTION,
    ARTILLERY_STRIKE_REQUESTED
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
import dice from "../../../assets/icons/dice.png";

const UrsulaCreed = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={Ursulacreed} alt="UrsulaCreed" className={style.combat_unit_img} />
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
                        <div className={style.param_number}>5</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>5</div>
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
                    <Duty_and_Vengeance />
                    <Power_sword />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Lord Castellan’s Fury</div>
                        <div className={style.block_symbol}>
                            <div className={style.symbol_text}>1</div>
                            <img src={question} alt="question" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Каждый раз, когда эта модель отдает приказ подразделению, до начала вашей следующей
                        фазы командования, каждый раз, когда модель в этом подразделении совершает атаку дальнего
                        боя, прибавляйте 1 к характеристике силы этой атаки.
                    </div>
                </div>

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
                        <div className={style.abilities_title}>Tactical Genius</div>
                        <div className={style.block_symbol}>
                            <div className={style.symbol_text}>2</div>
                            <img src={question} alt="question" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Пока эта модель находится на поле боя, вы можете использовать стратегию повторного
                        броска команды до двух раз за фазу, а не только один раз.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Senior Officer (Aura)</div>
                        <div className={style.block_symbol}>
                            <div className={style.symbol_text}>1</div>
                            <img src={dice} alt="dice" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Пока дружественный отряд находится в пределах 6" от этой модели, когда модель в
                        этом подразделении совершает атаку, повторно бросайте бросок удара, равный 1.
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <INGRAINED_PRECISION />
                <VICIOUS_TRAPS />
                <FIELD_PROMOTION />
                <ARTILLERY_STRIKE_REQUESTED />
                <ACCEPTABLE_LOSSES />
            </section>
        </section >
    )
}

export { UrsulaCreed }