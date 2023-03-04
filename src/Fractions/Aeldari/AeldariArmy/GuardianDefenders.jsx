import style from "../../../scss/CombatUnit.module.scss";
import Guardiandefenders from "../../../assets/Aeldari/Guardian Defenders.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Aeldari_mis_Sn, Aeldari_mis_S, Bright_lance, Scatter_laser, Shuriken_cannon,
    Shuriken_catapult, Starcannon, Plasma_grenade
} from "../AeldariWeapon";

import {
    DISCIPLINE_OF_THE_BLACK_GUARDIANS, INEXHAUSTIBLE_HATRED, THE_GREAT_ENEMY, MATCHLESS_AGILITY,
    LIGHTNING_FAST_REACTIONS, BLADESTORM, MARTIAL_CITIZENRY, DEFIANT_TO_THE_LAST, FEIGNED_RETREAT,
    FIRE_AND_FADE, PHANTASM, WEBWAY_STRIKE, WITHERING_VOLLEYS, THRICE_LAYERED_WARDS, STARHAWK_MISSILE
} from "../AeldariStrat";

import question from "../../../assets/icons/question.png";
import hit from "../../../assets/icons/hit.svg";

export const GuardianDefenders = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={Guardiandefenders}
                M='7"' WS='3+' BS='3+' S='3' T='3' W='1' A='1' Ld='7' Sv='4+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Aeldari_mis_Sn /> <Aeldari_mis_S />
                    <Bright_lance /> <Scatter_laser /> 
                    <Shuriken_cannon /> <Shuriken_catapult />
                    <Starcannon /> <Plasma_grenade />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Defenders' AbNum='1' AbIcon={hit}
                    AbText='Пока этот юнит находится в пределах досягаемости прицельного маркера, 
                    каждый раз, когда модель в этом юните совершает дальнюю атаку сюрикеновым оружием, 
                    повторно бросайте бросок попадания, равный 1.'/>

                <AbilitiesBlock AbTitle='Crewed Platform' AbNum='4+' AbIcon={question}
                    AbText='Когда последняя модель в этом подразделении уничтожается, все оставшиеся 
                    модели heavy Weapon Platform в этом подразделении также уничтожаются. Модели heavy
                    Weapon Platform не учитываются при определении начальной численности подразделения 
                    или того, является ли это подразделение менее чем наполовину укомплектованным. 
                    Уничтожение heavy Weapon Platform игнорируется в целях проверки морального духа.'/>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <DISCIPLINE_OF_THE_BLACK_GUARDIANS /> <INEXHAUSTIBLE_HATRED />
                <THE_GREAT_ENEMY /> <MATCHLESS_AGILITY />
                <LIGHTNING_FAST_REACTIONS /> <BLADESTORM />
                <MARTIAL_CITIZENRY /> <DEFIANT_TO_THE_LAST />
                <FEIGNED_RETREAT /> <FIRE_AND_FADE />
                <PHANTASM /> <WEBWAY_STRIKE /> <WITHERING_VOLLEYS />
                <THRICE_LAYERED_WARDS /> <STARHAWK_MISSILE />
            </section>
        </section >
    )
}