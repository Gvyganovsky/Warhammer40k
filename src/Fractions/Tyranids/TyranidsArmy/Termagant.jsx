import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import termagant from "../../../assets/Tyranids/Termagant.png";

import {
    Termagant_spinefists, Fleshborer, Termagant_devourer
} from "../TyranidsWeapon";

import {
    UNPARALLELED_FEROCITY, OPPORTUNISTIC_ADVANCE, COMBINED_ASSAULT, CRITICAL_MASS,
    SCORCH_BUGS, ADRENAL_SURGE, BURIED_IN_WAIT, OVERRUN, ENDLESS_SWARM,
    BIO_ADAPTED_BORER_GRUBS, PATHOGENIC_SLIME
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

import hit from "../../../assets/icons/hit.svg";

const Termagant = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={termagant} alt="Termagant" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>6"</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={WS} alt="WS" className={style.param_img} />
                        <div className={style.param_number}>4+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={BS} alt="BS" className={style.param_img} />
                        <div className={style.param_number}>4+</div>
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
                        <div className={style.param_number}>1</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>1</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Ld} alt="Ld" className={style.param_img} />
                        <div className={style.param_number}>5</div>
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
                    <Termagant_spinefists />
                    <Fleshborer />
                    <Termagant_devourer />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Adrenal glands</div>
                            <img src={S} alt="S" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Добавьте 1" к характеристике перемещения и добавьте 1 к
                            характеристике силы носителя.
                        </div>
                    </div>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Toxin sacs</div>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Каждый раз, когда носитель совершает атаку в ближнем бою,
                            неизмененный бросок из 6 ударов автоматически ранит цель.
                        </div>
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
                <SCORCH_BUGS />
                <ADRENAL_SURGE />
                <BURIED_IN_WAIT />
                <OVERRUN />
                <ENDLESS_SWARM />
                <BIO_ADAPTED_BORER_GRUBS />
                <PATHOGENIC_SLIME />
            </section>
        </section >
    )
}

export { Termagant }