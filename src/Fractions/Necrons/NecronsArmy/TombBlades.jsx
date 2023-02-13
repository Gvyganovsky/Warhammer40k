import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Tombblades from "../../../assets/Necrons/Tomb Blades.png";

import {
    Particle_beamer, Twin_gauss_blaster, Twin_tesla_carbine
} from "../NecronsWeapon";

import {
    BLOOD_RITES, METHODICAL_DESTRUCTION, TECHNO_ORACULAR_TARGETING, FRACTAL_TARGETING,
    TALENT_FOR_ANNIHILATION, TRANSLOCATION_CRYPT, PRISMATIC_DIMENSIONAL_BREACH, EMPYRIC_DAMPING,
    DISRUPTION_FIELDS, DISINTEGRATION_CAPACITORS, MALEVOLENT_ARCING, SOLAR_PULSE
} from "../NecronsStrat";

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

const TombBlades = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={Tombblades} alt="TombBlades" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>14"</div>
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
                        <div className={style.param_number}>4</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={T} alt="T" className={style.param_img} />
                        <div className={style.param_number}>5</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>2</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>1</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Ld} alt="Ld" className={style.param_img} />
                        <div className={style.param_number}>10</div>
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
                    <Particle_beamer />
                    <Twin_gauss_blaster />
                    <Twin_tesla_carbine />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Nebuloscope</div>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Каждый раз, когда носитель совершает атаку дальнего боя, цель не
                            получает преимуществ прикрытия от этой атаки.
                        </div>
                    </div>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Shadowloom</div>
                            <img src={Sv} alt="Sv" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            У носителя есть 5+ неуязвимых сейвов.
                        </div>
                    </div>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Shieldvanes</div>
                            <img src={Sv} alt="Sv" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Предъявитель имеет характеристику сохранения 3+.
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Evasion Engrams</div>
                        <div className={style.block_symbol}>
                            <div className={style.symbol_text}>-1</div>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Каждый раз, когда против этого юнита наносится дальняя атака, вычтите 1 из броска попадания этой атаки.
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <BLOOD_RITES />
                <METHODICAL_DESTRUCTION />
                <TECHNO_ORACULAR_TARGETING />
                <FRACTAL_TARGETING />
                <TALENT_FOR_ANNIHILATION />
                <TRANSLOCATION_CRYPT />
                <PRISMATIC_DIMENSIONAL_BREACH />
                <EMPYRIC_DAMPING />
                <DISRUPTION_FIELDS />
                <DISINTEGRATION_CAPACITORS />
                <MALEVOLENT_ARCING />
                <SOLAR_PULSE />
            </section>
        </section >
    )
}

export { TombBlades }