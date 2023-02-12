import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Primarispsyker from "../../../assets/AstraMilitarum/Primaris Psyker.png";

import {
    Laspistol, Force_stave
} from "../AstraMilitarumWeapon";

import {
    OFFICER_CADRE, IMPERIAL_COMMANDERS_ARMOURY, ACCEPTABLE_LOSSES, VICIOUS_TRAPS,
    SHIELD_OF_FLESH
} from "../AstraMilitarumStrat";

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
import location from "../../../assets/icons/location.png";
import question from "../../../assets/icons/question.png";

const PrimarisPsyker = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={Primarispsyker} alt="PrimarisPsyker" className={style.combat_unit_img} />
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
                        <div className={style.param_number}>5+</div>
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Laspistol />
                    <Force_stave />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Заклинания</div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>TERRIFYING VISIONS</div>
                        <div className={style.block_symbol}>
                            <img src={morale} alt="morale" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Выберите одного вражеского юнита в радиусе 18". До начала вашей следующей командной фазы:
                        Вычтите 2 из характеристики лидерства моделей в этом подразделении. Ваш противник не может
                        выбрать это подразделение для стратегии Безумной храбрости, а также не может использовать
                        какое-либо правило, которое позволило бы ему повторно провести тест на моральный дух,
                        проведенный для этого подразделения. Кроме того, бросок 2D6: если результат равен или
                        превышает характеристику лидерства этого юнита (после применения модификатора выше),
                        любое действие, которое юнит выполняет в данный момент, немедленно завершается неудачей,
                        и до начала вашей следующей психической фазы этот юнит не может выполнять действия.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>GAZE OF THE EMPEROR</div>
                        <div className={style.block_symbol}>
                            <div className={style.symbol_text}>1 / D3</div>
                            <img src={W} alt="W" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Ведьмин огонь: Взгляд Императора имеет значение варп-заряда 6. Если проявлено,
                        выберите одну модель врага в пределах 12 дюймов от этого ПСАЙКЕРА и сделайте
                        ее видимой для него. Проведите прямую линию между любой частью основания этой
                        модели (или корпуса) и основанием этого ПСАЙКЕРА. Бросьте один D6 для юнита
                        этой вражеской модели и по одному D6 для каждого другого юнита, через который
                        проходит эта линия: на 1-5, юнит, для которого выполняется бросок, получает 1
                        смертельное ранение; на 6, юнит, для которого выполняется бросок, получает D3
                        смертельных ранения.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>PSYCHIC BARRIER</div>
                        <div className={style.block_symbol}>
                            <div className={style.symbol_text}>5+</div>
                            <img src={Sv} alt="Sv" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Благословение: Психический барьер имеет значение варп-заряда 6. Если проявится,
                        выберите одно дружественное подразделение ASTRA MILITARUM в радиусе 12 дюймов
                        от этого ПСАЙКЕРА. До начала вашей следующей фазы экстрасенсорики модели в
                        этом подразделении имеют запас неуязвимости 5+.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>NIGHTSHROUD</div>
                        <div className={style.block_symbol}>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Благословение: У Ночного савана значение варп-заряда равно 6. Если проявится,
                        выберите одно дружественное подразделение ASTRA MILITARUM в радиусе 12"
                        от этого ПСАЙКЕРА. Вы не можете выбрать ТИТАНИЧЕСКУЮ единицу, если результатом
                        психического теста не было неизмененное значение 11+. До начала вашей следующей
                        психической фазы, каждый раз, когда производится атака против этого юнита,
                        неизмененный бросок удара 1-3 всегда терпит неудачу, независимо от каких-либо
                        способностей, которыми может обладать оружие или модель, производящая атаку.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>MENTAL SHACKLES</div>
                        <div className={style.block_symbol}>
                            <div className={style.symbol_text}>2"</div>
                            <img src={location} alt="location" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Проклятие: Ментальные кандалы имеют значение варп-заряда 6. Если проявится,
                        выберите одного вражеского юнита в радиусе 18 дюймов от этого ПСАЙКЕРА. До
                        начала вашей следующей психической фазы:
                        Вычтите 2" из характеристики перемещения моделей в этом блоке.
                        Вычтите 2 из предварительных и загрузочных роликов, сделанных для этого устройства.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>PSYCHIC MAELSTROM</div>
                        <div className={style.block_symbol}>
                            <img src={question} alt="question" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Ведьмин огонь: Психический водоворот имеет значение варп-заряда 6. Если проявлено,
                        бросьте число D6, равное результату психического теста: за каждые 5+ ближайший
                        вражеский юнит, который находится в пределах 18 дюймов от этого ПСАЙКЕРА и виден
                        ему, получает 1 смертельное ранение (максимум 6 смертельных ранений).
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <OFFICER_CADRE />
                <IMPERIAL_COMMANDERS_ARMOURY />
                <ACCEPTABLE_LOSSES />
                <VICIOUS_TRAPS />
                <SHIELD_OF_FLESH />
            </section>
        </section >
    )
}

export { PrimarisPsyker }