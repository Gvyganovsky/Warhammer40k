import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import spiritseer from "../../../assets/Aeldari/Spiritseer.png";

import {
    Shuriken_pistol, Witch_staff
} from "../AeldariWeapon";

import {
    INEXHAUSTIBLE_HATRED, THE_GREAT_ENEMY, MATCHLESS_AGILITY, LIGHTNING_FAST_REACTIONS,
    BLADESTORM, DEFIANT_TO_THE_LAST, CHAMPION_OF_THE_AELDARI, TREASURES_OF_THE_AELDARI, WEBWAY_STRIKE,
    PHANTASM, FIRE_AND_FADE, FOREWARNED, FEIGNED_RETREAT, GUIDED_WRAITHSIGHT, THRICE_LAYERED_WARDS
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

const Spiritseer = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={spiritseer} alt="Spiritseer" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>7"</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={WS} alt="WS" className={style.param_img} />
                        <div className={style.param_number}>2+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={BS} alt="BS" className={style.param_img} />
                        <div className={style.param_number}>2+</div>
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
                        <div className={style.param_number}>2</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={Ld} alt="Ld" className={style.param_img} />
                        <div className={style.param_number}>8</div>
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
                    <Shuriken_pistol />
                    <Witch_staff />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Rune Armour</div>
                        <div className={style.block_symbol}>
                            <div className={style.abilities_title}>4+</div>
                            <img src={Sv} alt="Sv" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Эта модель обладает неуязвимым сейвом 4+.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Spirit Mark (Aura)</div>
                        <div className={style.block_symbol}>
                            <div className={style.abilities_title}>1</div>
                            <img src={W} alt="W" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        В то время как дружественный основной отряд находится в пределах 6" от этой модели,
                        каждый раз, когда модель в этом отряде совершает атаку, повторно бросайте 1 бросок раны.
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <INEXHAUSTIBLE_HATRED />
                <THE_GREAT_ENEMY />
                <MATCHLESS_AGILITY />
                <LIGHTNING_FAST_REACTIONS />
                <BLADESTORM />
                <DEFIANT_TO_THE_LAST />
                <CHAMPION_OF_THE_AELDARI />
                <TREASURES_OF_THE_AELDARI />
                <WEBWAY_STRIKE />
                <PHANTASM />
                <FIRE_AND_FADE />
                <FOREWARNED />
                <FEIGNED_RETREAT />
                <GUIDED_WRAITHSIGHT />
                <THRICE_LAYERED_WARDS />
            </section>
        </section >
    )
}

export { Spiritseer }