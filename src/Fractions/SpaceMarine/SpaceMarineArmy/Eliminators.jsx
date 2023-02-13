import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import eliminators from "../../../assets/SpaceMarine/Eliminators.png";

import {
    Bolt_pistol, Bolt_sniper_E, Bolt_sniper_H, Bolt_sniper_M,
    Instigator_bolt_carbine, Las_fusil, Frag_grenades, Krak_grenades
} from "../SpaceMarineWeapon";

import {
    TRANSHUMAN_PHYSIOLOGY, GENE_WROUGHT_MIGHT, SONS_OF_GUILLIMAN, OCULAR_NETWORKING,
    PIVOTAL_MOMENT, HONOURED_SERGEANT, UNCOMPROMISING_FIRE, STEADY_ADVANCE, GUERILLA_TACTICS,
    SQUAD_DOCTRINES, DISPERSAL_PROTOCOLS, AUSPEX_SCAN, TACTICAL_AUGURY
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

const Eliminators = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={eliminators} alt="Eliminators" className={style.combat_unit_img} />
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
                    <Bolt_sniper_E />
                    <Bolt_sniper_H />
                    <Bolt_sniper_M />
                    <Instigator_bolt_carbine />
                    <Las_fusil />
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
                            <div className={style.abilities_title}>Camo Cloak</div>
                            <img src={T} alt="T" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Каждый раз, когда носителю назначается дальняя атака,
                            в то время как он получает преимущества прикрытия,
                            добавляйте дополнительный 1 к любому спасброску брони,
                            сделанному против этой атаки.
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>
                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Covering Fire</div>
                        <div className={style.block_symbol}>
                            <img src={question} alt="question" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        На вашей фазе стрельбы, после того, как это подразделение выстрелило,
                        если оно не находится в пределах досягаемости каких-либо вражеских
                        подразделений и содержит сержанта-ликвидатора, оснащенного болтовым
                        карабином "подстрекатель", оно может совершить обычное движение,
                        как если бы это была ваша фаза передвижения.
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <TRANSHUMAN_PHYSIOLOGY />
                <GENE_WROUGHT_MIGHT />
                <SONS_OF_GUILLIMAN />
                <OCULAR_NETWORKING />
                <PIVOTAL_MOMENT />
                <HONOURED_SERGEANT />
                <UNCOMPROMISING_FIRE />
                <STEADY_ADVANCE />
                <GUERILLA_TACTICS />
                <SQUAD_DOCTRINES />
                <DISPERSAL_PROTOCOLS />
                <AUSPEX_SCAN />
                <TACTICAL_AUGURY />
            </section>
        </section >
    )
}

export { Eliminators }