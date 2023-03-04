
import style from "../../../scss/CombatUnit.module.scss";
import windriders from "../../../assets/Aeldari/Windriders.png";

import { ParametersBlock } from "../../../Components/ParametersBlock";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Scatter_laser, Shuriken_cannon, Twin_shuriken_catapult
} from "../AeldariWeapon";

import {
    DISCIPLINE_OF_THE_BLACK_GUARDIANS, WARRIORS_OF_THE_RAGING_WINDS, INEXHAUSTIBLE_HATRED, THE_GREAT_ENEMY,
    MATCHLESS_AGILITY, LIGHTNING_FAST_REACTIONS, BLADESTORM, MARTIAL_CITIZENRY, DEFIANT_TO_THE_LAST,
    FEIGNED_RETREAT, FOREWARNED, FIRE_AND_FADE, PHANTASM, WEBWAY_STRIKE, THRICE_LAYERED_WARDS
} from "../AeldariStrat";

import location from "../../../assets/icons/location.png";
import A from "../../../assets/icons/A.png";

export const Windriders = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={windriders}
                M='16"' WS='3+' BS='3+' S='3' T='4' W='2' A='1' Ld='7' Sv='3+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Scatter_laser /> <Shuriken_cannon />
                    <Twin_shuriken_catapult />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Ride the Wind' AbNum='6"' AbIcon={location}
                    AbText='Каждый раз, когда этот юнит продвигается вперед, не делайте опережающий бросок.
                    Вместо этого, до конца этапа, добавьте 6" к характеристике перемещения моделей
                    в этом блоке.'/>

                <AbilitiesBlock AbTitle='Swift Demise' AbNum='4+' AbIcon={A}
                    AbText=' Модели в этом подразделении совершает атаку с помощью twin shuriken catapult
                    против вражеского подразделения, находящегося в пределах досягаемости любых маркеров
                    цели, повторно бросайте бросок попадания, равный 1.'/>
            </section>

            <section className={style.Content_block}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <DISCIPLINE_OF_THE_BLACK_GUARDIANS /> <WARRIORS_OF_THE_RAGING_WINDS />
                <INEXHAUSTIBLE_HATRED /> <THE_GREAT_ENEMY />
                <MATCHLESS_AGILITY /> <LIGHTNING_FAST_REACTIONS />
                <BLADESTORM /> <MARTIAL_CITIZENRY />
                <DEFIANT_TO_THE_LAST /> <FEIGNED_RETREAT />
                <FOREWARNED /> <FIRE_AND_FADE /> <PHANTASM />
                <WEBWAY_STRIKE /> <THRICE_LAYERED_WARDS />
            </section>
        </section >
    )
}