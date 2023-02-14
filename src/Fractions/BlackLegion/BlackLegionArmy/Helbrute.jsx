import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import helbrute from "../../../assets/BlackLegion/Helbrute.png";

import {
    Combi_bolter, Heavy_flamer, Helbrute_plasma_cannon, Missile_launcher_F, Missile_launcher_K,
    Multi_melta, Reaper_autocannon, Twin_heavy_bolter, Twin_lascannon, Helbrute_fist, Helbrute_hammer,
    Power_scourge
} from "../BlackLegionWeapon";

import {
    DEATH_TO_THE_FALSE_EMPEROR, FURY_OF_KHORNE, GRANDFATHERS_BLESSINGS, HATRED_ETERNAL,
    MURDEROUS_PERFECTION
} from "../BlackLegionStrat";

import M from "../../../assets/icons/M.png";
import WS from "../../../assets/icons/WS.png";
import BS from "../../../assets/icons/BS.png";
import S from "../../../assets/icons/S.png";
import T from "../../../assets/icons/T.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";
import Ld from "../../../assets/icons/Ld.png";
import Sv from "../../../assets/icons/Sv.png";

const Helbrute = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={helbrute} alt="Helbrute" className={style.combat_unit_img} />
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
                        <div className={style.param_number}>6</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={T} alt="T" className={style.param_img} />
                        <div className={style.param_number}>7</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>8</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>5</div>
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
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Combi_bolter />
                    <Heavy_flamer/>
                    <Helbrute_plasma_cannon />
                    <Missile_launcher_F />
                    <Missile_launcher_K />
                    <Multi_melta />
                    <Reaper_autocannon />
                    <Twin_heavy_bolter />
                    <Twin_lascannon />
                    <Helbrute_fist />
                    <Helbrute_hammer />
                    <Power_scourge />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <DEATH_TO_THE_FALSE_EMPEROR />
                <FURY_OF_KHORNE />
                <GRANDFATHERS_BLESSINGS />
                <HATRED_ETERNAL />
                <MURDEROUS_PERFECTION />
            </section>
        </section >
    )
}

export { Helbrute }