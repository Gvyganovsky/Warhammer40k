import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Guardiandefenders from "../../../assets/Aeldari/Guardian Defenders.png";

import {
    Aeldari_mis_Sn, Aeldari_mis_S, Bright_lance, Scatter_laser, Shuriken_cannon,
    Shuriken_catapult, Starcannon, Plasma_grenade
} from "../AeldariWeapon";

import {
    DISCIPLINE_OF_THE_BLACK_GUARDIANS, INEXHAUSTIBLE_HATRED, THE_GREAT_ENEMY, MATCHLESS_AGILITY,
    LIGHTNING_FAST_REACTIONS, BLADESTORM, MARTIAL_CITIZENRY, DEFIANT_TO_THE_LAST, FEIGNED_RETREAT,
    FIRE_AND_FADE, PHANTASM, WEBWAY_STRIKE, WITHERING_VOLLEYS, THRICE_LAYERED_WARDS, STARHAWK_MISSILE
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

import question from "../../../assets/icons/question.png";
import hit from "../../../assets/icons/hit.svg";

const GuardianDefenders = () => {
    return (
        <section>
            <section className={style.content}>
                <img src={Guardiandefenders} alt="Guardian Defenders" className={style.combat_unit_img} />
                <div className={style.combat_unit_param}>
                    <div className={style.combat_unit_param_block}>
                        <img src={M} alt="M" className={style.param_img} />
                        <div className={style.param_number}>7"</div>
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
                        <div className={style.param_number}>3</div>
                    </div>

                    <div className={style.combat_unit_param_block}>
                        <img src={W} alt="W" className={style.param_img} />
                        <div className={style.param_number}>1</div>
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
                        <div className={style.param_number}>4+</div>
                    </div>
                </div>
            </section >

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Aeldari_mis_Sn />
                    <Aeldari_mis_S />
                    <Bright_lance />
                    <Scatter_laser />
                    <Shuriken_cannon />
                    <Shuriken_catapult />
                    <Starcannon />
                    <Plasma_grenade />
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Способности</div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Defenders</div>
                        <div className={style.block_symbol}>
                            <div className={style.abilities_title}>1</div>
                            <img src={hit} alt="hit" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Пока этот юнит находится в пределах досягаемости прицельного маркера, каждый раз,
                        когда модель в этом юните совершает дальнюю атаку сюрикеновым оружием, повторно
                        бросайте бросок попадания, равный 1.
                    </div>
                </div>

                <div className={style.abilities_block}>
                    <div className={style.abilities_title_block}>
                        <div className={style.abilities_title}>Crewed Platform</div>
                        <div className={style.block_symbol}>
                            <div className={style.abilities_title}>4+</div>
                            <img src={question} alt="question" className={style.abilities_symbol} />
                        </div>
                    </div>
                    <div className={style.abilities_text}>
                        Когда последняя модель в этом подразделении уничтожается, все оставшиеся модели heavy Weapon
                        Platform в этом подразделении также уничтожаются. Модели heavy Weapon Platform не учитываются
                        при определении начальной численности подразделения или того, является ли это подразделение
                        менее чем наполовину укомплектованным. Уничтожение heavy Weapon Platform игнорируется в целях
                        проверки морального духа.
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <DISCIPLINE_OF_THE_BLACK_GUARDIANS />
                <INEXHAUSTIBLE_HATRED />
                <THE_GREAT_ENEMY />
                <MATCHLESS_AGILITY />
                <LIGHTNING_FAST_REACTIONS />
                <BLADESTORM />
                <MARTIAL_CITIZENRY />
                <DEFIANT_TO_THE_LAST />
                <FEIGNED_RETREAT />
                <FIRE_AND_FADE />
                <PHANTASM />
                <WEBWAY_STRIKE />
                <WITHERING_VOLLEYS />
                <THRICE_LAYERED_WARDS />
                <STARHAWK_MISSILE />
            </section>
        </section >
    )
}

export { GuardianDefenders }