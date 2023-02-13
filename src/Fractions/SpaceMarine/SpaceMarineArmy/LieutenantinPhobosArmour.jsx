import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import LieutenantinPhobosarmour from "../../../assets/SpaceMarine/Lieutenant in Phobos Armour.png";

import {
    Bolt_pistol, Master_crafted_occulus_bolt_carbine, Paired_combat_blades,
    Frag_grenades, Krak_grenades
} from "../SpaceMarineWeapon";

import {
    OCULAR_NETWORKING, TRANSHUMAN_PHYSIOLOGY, GENE_WROUGHT_MIGHT, SONS_OF_GUILLIMAN,
    ONLY_IN_DEATH_DOES_DUTY_END, INSPIRING_COMMAND, HONOURED_BY_MACRAGGE, EXEMPLAR_OF_THE_CHAPTER, RELIC_OF_THE_CHAPTER,
    HERO_OF_THE_CHAPTER, DISPERSAL_PROTOCOLS, GUERILLA_TACTICS, STEADY_ADVANCE, UNCOMPROMISING_FIRE,
    SQUAD_DOCTRINES, AUSPEX_SCAN, TACTICAL_AUGURY
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

const LieutenantinPhobosArmour = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={LieutenantinPhobosarmour} alt="LieutenantinPhobosArmour" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>6"</div>
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
                        <div className={style.param_number}>4</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={T} alt="T" className={style.param_img} />
                        <div className={style.param_number}>4</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>5</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>4</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Ld} alt="Ld" className={style.param_img} />
                        <div className={style.param_number}>8</div>
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
                    <Master_crafted_occulus_bolt_carbine />
                    <Paired_combat_blades />
                    <Frag_grenades />
                    <Krak_grenades />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>
                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Tactical Precision (Aura)</div>
                        <div className={style.block_symbol}>
                            <img src={W} alt="W" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        В то время как дружественный ОСНОВНОЙ отряд УЛЬТРАМАРИНОВ находится в пределах 6"
                        от этой модели, каждый раз, когда модель в этом подразделении совершает атаку,
                        повторно делайте бросок с ранением в 1.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Company Heroes</div>
                        <div className={style.block_symbol}>
                            <img src={question} alt="question" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Если ваша армия выкована в боях, то для каждого подразделения ЛЕЙТЕНАНТА,
                        включенного в Отряд, подразделение второго ЛЕЙТЕНАНТА может быть включено
                        в это подразделение, не занимая дополнительного места для роли на поле боя.
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
                <ONLY_IN_DEATH_DOES_DUTY_END />
                <INSPIRING_COMMAND />
                <HONOURED_BY_MACRAGGE />
                <EXEMPLAR_OF_THE_CHAPTER />
                <RELIC_OF_THE_CHAPTER />
                <HERO_OF_THE_CHAPTER />
                <DISPERSAL_PROTOCOLS />
                <GUERILLA_TACTICS />
                <STEADY_ADVANCE />
                <UNCOMPROMISING_FIRE />
                <SQUAD_DOCTRINES />
                <AUSPEX_SCAN />
                <TACTICAL_AUGURY />
            </section>
        </section >
    )
}

export { LieutenantinPhobosArmour }