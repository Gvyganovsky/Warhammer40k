import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import GunDrones from "../../../assets/TauEmpire/Gun Drone.jpg";

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

const GunDrone = () => {
    return (
        <div>
            <section className={style.content}>
                <img src={GunDrones} alt="Gun Drone" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_three}>
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
                    </div>

                    <div className={style.combat_unit_param_three}>
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
                    </div>

                    <div className={style.combat_unit_param_three}>
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
        </div>
    )
}

export { GunDrone }