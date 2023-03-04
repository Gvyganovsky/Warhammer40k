import style from "../../../scss/CombatUnit.module.scss";
import Nightscythe from "../../../assets/Necrons/Night Scythe.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { DamageBlock } from "../../../Components/DamageBlock";

import {
    Twin_tesla_destructor
} from "../NecronsWeapon";

import {
    BLOOD_RITES, METHODICAL_DESTRUCTION, TECHNO_ORACULAR_TARGETING, TALENT_FOR_ANNIHILATION,
    STELLAR_ALIGNMENT_PROTOCOL, PRISMATIC_DIMENSIONAL_BREACH, CURSE_OF_THE_PHAERON, EMPYRIC_DAMPING,
    DISRUPTION_FIELDS, MALEVOLENT_ARCING, SOLAR_PULSE
} from "../NecronsStrat";

import M from "../../../assets/icons/M.png";
import BS from "../../../assets/icons/BS.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";

export const NightScythe = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={Nightscythe}
                M='50"' WS='6+' BS='3+' S='6' T='6' W='12' A='3' Ld='10' Sv='3+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Изменение характеристик от урона</div>
                <div className={style.damage_content}>
                    <DamageBlock
                        img1={W} num1='7-12' num2='4-6' num3='1-3'
                        img2={M} num4='50"' num5='40"' num6='30"'
                        img3={BS} num7='3+' num8='4+' num9='5+'
                        img4={A} num10='3' num11='D3' num12='1' />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Twin_tesla_destructor />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <BLOOD_RITES /> <METHODICAL_DESTRUCTION />
                <TECHNO_ORACULAR_TARGETING /> <TALENT_FOR_ANNIHILATION />
                <STELLAR_ALIGNMENT_PROTOCOL /> <PRISMATIC_DIMENSIONAL_BREACH />
                <CURSE_OF_THE_PHAERON /> <EMPYRIC_DAMPING />
                <DISRUPTION_FIELDS /> <MALEVOLENT_ARCING /> <SOLAR_PULSE />
            </section>
        </section >
    )
}