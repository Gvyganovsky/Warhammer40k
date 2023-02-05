import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Drone from "../../../assets/TauEmpire/Drone.png";

import M from "../../../assets/icons/M.png";
import WS from "../../../assets/icons/WS.png";
import BS from "../../../assets/icons/BS.png";
import S from "../../../assets/icons/S.png";
import T from "../../../assets/icons/T.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";
import Ld from "../../../assets/icons/Ld.png";
import Sv from "../../../assets/icons/Sv.png";

import range from "../../../assets/icons/range.png";
import hit from "../../../assets/icons/hit.svg";
import question from "../../../assets/icons/question.png";
import morale from "../../../assets/icons/morale.png";
import limitation from "../../../assets/icons/limitation.png";
import general from "../../../assets/icons/general.png";
import shooting from "../../../assets/icons/shooting.png";

import location from "../../../assets/icons/location.png";
import skull from "../../../assets/icons/skull.png";

const Drones = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={Drone} alt="Drone" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>

                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>10</div>
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

                <div className={style.strat}>
                    <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                        <span>EXPERIMENTAL WEAPONRY</span>
                        <span>2 CP</span>
                    </div>
                    <div className={style.strat_text}>
                        <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                        До конца фазы: выбранная модель совершает атаку, неуязвимые спасброски
                        не могут быть предприняты против этой атаки.
                    </div>
                </div>

                <div className={style.strat}>
                    <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                        <span>SAVIOUR PROTOCOLS</span>
                        <span>1 CP</span>
                    </div>
                    <div className={style.strat_text}>
                        <span className={style.strat_text_bold}>Любая фаза</span>.
                        Если спасбросок не удался, выберите и уберите модель дрона в пределах 3" или 6" от юнита.
                        Урон от атаки по основной цели снижен до 0.
                    </div>
                </div>

                <div className={style.strat}>
                    <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                        <span>ORBITAL UPLINK</span>
                        <span>1 CP</span>
                    </div>
                    <div className={style.strat_text}>
                        <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                        До конца фазы: При дальней атаки против этого вражеского
                        подразделения, цель не получает преимуществ прикрытия от этой атаки.
                    </div>
                </div>

                <div className={style.strat}>
                    <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                        <span>ORBITAL UPLINK</span>
                        <span>1 CP</span>
                    </div>
                    <div className={style.strat_text}>
                        <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                        До конца фазы: При дальней атаки против этого вражеского
                        подразделения, цель не получает преимуществ прикрытия от этой атаки.
                    </div>
                </div>

                <div className={style.strat}>
                    <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                        <span>COORDINATED ENGAGEMENT</span>
                        <span>1 CP</span>
                    </div>
                    <div className={style.strat_text}>
                        <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                        Прежде чем выбирать юнита для стрельбы. Выберите одно вражеское подразделение и 2 подразделения
                        SEPT из вашей армии, которые находятся в пределах 18" от этого вражеского подразделения и видны
                        ему. До конца фазы, каждый раз, когда модель в одном из этих подразделений SEPT совершает атаку:
                        Улучшите характеристику бронепробиваемости этой атаки на 1.
                    </div>
                </div>
            </section>

        </section>
    )
}

export { Drones }