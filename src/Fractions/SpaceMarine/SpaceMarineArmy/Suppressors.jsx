import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import suppressors from "../../../assets/SpaceMarine/Suppressors.png";

import {
    Bolt_pistol, Accelerator_autocannon,
    Frag_grenades, Krak_grenades
} from "../SpaceMarineWeapon";

import {
    TRANSHUMAN_PHYSIOLOGY, GENE_WROUGHT_MIGHT, OCULAR_NETWORKING, SONS_OF_GUILLIMAN,
    PIVOTAL_MOMENT, HONOURED_SERGEANT, SQUAD_DOCTRINES, HAMMER_OF_WRATH, UNCOMPROMISING_FIRE,
    STEADY_ADVANCE, DISPERSAL_PROTOCOLS, AUSPEX_SCAN, TACTICAL_AUGURY
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

import hit from "../../../assets/icons/hit.svg";

const Suppressors = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={suppressors} alt="Suppressors" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>12"</div>
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
                    <Accelerator_autocannon />
                    <Frag_grenades />
                    <Krak_grenades />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>
                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Suppressing Fire</div>
                        <div className={style.block_symbol}>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Каждый раз, когда модель в этом подразделении совершает атаку с помощью accelerator autocannon
                        против вражеского пехотного подразделения, если засчитывается попадание, это вражеское подразделение
                        не может вести огонь в течение этого хода.
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <TRANSHUMAN_PHYSIOLOGY />
                <GENE_WROUGHT_MIGHT />
                <OCULAR_NETWORKING />
                <SONS_OF_GUILLIMAN />
                <PIVOTAL_MOMENT />
                <HONOURED_SERGEANT />
                <SQUAD_DOCTRINES />
                <HAMMER_OF_WRATH />
                <UNCOMPROMISING_FIRE />
                <STEADY_ADVANCE />
                <DISPERSAL_PROTOCOLS />
                <AUSPEX_SCAN />
                <TACTICAL_AUGURY />
            </section>
        </section >
    )
}

export { Suppressors }