import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import WarbossinMegaarmour from "../../../assets/Orks/Warboss in Mega Armour.png";

import {
    Big_shoota, Uge_choppa
} from "../OrksWeapon";

import {
    UNBRIDLED_CARNAGE, SHOWIN_OFF, ORKS_IS_NEVER_BEATEN, EXTRA_GUBBINZ,
    BIG_BOSS, WRECKAZ, GET_DA_LOOT, GROT_SHIELDS, TELLYPORTA,
    MORE_DAKKA
} from "../OrksStrat";

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
import location from "../../../assets/icons/location.png";

const WarbossinMegaArmour = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={WarbossinMegaarmour} alt="Warboss in Mega Armour" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>5"</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={WS} alt="WS" className={style.param_img} />
                        <div className={style.param_number}>2+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={BS} alt="BS" className={style.param_img} />
                        <div className={style.param_number}>5+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={S} alt="S" className={style.param_img} />
                        <div className={style.param_number}>6</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={T} alt="T" className={style.param_img} />
                        <div className={style.param_number}>6</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>7</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>5</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Ld} alt="Ld" className={style.param_img} />
                        <div className={style.param_number}>8</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Sv} alt="Sv" className={style.param_img} />
                        <div className={style.param_number}>2+</div>
                    </div>
                </div>
            </section >

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Big_shoota />
                    <Uge_choppa />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>
                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Dead Tough</div>
                        <div className={style.block_symbol}>
                            <div className={style.abilities_title}>5+</div>
                            <img src={Sv} alt="Sv" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Эта модель имеет 5+ неуязвимых сейвов.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Grot Gunner</div>
                        <div className={style.block_symbol}>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Каждый раз, когда эта модель совершает атаку с помощью big shoota или
                        реликвии, заменяющей большой выстрел этой модели, добавляйте 1 к броску
                        попадания этой атаки.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Warboss (Aura)</div>
                        <div className={style.block_symbol}>
                            <img src={WS} alt="WS" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Пока дружественное отряд или ПЕРСОНАЖНАЯ единица находится в пределах 6" от этой
                        модели, каждый раз, когда модель в этом подразделении совершает атаку ближнего боя,
                        добавляйте 1 к броску попадания этой атаки.
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <UNBRIDLED_CARNAGE />
                <SHOWIN_OFF />
                <ORKS_IS_NEVER_BEATEN />
                <EXTRA_GUBBINZ />
                <BIG_BOSS />
                <WRECKAZ />
                <GET_DA_LOOT />
                <GROT_SHIELDS />
                <TELLYPORTA />
                <MORE_DAKKA />
            </section>
        </section >
    )
}

export { WarbossinMegaArmour }