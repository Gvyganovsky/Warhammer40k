import style from "../../../scss/CombatUnit.module.scss";
import Tombblades from "../../../assets/Necrons/Tomb Blades.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { WeaponOther } from "../../../Components/WeaponOther";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Particle_beamer, Twin_gauss_blaster, Twin_tesla_carbine
} from "../NecronsWeapon";

import {
    BLOOD_RITES, METHODICAL_DESTRUCTION, TECHNO_ORACULAR_TARGETING, FRACTAL_TARGETING,
    TALENT_FOR_ANNIHILATION, TRANSLOCATION_CRYPT, PRISMATIC_DIMENSIONAL_BREACH, EMPYRIC_DAMPING,
    DISRUPTION_FIELDS, DISINTEGRATION_CAPACITORS, MALEVOLENT_ARCING, SOLAR_PULSE
} from "../NecronsStrat";

import Sv from "../../../assets/icons/Sv.png";
import hit from "../../../assets/icons/hit.svg";

export const TombBlades = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={Tombblades}
                M='14"' WS='3+' BS='3+' S='4' T='5' W='2' A='1' Ld='10' Sv='4+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Particle_beamer /> <Twin_gauss_blaster /> <Twin_tesla_carbine />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>
                    <WeaponOther title='Nebuloscope' img={hit}
                        text='Каждый раз, когда носитель совершает атаку дальнего боя, цель не
                        получает преимуществ прикрытия от этой атаки.'/>

                    <WeaponOther title='Shadowloom' img={Sv}
                        text='У носителя есть 5+ неуязвимых сейвов.' />

                    <WeaponOther title='Shieldvanes' img={Sv}
                        text='Предъявитель имеет характеристику сохранения 3+.' />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Explodes' AbNum='-1' AbIcon={hit}
                    AbText='Каждый раз, когда против этого юнита наносится дальняя атака, вычтите 1
                     из броска попадания этой атаки.' />
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <BLOOD_RITES /> <METHODICAL_DESTRUCTION />
                <TECHNO_ORACULAR_TARGETING /> <FRACTAL_TARGETING />
                <TALENT_FOR_ANNIHILATION /> <TRANSLOCATION_CRYPT />
                <PRISMATIC_DIMENSIONAL_BREACH /> <EMPYRIC_DAMPING />
                <DISRUPTION_FIELDS /> <DISINTEGRATION_CAPACITORS />
                <MALEVOLENT_ARCING /> <SOLAR_PULSE />
            </section>
        </section >
    )
}