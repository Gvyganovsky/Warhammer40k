
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

import question from "../../../assets/icons/question.png";
import morale from "../../../assets/icons/morale.png";

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

                <div className={style.weapon_content}>
                    <div className={style.block_text_weapon}>
                        <div className={style.weapon_block}>
                            <div className={style.weapon_title}>Smart missile syst</div>
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
                        <div className={style.weapon_info_text}>*Может поражать юнитов, которые не видны владельцу.</div>
                    </div>

                    <div className={style.block_text_weapon}>
                        <div className={style.weapon_block}>
                            <div className={style.weapon_title}>Missile pod</div>
                            <div className={style.weapon_block_info}>
                                <div className={style.weapon_info}>
                                    <div className={style.weapon_text}>R</div>
                                    <div className={style.weapon_text}>37"</div>
                                </div>

                                <div className={style.weapon_info}>
                                    <div className={style.weapon_text}>As</div>
                                    <div className={style.weapon_text}>2</div>
                                </div>

                                <div className={style.weapon_info}>
                                    <div className={style.weapon_text}>S</div>
                                    <div className={style.weapon_text}>7</div>
                                </div>

                                <div className={style.weapon_info}>
                                    <div className={style.weapon_text}>AP</div>
                                    <div className={style.weapon_text}>-1</div>
                                </div>

                                <div className={style.weapon_info}>
                                    <div className={style.weapon_text}>D</div>
                                    <div className={style.weapon_text}>D3</div>
                                </div>
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
                        <div className={style.abilities_title}>Support Turret</div>
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
                        <div className={style.abilities_title}>Support Turret</div>
                        <div className={style.block_symbol}>
                            <img src={question} alt="question" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Модель не занимает места при транспортировке.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Support Turret</div>
                        <div className={style.block_symbol}>
                            <img src={question} alt="question" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        При перемещении вы можете убрать этого юнита с поле боя (модель не считается уничтожанной).
                        На этапе вашего командования любой ваш отряд может начать развертывать этого юнита.
                        Действие завершается в конце вашей следующей фазы движения.
                    </div>
                </div>
            </section>
        </section >
    )
}

export { SupportTurret }