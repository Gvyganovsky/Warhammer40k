import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import deffkoptas from "../../../assets/Orks/Deffkoptas.png";

import {
    Slugga, Kopta_rokkits, Kustom_mega_blasta, Spinnin_blades,
    Stikkbombz
} from "../OrksWeapon";

import {
    GOTEM_TRAPPED, BLITZA_DAKKA, CRASHIN_THROUGH, RAMMING_SPEED, BREAKIN_HEADS,
    MORE_GITZ_OVER_ERE, ATTACK_OUT_O_DA_SUN, DRIVE_BY_DAKKA, TELLYPORTA, CLOUD_OF_SMOKE
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

const Deffkoptas = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={deffkoptas} alt="Deffkoptas" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>14"</div>
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
                        <div className={style.param_number}>4</div>
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
                        <div className={style.param_number}>4+</div>
                    </div>
                </div>
            </section >

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Slugga />
                    <Kopta_rokkits />
                    <Kustom_mega_blasta />
                    <Spinnin_blades />
                    <Stikkbombz />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Big bomb</div>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Один раз за битву, в вашей фазе передвижения, после того, как носитель
                            сделает обычный ход или продвинется вперед, вы можете выбрать одну точку
                            на поле боя, которую носитель переместил в этой фазе. Бросьте по одному
                            D6 для каждого юнита в пределах 3" от этой точки, вычитая 1, если этот юнит
                            является ПЕРСОНАЖЕМ при 4+ этот юнит получает смертельные ранения D3.
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>
                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Big Red Button</div>
                        <div className={style.block_symbol}>
                            <div className={style.abilities_title}>+1</div>
                            <img src={M} alt="M" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Каждый раз, когда этот юнит продвигается вперед, не делайте бросок на рывок.
                        Вместо этого, до конца фазы, добавьте 6" к характеристике перемещения модели
                        в этом блоке.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Swoopin’ Down</div>
                        <div className={style.block_symbol}>
                            <img src={location} alt="location" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Во время развертывания вы можете разместить это подразделение высоко в небе вместо 
                        того, чтобы размещать его на поле боя. Если вы это сделаете, то на этапе подкрепления 
                        одной из фаз вашего передвижения вы можете разместить это подразделение в любом месте
                         поля боя, на расстоянии более 9 дюймов от любых вражеских моделей.
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <GOTEM_TRAPPED />
                <BLITZA_DAKKA />
                <CRASHIN_THROUGH />
                <RAMMING_SPEED />
                <BREAKIN_HEADS />
                <MORE_GITZ_OVER_ERE />
                <ATTACK_OUT_O_DA_SUN />
                <DRIVE_BY_DAKKA />
                <TELLYPORTA />
                <CLOUD_OF_SMOKE />
            </section>
        </section >
    )
}

export { Deffkoptas }