import style from "../../../scss/CombatUnit.module.scss";
import Necronimmortals from "../../../assets/Necrons/Necron Immortals.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";

import {
    Gauss_blaster, Tesla_carbine
} from "../NecronsWeapon";

import {
    BLOOD_RITES, METHODICAL_DESTRUCTION, DIMENSIONAL_CORRIDOR, TECHNO_ORACULAR_TARGETING,
    TALENT_FOR_ANNIHILATION, TRANSLOCATION_CRYPT, RECLAIM_A_LOST_EMPIRE, PRISMATIC_DIMENSIONAL_BREACH,
    RELENTLESS_ONSLAUGHT, EMPYRIC_DAMPING, DISRUPTION_FIELDS, DISINTEGRATION_CAPACITORS, MALEVOLENT_ARCING,
    SOLAR_PULSE
} from "../NecronsStrat";

export const NecronImmortals = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={Necronimmortals}
                M='5"' WS='3+' BS='3+' S='4' T='5' W='1' A='2' Ld='10' Sv='3+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Gauss_blaster /> <Tesla_carbine />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <BLOOD_RITES /> <METHODICAL_DESTRUCTION />
                <DIMENSIONAL_CORRIDOR /> <TECHNO_ORACULAR_TARGETING />
                <TALENT_FOR_ANNIHILATION /> <TRANSLOCATION_CRYPT />
                <RECLAIM_A_LOST_EMPIRE /> <PRISMATIC_DIMENSIONAL_BREACH />
                <RELENTLESS_ONSLAUGHT /> <EMPYRIC_DAMPING />
                <DISRUPTION_FIELDS /> <DISINTEGRATION_CAPACITORS />
                <MALEVOLENT_ARCING /> <SOLAR_PULSE />
            </section>
        </section >
    )
}