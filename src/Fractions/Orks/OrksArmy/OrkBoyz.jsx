import style from "../../../scss/CombatUnit.module.scss";
import Orkboyz from "../../../assets/Orks/Ork Boyz.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";

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

export const OrkBoyz = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={Orkboyz}
                M='5"' WS='3+' BS='5+' S='4' T='5' W='1' A='2' Ld='6' Sv='6+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Slugga /> <Big_shoota />
                    <Kombi_rok_R /> <Kombi_rok_S /> <Rokkit_launcha />
                    <Kombi_skorcha_S /> <Kombi_skorcha_Sh /> <Shoota />
                    <Big_choppa />  <Choppa /> <Killsaw />
                    <Power_klaw /> <Power_stabba /> <Stikkbombz />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <GOTEM_TRAPPED /> <UNBRIDLED_CARNAGE /> <SHOWIN_OFF />
                <GET_STUCK_IN_LADZ /> <BREAKIN_HEADS /> <SPESHUL_AMMO />
                <WRECKAZ /> <DED_SNEAKY /> <GET_DA_LOOT />
                <TIDE_OF_MUSCLE /> <GROT_SHIELDS /> <MORE_DAKKA /> <TANKBUSTA_BOMB />
            </section>
        </section >
    )
}