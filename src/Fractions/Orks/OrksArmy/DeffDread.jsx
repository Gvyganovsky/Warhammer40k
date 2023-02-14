import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import deffDread from "../../../assets/Orks/Deff Dread.png";

import {
    Big_shoota, Kustom_mega_blasta, Rokkit_launcha, Skorcha,
    Dread_klaw
} from "../OrksWeapon";

import {
    GOTEM_TRAPPED, CAREEN, RAMMING_SPEED, BREAKIN_HEADS, TELLYPORTA,
    MORE_DAKKA
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

import question from "../../../assets/icons/question.png";
import skull from "../../../assets/icons/skull.png";

const DeffDread = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={deffDread} alt="DeffDread" className={style.combat_unit_img} />
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
                        <div className={style.param_number}>5+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={S} alt="S" className={style.param_img} />
                        <div className={style.param_number}>5</div>
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
                        <div className={style.param_number}>3</div>
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
                    <Big_shoota />
                    <Kustom_mega_blasta />
                    <Rokkit_launcha />
                    <Skorcha />
                    <Dread_klaw />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>
                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Explodes</div>
                        <div className={style.block_symbol}>
                            <div className={style.abilities_title}>+1</div>
                            <img src={skull} alt="skull" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Каждый раз, когда модель в этом блоке уничтожается, бросайте 1D6, прежде чем удалять ее
                        из игры. На 6 он взрывается, и каждый юнит в пределах 3" получает 1 смертельное ранение.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Dread Mob</div>
                        <div className={style.block_symbol}>
                            <img src={question} alt="question" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        После того, как этот юнит будет впервые установлен на поле боя, если у этого
                        юнита более 1 модели, все модели в этом юните должны быть установлены в пределах
                        6" от другой модели из этого юнита. После того, как они настроены в первый раз,
                        каждая модель рассматривается как отдельный юнит.
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <GOTEM_TRAPPED />
                <CAREEN />
                <RAMMING_SPEED />
                <BREAKIN_HEADS />
                <TELLYPORTA />
                <MORE_DAKKA />
            </section>
        </section >
    )
}

export { DeffDread }