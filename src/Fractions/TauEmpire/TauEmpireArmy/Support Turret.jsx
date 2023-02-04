import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import SupportTurrets from "../../../assets/TauEmpire/Support Turret.png";

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
import location from "../../../assets/icons/location.png";
import hit from "../../../assets/icons/hit.svg";
import question from "../../../assets/icons/question.png";
import morale from "../../../assets/icons/morale.png";
import limitation from "../../../assets/icons/limitation.png";

import shooting from "../../../assets/icons/shooting.png";

const SupportTurret = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={SupportTurrets} alt="SupportTurret" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>-</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={WS} alt="WS" className={style.param_img} />
                        <div className={style.param_number}>-</div>
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
                        <div className={style.param_number}>-</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Ld} alt="Ld" className={style.param_img} />
                        <div className={style.param_number}>4</div>
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
                <div className={style.weapon}>
                    <div className={style.gun_title}>Missile pod</div>

                    <div className={style.weapon_content}>
                        <img src={range} alt="range" className={style.param_img} />
                        <div className={style.gun_number}>36"</div>
                    </div>

                    <div className={style.weapon_content}>
                        <div className={style.gun_number}>As</div>
                        <div className={style.gun_number}>2</div>
                    </div>

                    <div className={style.weapon_content}>
                        <img src={S} alt="S" className={style.param_img} />
                        <div className={style.gun_number}>7</div>
                    </div>

                    <div className={style.weapon_content}>
                        <div className={style.gun_number}>AP</div>
                        <div className={style.gun_number}>-1</div>
                    </div>

                    <div className={style.weapon_content}>
                        <div className={style.gun_number}>D</div>
                        <div className={style.gun_number}>D3</div>
                    </div>
                </div>

                <div className={style.weapon}>
                    <div className={style.gun_title}>Smart missile system</div>

                    <div className={style.weapon_content}>
                        <img src={range} alt="range" className={style.param_img} />
                        <div className={style.gun_number}>30"</div>
                    </div>

                    <div className={style.weapon_content}>
                        <div className={style.gun_number}>Heavy</div>
                        <div className={style.gun_number}>4</div>
                    </div>

                    <div className={style.weapon_content}>
                        <img src={S} alt="S" className={style.param_img} />
                        <div className={style.gun_number}>5</div>
                    </div>

                    <div className={style.weapon_content}>
                        <div className={style.gun_number}>AP</div>
                        <div className={style.gun_number}>-1</div>
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
                    <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                        <span>FOCUSED FIRE</span>
                        <span>2 CP</span>
                    </div>
                    <div className={style.strat_text}>
                        Используйте эту стратегию на <span className={style.strat_text_bold}>этапе стрельбы</span>,
                        когда вражеская модель теряет ранение в результате атаки. До конца фазы, при атаке прибавьте
                        1 к броску ранений этой атаки.
                    </div>
                </div>

                <div className={style.strat}>
                    <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                        <span>DROP ZONE CLEAR</span>
                        <span>3 CP / 2 CP</span>
                    </div>
                    <div className={style.strat_text}>
                        Используйте эту стратегию на <span className={style.strat_text_bold}>этапе передвижения</span>.
                        До конца хода, каждый раз, когда модель боевого костюма в этом подразделении совершает дальнюю
                        атаку, вы можете повторно выполнить бросок удара и бросок ранения. Если этот юнит содержит 4 или
                        более моделей боевых скафандров, эта стратегия стоит 3 CP; в противном случае она стоит 2 CP.
                    </div>
                </div>

                <div className={style.strat}>
                    <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                        <span>DYNAMIC OFFENSIVE</span>
                        <span>1 CP</span>
                    </div>
                    <div className={style.strat_text}>
                        Используйте эту стратегию на <span className={style.strat_text_bold}>этапе передвижения</span>.
                        Каждый раз, когда это подразделение продвигается вперед, не делайте бросок вперед.
                        Вместо этого, до конца фазы, добавьте 6" к характеристике перемещения моделей в этом блоке.
                        Модели в этом подразделении не подвергаются штрафу за попадание в броски из оружия Assault.
                    </div>
                </div>

                <div className={style.strat}>
                    <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                        <span>EXPERIMENTAL WEAPONRY</span>
                        <span>2 CP</span>
                    </div>
                    <div className={style.strat_text}>
                        Используйте эту стратегию на <span className={style.strat_text_bold}>этапе стрельбы</span>.
                        Выберите одну модель в подразделении и одно оружие, которым оснащена эта модель.
                        До конца фазы, каждый раз, когда эта модель совершает атаку этим оружием, неуязвимые
                        спасброски не могут быть предприняты против этой атаки.
                    </div>
                </div>

                <div className={style.strat}>
                    <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                        <span>SAVIOUR PROTOCOLS</span>
                        <span>1 CP</span>
                    </div>
                    <div className={style.strat_text}>
                        Используйте эту стратегию на <span className={style.strat_text_bold}>любом этапе</span>,
                        когда спасбросок не удался. Вместо атаки по основной модели, уберите дроны.
                    </div>
                </div>

                <div className={style.strat}>
                    <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                        <span>FAIL-SAFE DETONATOR</span>
                        <span>1 CP</span>
                    </div>
                    <div className={style.strat_text}>
                        Используйте эту стратегию на <span className={style.strat_text_bold}>любой фазе</span>,
                        когда модель боевого костюма из вашей армии будет уничтожена. Прежде чем удалить эту
                        модель из игры, вместо использования каких-либо правил, которые срабатывают при уничтожении
                        этой модели, бросьте по одному D6 для каждого юнита в пределах 3" от этой модели, добавив
                        1 к броску, если у уничтоженной модели характеристика ран 12 или более: на 3-5, этот юнит
                        получает D3 смертельных ранения; на 6+, этот юнит получает 3 смертельных ранения.
                    </div>
                </div>

                <div className={style.strat}>
                    <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                        <span>OUTFLANK</span>
                        <span>1 CP</span>
                    </div>
                    <div className={style.strat_text}>
                        Используйте эту стратегию в <span className={style.strat_text_bold}>конце фазы передвижения</span>.
                        Вы можете убрать ваш отряд с поля в резерв, если он находится в 9" от края поля.
                    </div>
                </div>

                <div className={style.strat}>
                    <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                        <span>ORBITAL UPLINK</span>
                        <span>1 CP</span>
                    </div>
                    <div className={style.strat_text}>
                        Используйте эту стратегию на <span className={style.strat_text_bold}>этапе стрельбы</span>.
                        Выберите одного вражеского юнита. До конца фазы, каждый раз, когда модель в подразделении
                        SA'CEA из вашей армии совершает дальнюю атаку против этого вражеского подразделения,
                        цель не получает преимуществ прикрытия от этой атаки.
                    </div>
                </div>

                <div className={style.strat}>
                    <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                        <span>COORDINATED ENGAGEMENT</span>
                        <span>1 CP</span>
                    </div>
                    <div className={style.strat_text}>
                        Используйте эту стратегию на <span className={style.strat_text_bold}>этапе стрельбы</span>.
                        Выберите одного вражеского юнита. До конца фазы, каждый раз, когда модель в подразделении
                        SA'CEA из вашей армии совершает дальнюю атаку против этого вражеского подразделения,
                        цель не получает преимуществ прикрытия от этой атаки.
                    </div>
                </div>

                <div className={style.strat}>
                    <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                        <span>DESIGNATED TASKING</span>
                        <span>1 CP</span>
                    </div>
                    <div className={style.strat_text}>
                        Используйте эту стратегию на этапе <span className={style.strat_text_bold}>вашего командования</span>.
                        Вы можете разделить ваш отряд на 2, где содержаться дроны. Все дроны входят в новый отдельный отряд
                    </div>
                </div>

                <div className={style.strat}>
                    <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                        <span>STRIKE AND FADE</span>
                        <span>1 CP / 2 CP</span>
                    </div>
                    <div className={style.strat_text}>
                        Используйте эту стратегию в начале вашей <span className={style.strat_text_bold}>фазы стрельбы</span>.
                        Выберите отряд с реактивным ранцем. Вы можете стрелять с помощью этого устройства, и тогда
                        оно может совершать нормальное движение до 6 дюймов. Это устройство не может стрелять снова
                        на этом этапе. Если это подразделение содержит 5 или меньше моделей (исключая модели дронов),
                        эта стратегия стоит 1 CP.
                    </div>
                </div>

                <div className={style.strat}>
                    <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                        <span>REPULSOR IMPACT FIELD</span>
                        <span>1 CP</span>
                    </div>
                    <div className={style.strat_text}>
                        Используйте эту стратегию на этапе <span className={style.strat_text_bold}>атаки вашего противника</span>,
                        когда в качестве цели атаки выбирается боекостюм из вашей армии. До конца фазы вычтите 2 из бросков
                        заряда.
                    </div>
                </div>

                <div className={style.strat}>
                    <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                        <span>IONISED SHOCKFIELD</span>
                        <span>2 CP</span>
                    </div>
                    <div className={style.strat_text}>
                        Используйте эту стратегию на <span className={style.strat_text_bold}>этапе стрельбы</span>,
                        когда модель во вражеском подразделении уничтожена в результате атаки, произведенной ионным
                        оружием моделью SEPT из вашей армии. До начала вашей следующей фазы стрельбы на этот вражеский
                        юнит не влияют способности ауры других вражеских юнитов.
                    </div>
                </div>

            </section>
        </section >
    )
}

export { SupportTurret }