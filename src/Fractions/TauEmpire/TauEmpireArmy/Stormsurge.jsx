import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import stormsurge from "../../../assets/TauEmpire/stormsurge.png";

import {
    SAVIOUR_PROTOCOLS,
    COORDINATED_ENGAGEMENT,
    ORBITAL_UPLINK,
    EXPERIMENTAL_WEAPONRY,
    BACKUP_AI,
    COUNTERFIRE_DEFENCE_SYSTEM,
    FREQUENCY_LOCK
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
import shooting from "../../../assets/icons/shooting.png";
import general from "../../../assets/icons/general.png";

const Stormsurge = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={stormsurge} alt="stormsurge" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>8"</div>
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
                        <div className={style.param_number}>8</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={T} alt="T" className={style.param_img} />
                        <div className={style.param_number}>8</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>22</div>
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
                <div className={style.content_title}>Изменение характеристик от урона</div>
                <div className={style.damage_content}>
                    <div className={style.damage_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.damage_nubmer}>12-22</div>
                        <div className={style.damage_nubmer}>6-11</div>
                        <div className={style.damage_nubmer}>1-5</div>
                    </div>

                    <div className={style.damage_block}>
                        <img src={S} alt="S" className={style.param_img} />
                        <div className={style.damage_nubmer}>8</div>
                        <div className={style.damage_nubmer}>7</div>
                        <div className={style.damage_nubmer}>6</div>
                    </div>

                    <div className={style.damage_block}>
                        <img src={BS} alt="BS" className={style.param_img} />
                        <div className={style.damage_nubmer}>4+</div>
                        <div className={style.damage_nubmer}>5+</div>
                        <div className={style.damage_nubmer}>6+</div>
                    </div>

                    <div className={style.damage_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.damage_nubmer}>3</div>
                        <div className={style.damage_nubmer}>D3</div>
                        <div className={style.damage_nubmer}>1</div>
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Оружие</div>

                <div className={style.weapon_content}>
                    <div className={style.weapon_block}>
                        <div className={style.weapon_title}>Cluster rocket syst</div>
                        <div className={style.weapon_block_info}>
                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>R</div>
                                <div className={style.weapon_text}>48"</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>Hv</div>
                                <div className={style.weapon_text}>4D6</div>
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
                        <div className={style.weapon_title}>Destroyer missile</div>
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
                                <div className={style.weapon_text}>12</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>AP</div>
                                <div className={style.weapon_text}>-5</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>D</div>
                                <div className={style.weapon_text}>2D3</div>
                            </div>
                        </div>
                    </div>

                    <div className={style.weapon_blockTwo}>
                        <div className={style.weapon_title}>Pulse blast F</div>
                        <div className={style.weapon_block_info}>
                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>R</div>
                                <div className={style.weapon_text}>24"</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>Hv</div>
                                <div className={style.weapon_text}>2</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>S</div>
                                <div className={style.weapon_text}>16</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>AP</div>
                                <div className={style.weapon_text}>-4</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>D</div>
                                <div className={style.weapon_text}>12</div>
                            </div>
                        </div>
                    </div>

                    <div className={style.weapon_blockTwo}>
                        <div className={style.weapon_title}>Pulse blast D</div>
                        <div className={style.weapon_block_info}>
                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>R</div>
                                <div className={style.weapon_text}>48"</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>Hv</div>
                                <div className={style.weapon_text}>6</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>S</div>
                                <div className={style.weapon_text}>12</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>AP</div>
                                <div className={style.weapon_text}>-2</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>D</div>
                                <div className={style.weapon_text}>4</div>
                            </div>
                        </div>
                    </div>

                    <div className={style.weapon_block}>
                        <div className={style.weapon_title}>Pulse driver can</div>
                        <div className={style.weapon_block_info}>
                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>R</div>
                                <div className={style.weapon_text}>72"</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>Hv</div>
                                <div className={style.weapon_text}>3D3</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>S</div>
                                <div className={style.weapon_text}>10</div>
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
                        <div className={style.weapon_title}>Smart mis system</div>
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
                        <div className={style.weapon_title}>Twin air frag</div>
                        <div className={style.weapon_block_info}>
                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>R</div>
                                <div className={style.weapon_text}>24"</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>As</div>
                                <div className={style.weapon_text}>2D6</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>S</div>
                                <div className={style.weapon_text}>4</div>
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
                        <div className={style.weapon_title}>Twin burst can</div>
                        <div className={style.weapon_block_info}>
                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>R</div>
                                <div className={style.weapon_text}>18"</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>As</div>
                                <div className={style.weapon_text}>12</div>
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

                    <div className={style.weapon_block}>
                        <div className={style.weapon_title}>Twin T’au flamer</div>
                        <div className={style.weapon_block_info}>
                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>R</div>
                                <div className={style.weapon_text}>12"</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>As</div>
                                <div className={style.weapon_text}>2D6+4</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>S</div>
                                <div className={style.weapon_text}>4</div>
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

                    <div className={style.weapon_block}>
                        <div className={style.weapon_title}>Thund footfalls</div>
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
                                <div className={style.weapon_text}>-</div>
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
                <div className={style.content_title}>Способности</div>
                <div className={style.weapon_content}>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Drone controller</div>
                            <img src={general} alt="general" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            <span className={style.strat_text_bold}>Фаза командования</span>.
                            Вы можете выбрать один дрон в пределах 6"
                            от носителя. До начала вашей следующей командной фазы:
                        </div>
                        <div>Модели дронов в этом подразделении имеют BS 4+.</div>
                        <div>Модели боевых дронов в этом подразделении теряют способность «Протокола идентификации угрозы».</div>
                    </div>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Early warning override</div>
                            <img src={shooting} alt="shooting" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            <div>Когда носитель запускает Overwatch, он получает попадания по неизмененным броскам 5+ вместо 6.</div>
                            <div>Каждый раз, когда вы используете стратагему Fire Overwatch, если носитель находится на поле боя и его
                                подразделение выбрано для Fire Overwatch, уменьшайте стоимость CP этой стратагемы на 1.
                            </div>
                        </div>
                    </div>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Multi-tracker</div>
                            <img src={A} alt="A" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Когда дальняя атака нацелена на юнита, содержащий 6 или более моделей, немодифицированный
                            бросок 6 ударов дает 1 дополнительный удар. Максимум 1 на модель.
                        </div>
                    </div>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Target lock</div>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Когда носитель совершает дальнюю атаку, цель не получает преимущества легкого прикрытия от этой атаки.
                        </div>
                    </div>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Velocity tracker</div>
                            <img src={BS} alt="BS" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Когда носитель совершает атаку дальнего боя против юнита, который может ЛЕТАТЬ, добавляйте 1
                            к броску попадания этой атаки. Максимум 1 на модель.
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <EXPERIMENTAL_WEAPONRY />
                <SAVIOUR_PROTOCOLS />
                <BACKUP_AI />
                <ORBITAL_UPLINK />
                <COORDINATED_ENGAGEMENT />
                <COUNTERFIRE_DEFENCE_SYSTEM />
                <FREQUENCY_LOCK />
            </section>
        </section >
    )
}

export { Stormsurge }