import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Basiliskk from "../../../assets/AstraMilitarum/Basilisk.png";

import {
    Earthshaker_cannon, Heavy_bolter, Heavy_flamer,
    Hunter_killer_missile
} from "../AstraMilitarumWeapon";

import M from "../../../assets/icons/M.png";
import WS from "../../../assets/icons/WS.png";
import BS from "../../../assets/icons/BS.png";
import S from "../../../assets/icons/S.png";
import T from "../../../assets/icons/T.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";
import Ld from "../../../assets/icons/Ld.png";
import Sv from "../../../assets/icons/Sv.png";

import skull from "../../../assets/icons/skull.png";
import shooting from "../../../assets/icons/shooting.png";
import location from "../../../assets/icons/location.png";

const Basilisk = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={Basiliskk} alt="Basilisk" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>10"</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={WS} alt="WS" className={style.param_img} />
                        <div className={style.param_number}>6+</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={BS} alt="BS" className={style.param_img} />
                        <div className={style.param_number}>4+</div>
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
                        <div className={style.param_number}>11</div>
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
                        <div className={style.damage_nubmer}>10"</div>
                        <div className={style.damage_nubmer}>8"</div>
                        <div className={style.damage_nubmer}>6"</div>
                    </div>

                    <div className={style.damage_block}>
                        <img src={BS} alt="BS" className={style.param_img} />
                        <div className={style.damage_nubmer}>4+</div>
                        <div className={style.damage_nubmer}>5+</div>
                        <div className={style.damage_nubmer}>6+</div>
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
                    <Earthshaker_cannon />
                    <Heavy_bolter />
                    <Heavy_flamer />
                    <Hunter_killer_missile />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Dozer blade</div>
                            <img src={location} alt="location" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Если носитель имеет DOZER BLADE, то может игнорировать любые или
                            все модификаторы к его характеристике перемещения, передовым роликам
                            и загрузочным роликам.
                        </div>
                    </div>

                    <div className={style.weaponOther_block}>
                        <div className={style.abilities_title_block}>
                            <div className={style.abilities_title}>Armoured tracks</div>
                            <img src={shooting} alt="shooting" className={style.abilities_symbol} />
                        </div>
                        <div className={style.weaponOther_text}>
                            Если носитель получает ключевое слово "БРОНИРОВАННЫЙ", и каждый раз, когда носителю
                            назначается дальняя атака с характеристикой урона, равной 1, добавляйте 1 к спасброску
                            брони, сделанному против этой атаки.
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>
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
        </section >
    )
}

export { Basilisk }