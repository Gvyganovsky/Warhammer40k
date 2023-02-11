import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import LordSolarLeonts from "../../../assets/AstraMilitarum/Lord Solar Leontus.png";

import {
    Sols_Righteous_Gaze, Conquest
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

import hit from "../../../assets/icons/hit.svg";
import dice from "../../../assets/icons/dice.png";

const LordSolarLeontus = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={LordSolarLeonts} alt="LordSolarLeontus" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>12"</div>
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
                        <div className={style.param_number}>6</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={T} alt="T" className={style.param_img} />
                        <div className={style.param_number}>4</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>8</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>6</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Ld} alt="Ld" className={style.param_img} />
                        <div className={style.param_number}>10</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Sv} alt="Sv" className={style.param_img} />
                        <div className={style.param_number}>3+</div>
                    </div>
                </div>
            </section >

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Sols_Righteous_Gaze />
                    <Conquest />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Artificer Refractor Helm</div>
                        <div className={style.block_symbol}>
                            <div className={style.symbol_text}>4+</div>
                            <img src={Sv} alt="Sv" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Эта модель имеет 4+ неуязвимых сейва. Уменьшайте вдвое урон (округляя в большую сторону).
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>The Collegiate Astrolex</div>
                        <div className={style.block_symbol}>
                            <div className={style.symbol_text}>1</div>
                            <img src={dice} alt="dice" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        В начале первой командной фазы сражения вы получаете 1 CP.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Heroic Senior Officer (Aura)</div>
                        <div className={style.block_symbol}>
                            <div className={style.symbol_text}>1</div>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Если дружественный отряд находится в пределах 6" от этой модели,
                        каждый раз, когда модель в этом подразделении совершает атаку,
                        повторно бросайте бросок попадания 1 и повторно бросайте бросок
                        ранения 1.
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

export { LordSolarLeontus }