import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import windriders from "../../../assets/Aeldari/Windriders.png";

import {
    Scatter_laser, Shuriken_cannon, Twin_shuriken_catapult
} from "../AeldariWeapon";

import {
    DISCIPLINE_OF_THE_BLACK_GUARDIANS, WARRIORS_OF_THE_RAGING_WINDS, INEXHAUSTIBLE_HATRED, THE_GREAT_ENEMY,
    MATCHLESS_AGILITY, LIGHTNING_FAST_REACTIONS, BLADESTORM, MARTIAL_CITIZENRY, DEFIANT_TO_THE_LAST,
    FEIGNED_RETREAT, FOREWARNED, FIRE_AND_FADE, PHANTASM, WEBWAY_STRIKE, THRICE_LAYERED_WARDS
} from "../AeldariStrat";

import M from "../../../assets/icons/M.png";
import WS from "../../../assets/icons/WS.png";
import BS from "../../../assets/icons/BS.png";
import S from "../../../assets/icons/S.png";
import T from "../../../assets/icons/T.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";
import Ld from "../../../assets/icons/Ld.png";
import Sv from "../../../assets/icons/Sv.png";

import location from "../../../assets/icons/location.png";

const Windriders = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={windriders} alt="Windriders" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>16"</div>
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
                        <div className={style.param_number}>4</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>2</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={A} alt="A" className={style.param_img} />
                        <div className={style.param_number}>1</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Ld} alt="Ld" className={style.param_img} />
                        <div className={style.param_number}>7</div>
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
                    <Scatter_laser />
                    <Shuriken_cannon />
                    <Twin_shuriken_catapult />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Ride the Wind</div>
                        <div className={style.block_symbol}>
                            <div className={style.abilities_title}>6"</div>
                            <img src={location} alt="location" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Каждый раз, когда этот юнит продвигается вперед, не делайте опережающий бросок.
                        Вместо этого, до конца этапа, добавьте 6" к характеристике перемещения моделей
                        в этом блоке.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Swift Demise</div>
                        <div className={style.block_symbol}>
                            <div className={style.abilities_title}>4+</div>
                            <img src={A} alt="A" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Модели в этом подразделении совершает атаку с помощью twin shuriken catapult
                        против вражеского подразделения, находящегося в пределах досягаемости любых маркеров
                        цели, повторно бросайте бросок попадания, равный 1.
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <DISCIPLINE_OF_THE_BLACK_GUARDIANS />
                <WARRIORS_OF_THE_RAGING_WINDS />
                <INEXHAUSTIBLE_HATRED />
                <THE_GREAT_ENEMY />
                <MATCHLESS_AGILITY />
                <LIGHTNING_FAST_REACTIONS />
                <BLADESTORM />
                <MARTIAL_CITIZENRY />
                <DEFIANT_TO_THE_LAST />
                <FEIGNED_RETREAT />
                <FOREWARNED />
                <FIRE_AND_FADE />
                <PHANTASM />
                <WEBWAY_STRIKE />
                <THRICE_LAYERED_WARDS />
            </section>
        </section >
    )
}

export { Windriders }