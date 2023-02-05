import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Drone from "../../../assets/TauEmpire/Drone.png";

import {
    EXPERIMENTAL_WEAPONRY,
    SAVIOUR_PROTOCOLS,
    ORBITAL_UPLINK,
    COORDINATED_ENGAGEMENT,
} from "../TauEmpireStrat";

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
import morale from "../../../assets/icons/morale.png";
import limitation from "../../../assets/icons/limitation.png";

const Drones = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={Drone} alt="Drone" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>

                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>10"</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={WS} alt="WS" className={style.param_img} />
                        <div className={style.param_number}>5+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={BS} alt="BS" className={style.param_img} />
                        <div className={style.param_number}>5+</div>
                    </div>



                    <div className={style.combat_unit_param_block}>
                        <img src={S} alt="S" className={style.param_img} />
                        <div className={style.param_number}>3</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={T} alt="T" className={style.param_img} />
                        <div className={style.param_number}>4</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>1/2</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>1</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Ld} alt="Ld" className={style.param_img} />
                        <div className={style.param_number}>6</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Sv} alt="Sv" className={style.param_img} />
                        <div className={style.param_number}>4+</div>
                    </div>

                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Оружие</div>

                <div className={style.weapon_content}>
                    <div className={style.weapon_block}>
                        <div className={style.weapon_title}>Pulse carbine</div>
                        <div className={style.weapon_block_info}>
                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>R</div>
                                <div className={style.weapon_text}>24"</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>As</div>
                                <div className={style.weapon_text}>2</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>S</div>
                                <div className={style.weapon_text}>5</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>AP</div>
                                <div className={style.weapon_text}>0</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>D</div>
                                <div className={style.weapon_text}>1</div>
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
                        <div className={style.abilities_title}>Valued Sacrifice</div>
                        <div className={style.block_symbol}>
                            <img src={morale} alt="morale" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Уничтожение этой модели игнорируется с целью проверки боевого духа.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Limited Parameters</div>
                        <div className={style.block_symbol}>
                            <img src={limitation} alt="limitation" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Если отряд имеет только модели дронов, этот отряд не может выполнять
                        действия (кроме Markerlights) и теряет способность Objective Secure.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Docked Drone</div>
                        <div className={style.block_symbol}>
                            <img src={limitation} alt="limitation" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Если отряд погибает, а дроны в нем остаются - они автоматически уничтожаются.
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <EXPERIMENTAL_WEAPONRY />
                <SAVIOUR_PROTOCOLS />
                <ORBITAL_UPLINK />
                <COORDINATED_ENGAGEMENT />
            </section>
        </section>
    )
}

export { Drones }