import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Orkboyz from "../../../assets/Orks/Ork Boyz.png";

import {
    Slugga, Big_shoota, Kombi_rok_R, Kombi_rok_S, Rokkit_launcha,
    Kombi_skorcha_S, Kombi_skorcha_Sh, Shoota, Big_choppa, Choppa,
    Killsaw, Power_klaw, Power_stabba, Stikkbombz
} from "../OrksWeapon";

import {
    GOTEM_TRAPPED, UNBRIDLED_CARNAGE, SHOWIN_OFF, GET_STUCK_IN_LADZ,
    BREAKIN_HEADS, SPESHUL_AMMO, WRECKAZ, DED_SNEAKY, GET_DA_LOOT,
    TIDE_OF_MUSCLE, GROT_SHIELDS, MORE_DAKKA, TANKBUSTA_BOMB
} from "../OrksStrat";

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
import location from "../../../assets/icons/location.png";

const OrkBoyz = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={Orkboyz} alt="OrkBoyz" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>5"</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={WS} alt="WS" className={style.param_img} />
                        <div className={style.param_number}>3+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={BS} alt="BS" className={style.param_img} />
                        <div className={style.param_number}>5+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={S} alt="S" className={style.param_img} />
                        <div className={style.param_number}>4</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={T} alt="T" className={style.param_img} />
                        <div className={style.param_number}>5</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>1</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>2</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Ld} alt="Ld" className={style.param_img} />
                        <div className={style.param_number}>6</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Sv} alt="Sv" className={style.param_img} />
                        <div className={style.param_number}>6+</div>
                    </div>
                </div>
            </section >

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Slugga />
                    <Big_shoota />
                    <Kombi_rok_R />
                    <Kombi_rok_S />
                    <Rokkit_launcha />
                    <Kombi_skorcha_S />
                    <Kombi_skorcha_Sh />
                    <Shoota />
                    <Big_choppa />
                    <Choppa />
                    <Killsaw />
                    <Power_klaw />
                    <Power_stabba />
                    <Stikkbombz />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <GOTEM_TRAPPED />
                <UNBRIDLED_CARNAGE />
                <SHOWIN_OFF />
                <GET_STUCK_IN_LADZ />
                <BREAKIN_HEADS />
                <SPESHUL_AMMO />
                <WRECKAZ />
                <DED_SNEAKY />
                <GET_DA_LOOT />
                <TIDE_OF_MUSCLE />
                <GROT_SHIELDS />
                <MORE_DAKKA />
                <TANKBUSTA_BOMB />
            </section>
        </section >
    )
}

export { OrkBoyz }