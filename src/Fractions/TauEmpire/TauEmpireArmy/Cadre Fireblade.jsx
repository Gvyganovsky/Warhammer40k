import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Cadrefireblade from "../../../assets/TauEmpire/Cadre Fireblade.png";

import { SAVIOUR_PROTOCOLS } from "../TauEmpireStrat";
import { EMERGENCY_DISPENSATION } from "../TauEmpireStrat";
import { PROMISING_PUPIL } from "../TauEmpireStrat";
import { COORDINATED_ENGAGEMENT } from "../TauEmpireStrat";
import { DESIGNATED_TASKING } from "../TauEmpireStrat";
import { ORBITAL_UPLINK } from "../TauEmpireStrat";
import { EXPERIMENTAL_WEAPONRY } from "../TauEmpireStrat";
import { PHOTON_GRENADES } from "../TauEmpireStrat";

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

const CadreFireblade = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={Cadrefireblade} alt="Cadrefireblade" className={style.combat_unit_img} />
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
                        <div className={style.param_number}>4+</div>
                    </div>
                </div>
            </section >

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Оружие</div>

                <div className={style.weapon_content}>
                    <div className={style.weapon_block}>
                        <div className={style.weapon_title}>Firebl pulse rifle</div>
                        <div className={style.weapon_block_info}>
                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>R</div>
                                <div className={style.weapon_text}>36"</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>Rf</div>
                                <div className={style.weapon_text}>1</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>S</div>
                                <div className={style.weapon_text}>5</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>AP</div>
                                <div className={style.weapon_text}>-2</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>D</div>
                                <div className={style.weapon_text}>2</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Markerlight</div>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            <span className={style.strat_text_bold}>Фаза командования</span>.
                            В начале фазы движения юнит с Markerlight в пределах 36" может отметить
                            вражеского юнита до следующей фазы стрельбы. Бросьте 1D6: на 3+ вражеский
                            юнит получает 1 маркерный жетон, при наличии которого добавьте 1 к броскам
                            на попадание. После атаки вашего юнита уберите 1 маркерный жетон. К концу
                            фазы стрельбы уберите все маркерные жетоны.
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Volley Fire (Aura)</div>
                        <div className={style.block_symbol}>
                            <div className={style.abilities_title}>+1</div>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Отряд в пределах 6" от юнита при атаке импульсным
                        оружием немодифицированный бросок удара 6 дает
                        дополнительное попадание.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Target Sighted</div>
                        <div className={style.block_symbol}>
                            <div className={style.abilities_title}>1</div>
                            <img src={dice} alt="dice" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Отряд в пределах 9" от юнита до начала следующей
                        фазы командования может перебрасывать броски попадания,
                        равные 1.
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <EXPERIMENTAL_WEAPONRY />
                <SAVIOUR_PROTOCOLS />
                <EMERGENCY_DISPENSATION />
                <PROMISING_PUPIL />
                <ORBITAL_UPLINK />
                <COORDINATED_ENGAGEMENT />
                <DESIGNATED_TASKING />
                <PHOTON_GRENADES />
            </section>
        </section >
    )
}

export { CadreFireblade }