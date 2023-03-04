
import style from "../../../scss/CombatUnit.module.scss";
import spiritseer from "../../../assets/Aeldari/Spiritseer.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Shuriken_pistol, Witch_staff
} from "../AeldariWeapon";

import {
    INEXHAUSTIBLE_HATRED, THE_GREAT_ENEMY, MATCHLESS_AGILITY, LIGHTNING_FAST_REACTIONS,
    BLADESTORM, DEFIANT_TO_THE_LAST, CHAMPION_OF_THE_AELDARI, TREASURES_OF_THE_AELDARI, WEBWAY_STRIKE,
    PHANTASM, FIRE_AND_FADE, FOREWARNED, FEIGNED_RETREAT, GUIDED_WRAITHSIGHT, THRICE_LAYERED_WARDS
} from "../AeldariStrat";

import Sv from "../../../assets/icons/Sv.png";

export const Spiritseer = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={spiritseer}
                M='7"' WS='2+' BS='2+' S='3' T='3' W='4' A='2' Ld='8' Sv='6+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Shuriken_pistol /> <Witch_staff />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Rune Armour</div>
                <AbilitiesBlock AbTitle='Defenders' AbNum='4+' AbIcon={Sv}
                    AbText='Эта модель обладает неуязвимым сейвом 4+.' />

                <AbilitiesBlock AbTitle='Spirit Mark (Aura)' AbNum='1' AbIcon={Sv}
                    AbText='В то время как дружественный основной отряд находится в пределах 6"
                     от этой модели, каждый раз, когда модель в этом отряде совершает атаку, 
                     повторно бросайте 1 бросок раны.' />
            </section>

            <section className={style.Content_block}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <INEXHAUSTIBLE_HATRED /> <THE_GREAT_ENEMY />
                <MATCHLESS_AGILITY /> <LIGHTNING_FAST_REACTIONS />
                <BLADESTORM /> <DEFIANT_TO_THE_LAST />
                <CHAMPION_OF_THE_AELDARI /> <TREASURES_OF_THE_AELDARI />
                <WEBWAY_STRIKE /> <PHANTASM /> <FIRE_AND_FADE />
                <FOREWARNED /> <FEIGNED_RETREAT /> <GUIDED_WRAITHSIGHT />
                <THRICE_LAYERED_WARDS />
            </section>
        </section >
    )
}