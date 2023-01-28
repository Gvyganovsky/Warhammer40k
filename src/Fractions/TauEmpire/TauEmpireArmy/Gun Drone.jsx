import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import GunDrones from "../../../assets/TauEmpire/Gun Drone.png";

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

const GunDrone = () => {
    return (
        <div>
            <section className={style.content}>
                <img src={GunDrones} alt="Gun Drone" className={style.combat_unit_img} />
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
                            <div className={style.param_number}>1</div>
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
                <div className={style.weapon}>
                    <div className={style.gun_title}>Pulse carbine</div>

                    <div className={style.weapon_content}>
                        <img src={range} alt="range" className={style.param_img} />
                        <div className={style.gun_number}>24"</div>
                    </div>

                    <div className={style.weapon_content}>
                        <div className={style.gun_number}>Assault</div>
                        <div className={style.gun_number}>2</div>
                    </div>

                    <div className={style.weapon_content}>
                        <img src={S} alt="S" className={style.param_img} />
                        <div className={style.gun_number}>5</div>
                    </div>

                    <div className={style.weapon_content}>
                        <div className={style.gun_number}>AP</div>
                        <div className={style.gun_number}>0</div>
                    </div>

                    <div className={style.weapon_content}>
                        <div className={style.gun_number}>D</div>
                        <div className={style.gun_number}>1</div>
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Протокол идентификации угрозы</div>
                        <div className={style.block_symbol}>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Каждый раз, когда эта модель совершает дальнобойную атаку,
                        она может быть нацелена только на ближайшее подходящее подразделение.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Ценная жертва</div>
                        <div className={style.block_symbol}>
                            <img src={morale} alt="morale" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Каждый раз, когда модель дрона в этом отряде уничтожается, потери
                        игнорируется с целью проверки боевого духа.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Ограниченные параметры</div>
                        <div className={style.block_symbol}>
                            <img src={limitation} alt="limitation" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Если этот отряд содержит только модели дронов, этот отряд не может
                        выполнять действия (за исключением Fire Markerlights) и теряет
                        способность Objective Secure, если она у него есть, и не может получить
                        ее никакими средствами.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Пристыкованный беспилотник</div>
                        <div className={style.block_symbol}>
                            <img src={question} alt="question" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        <div className={style.abilities_text}>
                            <div>Eсли эта модель пристыкована к другой:</div>
                            <div>1. Любое оружие, которым оснащена эта модель, считается снаряженным
                                в соответствии с моделью, с которой оно состыковано вместо этого.</div>
                            <div>2. Атаки не могут быть отнесены к этой модели, и она не считается
                                моделью на поле боя ни для каких целей правил.</div>
                            <div>3. Если модель, с которой он состыкован, уничтожена, эта модель
                                дрона также уничтожается.</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <div className={style.strat}>
                    <div className={style.stratName_stratEpicDeed}>
                        <span>ЭКСПЕРИМЕНТАЛЬНОЕ ОРУЖИЕ</span>
                        <span>2 CP</span>
                    </div>
                    <div className={style.stratName_info_stratEpicDeed}>
                        Используйте эту стратегию на этапе стрельбы, когда для стрельбы
                        выбирается подразделение БОРК'ан из вашей армии. Выберите одну
                        модель в этом подразделении и одно оружие, которым оснащена эта
                        модель. До конца фазы, каждый раз, когда эта модель совершает
                        атаку этим оружием, неуязвимые спасброски не могут быть предприняты
                        против этой атаки.
                    </div>
                </div>


                <div className={style.strat}>
                    <div className={style.stratName_stratWargear}>
                        <span>ПРОТОКОЛЫ СПАСИТЕЛЯ</span>
                        <span>1 CP</span>
                    </div>
                    <div className={style.stratName_info_stratWargear}>
                        Используйте эту стратегию на любой фазе, когда спасбросок не удался
                        для модели в подразделении 'SEPT' из вашей армии. Выберите одну
                        удобную модель дрона 'SEPT' в пределах 3 дюймов от этого устройства
                        или в пределах 6 дюймов от этого устройства, если оно содержит модель,
                        оснащенную контроллером дрона. Эта модель дрона уничтожена, и характеристика
                        урона от этой атаки изменена на 0.
                    </div>
                </div>

                <div className={style.strat}>
                    <div className={style.stratName_stratStrategicPloy}>
                        <span>ОРБИТАЛЬНАЯ ВОСХОДЯЩАЯ ЛИНИЯ СВЯЗИ</span>
                        <span>1 CP</span>
                    </div>
                    <div className={style.stratName_info_stratStrategicPloy}>
                        Используйте эту стратегию на этапе съемки. Выберите одного вражеского юнита.
                        До конца фазы, каждый раз, когда модель в подразделении SA'CEA из вашей армии
                        совершает дальнюю атаку против этого вражеского подразделения, цель не получает
                        преимуществ прикрытия от этой атаки.
                    </div>
                </div>

                <div className={style.strat}>
                    <div className={style.stratName_stratStrategicPloy}>
                        <span>СКООРДИНИРОВАННОЕ ВЗАИМОДЕЙСТВИЕ</span>
                        <span>1 CP</span>
                    </div>
                    <div className={style.stratName_info_stratStrategicPloy}>
                        Используйте эту стратегию на этапе стрельбы, прежде чем выбирать юнит для стрельбы.
                        Выберите одно вражеское подразделение и два подразделения 'SEPT' из вашей армии,
                        которые находятся в пределах 18 дюймов от этого вражеского подразделения и видны ему.
                        До конца фазы, каждый раз, когда модель в одном из этих подразделений 'SEPT'
                        совершает атаку:
                        <div>Эта атака может быть нацелена только на этот вражеский юнит (и только в том случае, если это подходящая цель).</div>
                        <div>Улучшите характеристику бронепробиваемости этой атаки на 1.</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export { GunDrone }