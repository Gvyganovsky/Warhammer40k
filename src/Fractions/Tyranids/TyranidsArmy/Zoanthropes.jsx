import style from "../../../scss/CombatUnit.module.scss";
import zoanthropes from "../../../assets/Tyranids/Zoanthropes.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { DamageBlock } from "../../../Components/DamageBlock";
import { WeaponOther } from "../../../Components/WeaponOther";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    UNPARALLELED_FEROCITY, OPPORTUNISTIC_ADVANCE, COMBINED_ASSAULT, CRITICAL_MASS,
    THE_DEEPEST_SHADOW, SYNAPTIC_DOMINATION, SYNAPTIC_CHANNELLING, BURIED_IN_WAIT,
    HIVE_MIND_IMPERATIVE, THE_VOID_IN_THE_WARP, OVERRUN, ENCIRCLE_THE_PREY
} from "../TyranidsStrat";


import Sv from "../../../assets/icons/Sv.png";
import question from "../../../assets/icons/question.png";
import morale from "../../../assets/icons/morale.png";

export const Zoanthropes = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={zoanthropes}
                M='6"' WS='5+' BS='3+' S='5' T='5' W='4' A='2' Ld='9' Sv='5+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Warp Blast' AbNum='' AbIcon={morale}
                    AbText='Каждый раз, когда этот юнит пытается проявить Smite или Witchfire psychic
                    power, добавляйте 1 к психическому тесту для каждой модели в этом юните. Каждый раз,
                    когда этот юнит проявляет психическую силу Удара, прибавляйте 1 к количеству
                    смертельных ран, полученных вражеским юнитом за каждую модель в этом юните
                    (максимум +3 смертельных ранения).'/>

                <AbilitiesBlock AbTitle='Psybrood Coterie' AbNum='' AbIcon={question}
                    AbText='Отряд ZOANTHROPE может быть включен в этот отряд, не занимая места на поле боя.' />

                <AbilitiesBlock AbTitle='Warp Field' AbNum='' AbIcon={Sv}
                    AbText='Модели в этом блоке имеют неуязвимое сохранение 4+.' />
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <UNPARALLELED_FEROCITY /> <OPPORTUNISTIC_ADVANCE />
                <COMBINED_ASSAULT />  <CRITICAL_MASS />
                <THE_DEEPEST_SHADOW /> <SYNAPTIC_DOMINATION />
                <SYNAPTIC_CHANNELLING /> <BURIED_IN_WAIT />
                <HIVE_MIND_IMPERATIVE /> <THE_VOID_IN_THE_WARP />
                <OVERRUN /> <ENCIRCLE_THE_PREY />
            </section>
        </section >
    )
}