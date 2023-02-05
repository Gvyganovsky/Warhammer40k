import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Riptidebattlesuit from "../../../assets/TauEmpire/Riptide Battlesuit.png";

import {
    SAVIOUR_PROTOCOLS,
    COORDINATED_ENGAGEMENT,
    ORBITAL_UPLINK,
    EXPERIMENTAL_WEAPONRY,
    BRANCHED_NOVA_CHARGE,
    FAIL_SAFE_DETONATOR,
    BACKUP_AI,
    COUNTERFIRE_DEFENCE_SYSTEM,
    STRIKE_AND_FADE,
    REPULSOR_IMPACT_FIELD,
    IONISED_SHOCKFIELD
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

import skull from "../../../assets/icons/skull.png";
import dice from "../../../assets/icons/dice.png";

const RiptideBattlesuit = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={Riptidebattlesuit} alt="Riptidebattlesuit" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>12"</div>
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
                        <div className={style.param_number}>6</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={T} alt="T" className={style.param_img} />
                        <div className={style.param_number}>7</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>14</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>6</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Ld} alt="Ld" className={style.param_img} />
                        <div className={style.param_number}>9</div>
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
                        <div className={style.damage_nubmer}>8-14</div>
                        <div className={style.damage_nubmer}>5-7</div>
                        <div className={style.damage_nubmer}>1-4</div>
                    </div>

                    <div className={style.damage_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.damage_nubmer}>12"</div>
                        <div className={style.damage_nubmer}>8"</div>
                        <div className={style.damage_nubmer}>4"</div>
                    </div>

                    <div className={style.damage_block}>
                        <img src={BS} alt="BS" className={style.param_img} />
                        <div className={style.damage_nubmer}>4+</div>
                        <div className={style.damage_nubmer}>5+</div>
                        <div className={style.damage_nubmer}>6+</div>
                    </div>

                    <div className={style.damage_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.damage_nubmer}>6</div>
                        <div className={style.damage_nubmer}>5</div>
                        <div className={style.damage_nubmer}>4</div>
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Оружие</div>

                <div className={style.weapon_content}>
                    <div className={style.weapon_block}>
                        <div className={style.weapon_title}>Fusion blaster</div>
                        <div className={style.weapon_block_info}>
                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>R</div>
                                <div className={style.weapon_text}>18"</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>As</div>
                                <div className={style.weapon_text}>1</div>
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
                                <div className={style.weapon_text}>D6</div>
                            </div>
                        </div>
                    </div>

                    <div className={style.weapon_block}>
                        <div className={style.weapon_title}>Hv burst cannon</div>
                        <div className={style.weapon_block_info}>
                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>R</div>
                                <div className={style.weapon_text}>36"</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>Hv</div>
                                <div className={style.weapon_text}>12</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>S</div>
                                <div className={style.weapon_text}>6</div>
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

                    <div className={style.weapon_blockTwo}>
                        <div className={style.weapon_title}>Ion accelerator S</div>
                        <div className={style.weapon_block_info}>
                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>R</div>
                                <div className={style.weapon_text}>72"</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>Hv</div>
                                <div className={style.weapon_text}>6</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>S</div>
                                <div className={style.weapon_text}>7</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>AP</div>
                                <div className={style.weapon_text}>-3</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>D</div>
                                <div className={style.weapon_text}>3</div>
                            </div>
                        </div>
                    </div>

                    <div className={style.weapon_blockTwo}>
                        <div className={style.weapon_title}>Ion accelerator O</div>
                        <div className={style.weapon_block_info}>
                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>R</div>
                                <div className={style.weapon_text}>72"</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>Hv</div>
                                <div className={style.weapon_text}>6</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>S</div>
                                <div className={style.weapon_text}>8</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>AP</div>
                                <div className={style.weapon_text}>-3</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>D</div>
                                <div className={style.weapon_text}>4</div>
                            </div>
                        </div>
                    </div>

                    <div className={style.weapon_block}>
                        <div className={style.weapon_title}>Plasma rifle</div>
                        <div className={style.weapon_block_info}>
                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>R</div>
                                <div className={style.weapon_text}>30"</div>
                            </div>

                            <div className={style.weapon_info}>
                                <div className={style.weapon_text}>As</div>
                                <div className={style.weapon_text}>1</div>
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
                        <div className={style.weapon_title}>Riptide fists</div>
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

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Riptide Shield Generator</div>
                        <div className={style.block_symbol}>
                            <div className={style.symbol_text}>4+</div>
                            <img src={Sv} alt="Sv" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Модель имеет 4+ неуязвимых сейва.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Explodes</div>
                        <div className={style.block_symbol}>
                            <div className={style.symbol_text}>6</div>
                            <img src={skull} alt="skull" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Когда модель будет уничтожена, бросьте 1D6: на 6 юнит взрывавется,
                        и каждый юнит в пределах 6" получает смертельные ранение D3.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Nova Reactor</div>
                        <div className={style.block_symbol}>
                            <div className={style.symbol_text}>6</div>
                            <img src={dice} alt="dice" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        На этапе командования бросьте 2D6: если результат больше, чем
                        оставшиеся раны модели, реактор сгорает и эту способность вы
                        больше не сможете использовать. Если вам повезло, то:
                        <div className={style.abilities_text}>
                            1. Nova Shield. До начала вашей следующей командной фазы,
                            каждый раз, когда эта модель теряет рану, бросайте один D6:
                            на 5+, эта рана не теряется.
                        </div>
                        <div className={style.abilities_text}>
                            2. Boost. На следующем этапе зарядки этот юнит может совершать
                            нормальное движение до 2D6". Если это произойдет, то до конца фазы
                            вы не сможете объявить charge с помощью этого устройства.
                        </div>
                        <div className={style.abilities_text}>
                            3. Nova Charge. До начала вашей следующей фазы командования, если эта
                            модель оснащена heavy burst cannon, это оружие имеет тип, характерный
                            для Heavy 16; в противном случае оба профиля ионного ускорителя этой
                            модели имеют тип, характерный для Heavy 8.
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <EXPERIMENTAL_WEAPONRY />
                <SAVIOUR_PROTOCOLS />
                <BRANCHED_NOVA_CHARGE />
                <FAIL_SAFE_DETONATOR />
                <BACKUP_AI />
                <ORBITAL_UPLINK />
                <COORDINATED_ENGAGEMENT />
                <COUNTERFIRE_DEFENCE_SYSTEM />
                <STRIKE_AND_FADE />
                <REPULSOR_IMPACT_FIELD />
                <IONISED_SHOCKFIELD />
            </section>
        </section >
    )
}

export { RiptideBattlesuit }