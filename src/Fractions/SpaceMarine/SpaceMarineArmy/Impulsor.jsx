import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import impulsor from "../../../assets/SpaceMarine/Impulsor.png";

import {
    Krak_missiles, Frag_missiles, Icarus_missiles, Fragstorm_grenade_launcher,
    Ironhail_heavy_stubber, Ironhail_skytalon_array, Storm_bolter
} from "../SpaceMarineWeapon";

import {
    OCULAR_NETWORKING, ARMOUR_OF_CONTEMPT, DISPERSAL_PROTOCOLS,
    TACTICAL_AUGURY, GRAV_PULSE
} from "../SpaceMarineStrat";

import M from "../../../assets/icons/M.png";
import WS from "../../../assets/icons/WS.png";
import BS from "../../../assets/icons/BS.png";
import S from "../../../assets/icons/S.png";
import T from "../../../assets/icons/T.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";
import Ld from "../../../assets/icons/Ld.png";
import Sv from "../../../assets/icons/Sv.png";

import question from "../../../assets/icons/question.png";
import skull from "../../../assets/icons/skull.png";
import general from "../../../assets/icons/general.png";

const Impulsor = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={impulsor} alt="Impulsor" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>14"</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={WS} alt="WS" className={style.param_img} />
                        <div className={style.param_number}>6+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={BS} alt="BS" className={style.param_img} />
                        <div className={style.param_number}>3+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={S} alt="S" className={style.param_img} />
                        <div className={style.param_number}>7</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={T} alt="T" className={style.param_img} />
                        <div className={style.param_number}>7</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>11</div>
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
                        <div className={style.param_number}>3+</div>
                    </div>
                </div>
            </section >

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Изменение характеристик от урона</div>
                <div className={style.damage_content}>
                    <div className={style.damage_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.damage_nubmer}>6-11</div>
                        <div className={style.damage_nubmer}>3-5</div>
                        <div className={style.damage_nubmer}>1-2</div>
                    </div>

                    <div className={style.damage_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.damage_nubmer}>14"</div>
                        <div className={style.damage_nubmer}>7"</div>
                        <div className={style.damage_nubmer}>4"</div>
                    </div>

                    <div className={style.damage_block}>
                        <img src={BS} alt="BS" className={style.param_img} />
                        <div className={style.damage_nubmer}>3+</div>
                        <div className={style.damage_nubmer}>4+</div>
                        <div className={style.damage_nubmer}>5+</div>
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
                    <Krak_missiles />
                    <Frag_missiles />
                    <Icarus_missiles />
                    <Fragstorm_grenade_launcher />
                    <Ironhail_heavy_stubber />
                    <Ironhail_skytalon_array />
                    <Storm_bolter />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Orbital comms array</div>
                            <img src={general} alt="general" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            На этапе вашего командования одна модель из вашей армии с орбитальной системой связи,
                            которая не использовалась в этом сражении, может использовать ее для вызова орбитального
                            заградительного огня. Если это произойдет, выберите одну точку на поле боя и бросьте по
                            одному D6 для каждого юнита в пределах D6" от этой точки, вычитая 1 из результата, если
                            юнит, для которого выполняется бросок, является ПЕРСОНАЖЕМ. На 4+ этот юнит получает
                            смертельные ранения D3.
                        </div>
                    </div>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Shield dome</div>
                            <img src={Sv} alt="Sv" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            У носителя есть 5+ неуязвимых сейвов.
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>
                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Assault Vehicle</div>
                        <div className={style.block_symbol}>
                            <img src={question} alt="question" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Подразделения, находящиеся на борту этого транспорта, могут высадиться,
                        даже если на этом этапе он совершил обычное перемещение. Любой юнит, который
                        высаживается после того, как этот транспорт совершил обычный ход, не может
                        атаковать в этот ход.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Hover Tank</div>
                        <div className={style.block_symbol}>
                            <img src={question} alt="question" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Расстояния всегда измеряются до корпуса этой модели и от него.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Explodes</div>
                        <div className={style.block_symbol}>
                            <img src={skull} alt="skull" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Каждый раз, когда модель в этом блоке уничтожается, бросайте 1D6, прежде чем удалять ее
                        из игры. На 6 он взрывается, и каждый юнит в пределах 3" получает 1 смертельное ранение.
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <OCULAR_NETWORKING />
                <ARMOUR_OF_CONTEMPT />
                <DISPERSAL_PROTOCOLS />
                <TACTICAL_AUGURY />
                <GRAV_PULSE />
            </section>
        </section >
    )
}

export { Impulsor }