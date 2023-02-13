import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import infiltrators from "../../../assets/SpaceMarine/Infiltrators.png";

import {
    Bolt_pistol, Marksman_bolt_carbine, Frag_grenades, Krak_grenades
} from "../SpaceMarineWeapon";

import {
    OCULAR_NETWORKING, TRANSHUMAN_PHYSIOLOGY, GENE_WROUGHT_MIGHT, SONS_OF_GUILLIMAN,
    PIVOTAL_MOMENT, HONOURED_SERGEANT, SQUAD_DOCTRINES, UNCOMPROMISING_FIRE, STEADY_ADVANCE,
    GUERILLA_TACTICS, DISPERSAL_PROTOCOLS, AUSPEX_SCAN, SMOKESCREEN, TACTICAL_AUGURY,
    VOXBREAKER_AUSPEX, SABOTEUR_EXPLOSIVE_PACK
} from "../SpaceMarineStrat";

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
import location from "../../../assets/icons/location.png";

const Infiltrators = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={infiltrators} alt="Infiltrators" className={style.combat_unit_img} />
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
                        <div className={style.param_number}>4</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={T} alt="T" className={style.param_img} />
                        <div className={style.param_number}>4</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>2</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>2</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Ld} alt="Ld" className={style.param_img} />
                        <div className={style.param_number}>7</div>
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
                    <Bolt_pistol />
                    <Marksman_bolt_carbine />
                    <Frag_grenades />
                    <Krak_grenades />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Helix gauntlet</div>
                            <img src={W} alt="W" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Один раз за ход, при первом неудачном спасброске для подразделения
                            носителя, характеристика урона от этой атаки изменяется на 0.
                        </div>
                    </div>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Infiltrator comms array</div>
                            <img src={question} alt="question" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Считается, что подразделение носителя всегда находится в пределах досягаемости
                            следующих способностей ауры любых дружественных подразделений ультрамаринов ФОБОСА,
                            находящихся на поле боя: Боевые ритуалы; Тактическая точность.
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>
                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Omni-scrambler</div>
                        <div className={style.block_symbol}>
                            <img src={location} alt="location" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Вражеские подразделения, размещенные на поле боя в
                        качестве подкрепления, не могут быть размещены в
                        пределах 12 дюймов от этого подразделения.
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <OCULAR_NETWORKING />
                <TRANSHUMAN_PHYSIOLOGY />
                <GENE_WROUGHT_MIGHT />
                <SONS_OF_GUILLIMAN />
                <PIVOTAL_MOMENT />
                <HONOURED_SERGEANT />
                <SQUAD_DOCTRINES />
                <UNCOMPROMISING_FIRE />
                <STEADY_ADVANCE />
                <GUERILLA_TACTICS />
                <DISPERSAL_PROTOCOLS />
                <AUSPEX_SCAN />
                <SMOKESCREEN />
                <TACTICAL_AUGURY />
                <VOXBREAKER_AUSPEX />
                <SABOTEUR_EXPLOSIVE_PACK />
            </section>
        </section >
    )
}

export { Infiltrators }