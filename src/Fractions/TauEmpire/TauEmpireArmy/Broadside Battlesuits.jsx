import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Broadside from "../../../assets/TauEmpire/Broadside.png";

import {
    EXPERIMENTAL_WEAPONRY,
    SAVIOUR_PROTOCOLS,
    FAIL_SAFE_DETONATOR,
    ORBITAL_UPLINK,
    COORDINATED_ENGAGEMENT,
    FREQUENCY_LOCK,
    REPULSOR_IMPACT_FIELD
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
import dice from "../../../assets/icons/dice.png";

const BroadsideBattlesuits = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={Broadside} alt="Broadside" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>5"</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={WS} alt="WS" className={style.param_img} />
                        <div className={style.param_number}>5+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={BS} alt="BS" className={style.param_img} />
                        <div className={style.param_number}>4+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={S} alt="S" className={style.param_img} />
                        <div className={style.param_number}>5</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={T} alt="T" className={style.param_img} />
                        <div className={style.param_number}>5</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>8</div>
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
                        <div className={style.param_number}>2+</div>
                    </div>
                </div>
            </section >

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Оружие</div>

                <div className={style.weapon_content}>
                    <div className={style.weapon_block}>
                        <div className={style.weapon_title}>Heavy rail rifle</div>
                        <div className={style.weapon_block_info}>
                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>R</div>
                                <div className={style.weapon_text}>60"</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>Hv</div>
                                <div className={style.weapon_text}>2</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>S</div>
                                <div className={style.weapon_text}>9</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>AP</div>
                                <div className={style.weapon_text}>-4</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>D</div>
                                <div className={style.weapon_text}>D3+3</div>
                            </div>
                        </div>
                    </div>

                    <div className={style.weapon_block}>
                        <div className={style.weapon_title}>High-yield mis pod</div>
                        <div className={style.weapon_block_info}>
                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>R</div>
                                <div className={style.weapon_text}>30"</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>Hv</div>
                                <div className={style.weapon_text}>4</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>S</div>
                                <div className={style.weapon_text}>7</div>
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

                    <div className={style.weapon_block}>
                        <div className={style.weapon_title}>Seeker missile</div>
                        <div className={style.weapon_block_info}>
                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>R</div>
                                <div className={style.weapon_text}>72"</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>Hv</div>
                                <div className={style.weapon_text}>1</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>S</div>
                                <div className={style.weapon_text}>9</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>AP</div>
                                <div className={style.weapon_text}>-3</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>D</div>
                                <div className={style.weapon_text}>2D3</div>
                            </div>
                        </div>
                    </div>

                    <div className={style.weapon_block}>
                        <div className={style.weapon_title}>Twin plasma rifle</div>
                        <div className={style.weapon_block_info}>
                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>R</div>
                                <div className={style.weapon_text}>30"</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>As</div>
                                <div className={style.weapon_text}>2</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>S</div>
                                <div className={style.weapon_text}>8</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>AP</div>
                                <div className={style.weapon_text}>-4</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>D</div>
                                <div className={style.weapon_text}>3</div>
                            </div>
                        </div>
                    </div>

                    <div className={style.weapon_block}>
                        <div className={style.weapon_title}>Twin smart mis</div>
                        <div className={style.weapon_block_info}>
                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>R</div>
                                <div className={style.weapon_text}>30"</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>Hv</div>
                                <div className={style.weapon_text}>8</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>S</div>
                                <div className={style.weapon_text}>5</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>AP</div>
                                <div className={style.weapon_text}>-1</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>D</div>
                                <div className={style.weapon_text}>1</div>
                            </div>
                        </div>
                    </div>

                    <div className={style.weapon_block}>
                        <div className={style.weapon_title}>Crushing bulk</div>
                        <div className={style.weapon_block_info}>
                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>R</div>
                                <div className={style.weapon_text}>-</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>Ml</div>
                                <div className={style.weapon_text}>-</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>S</div>
                                <div className={style.weapon_text}>+1</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>AP</div>
                                <div className={style.weapon_text}>-1</div>
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
                            <div className={style.abilities_title}>Advanced targeting system</div>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Каждый раз, когда носитель совершает дальнюю атаку,
                            неизмененный бросок из 6 ударов автоматически ранит
                            цель.
                        </div>
                    </div>
                </div>

                <div className={style.weapon_content}>
                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Early warning override</div>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Каждый раз, когда носитель запускает Overwatch,
                            он получает попадания по неизмененным броскам 5+
                            вместо 6.
                            <div className={style.weaponOther_text}>
                                Каждый раз, когда вы используете стратагему Fire Overwatch
                                Stratagem, если носитель находится на поле боя и его подразделение
                                выбрано для Fire Overwatch Stratagem, уменьшайте стоимость CP этой
                                стратагемы на 1.
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.weapon_content}>
                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Multi-tracker</div>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Каждый раз, когда дальняя атака, совершаемая носителем,
                            нацелена на юнит, содержащий 6 или более моделей,
                            немодифицированный бросок удара в 6 очков дает 1
                            дополнительный удар. Максимум 1 на модель.
                        </div>
                    </div>
                </div>

                <div className={style.weapon_content}>
                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Stabilised optics</div>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Предъявитель не подвергается штрафу за броски попадания, понесенные
                            за стрельбу из Heavy оружия в тот же ход, что и его подразделение,
                            и не подвергается штрафу за броски попадания, понесенные за стрельбу
                            из Heavy оружия по цели, которая находится в пределах досягаемости их подразделения.
                        </div>
                    </div>
                </div>

                <div className={style.weapon_content}>
                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Velocity tracker</div>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Каждый раз, когда носитель совершает атаку дальнего боя против юнита,
                            который может ЛЕТАТЬ, добавляйте 1 к броску попадания этой атаки.
                            Максимум 1 на модель.
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <EXPERIMENTAL_WEAPONRY />
                <SAVIOUR_PROTOCOLS />
                <FAIL_SAFE_DETONATOR />
                <ORBITAL_UPLINK />
                <COORDINATED_ENGAGEMENT />
                <FREQUENCY_LOCK />
                <REPULSOR_IMPACT_FIELD />
            </section>
        </section >
    )
}

export { BroadsideBattlesuits }