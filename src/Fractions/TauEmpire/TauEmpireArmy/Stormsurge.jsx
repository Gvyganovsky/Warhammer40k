import style from "../../../scss/CombatUnit.module.scss";
import stormsurge from "../../../assets/TauEmpire/stormsurge.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { DamageBlock } from "../../../Components/DamageBlock";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Cluster_rocket_syst, Destroyer_missile, Pulse_blast_F, Pulse_blast_D,
    Pulse_driver_can, Smart_mis_system, Twin_air_frag, Twin_burst_can,
    Twin_Tau_flamer, Thund_footfalls
} from "../TauEmpireWeapon";

import {
    SAVIOUR_PROTOCOLS, COORDINATED_ENGAGEMENT, ORBITAL_UPLINK, EXPERIMENTAL_WEAPONRY,
    BACKUP_AI, COUNTERFIRE_DEFENCE_SYSTEM, FREQUENCY_LOCK
} from "../TauEmpireStrat";

import BS from "../../../assets/icons/BS.png";
import S from "../../../assets/icons/S.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";
import hit from "../../../assets/icons/hit.svg";
import shooting from "../../../assets/icons/shooting.png";
import general from "../../../assets/icons/general.png";

export const Stormsurge = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={stormsurge}
                M='8"' WS='5+' BS='4+' S='8' T='8' W='22' A='3' Ld='8' Sv='2+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Изменение характеристик от урона</div>
                <DamageBlock
                    img1={W} num1='12-22' num2='6-11' num3='1-5'
                    img2={S} num4='8' num5='7' num6='6"'
                    img3={W} num7='4+' num8='5+' num9='6+'
                    img4={A} num10='3' num11='D3' num12='1' />
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Cluster_rocket_syst /> <Destroyer_missile />
                    <Pulse_blast_F /> <Pulse_blast_D />
                    <Pulse_driver_can /> <Smart_mis_system />
                    <Twin_air_frag /> <Twin_burst_can />
                    <Twin_Tau_flamer /> <Thund_footfalls />
                    <Thund_footfalls />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <div className={style.weapon_content}>
                    <AbilitiesBlock AbTitle='Drone controller' AbNum='' AbIcon={general}
                        AbText='Вы можете выбрать один дрон в пределах 6"
                        от носителя. До начала вашей следующей командной фазы:
                        Модели дронов в этом подразделении имеют BS 4+.
                        Модели боевых дронов в этом подразделении теряют способность «Протокола 
                        идентификации угрозы».'/>

                    <AbilitiesBlock AbTitle='Early warning override' AbNum='' AbIcon={shooting}
                        AbText='Когда носитель запускает Overwatch, он получает попадания по неизмененным 
                        броскам 5+ вместо 6. Каждый раз, когда вы используете стратагему Fire Overwatch, 
                        если  носитель находится на поле боя и его подразделение выбрано для Fire 
                        Overwatch, уменьшайте стоимость CP этой стратагемы на 1.'/>

                    <AbilitiesBlock AbTitle='Multi-tracker' AbNum='' AbIcon={A}
                        AbText='Когда дальняя атака нацелена на юнита, содержащий 6 или более моделей, 
                        немодифицированный бросок 6 ударов дает 1 дополнительный удар. Максимум 1 на 
                        модель.'/>

                    <AbilitiesBlock AbTitle='Target lock' AbNum='' AbIcon={hit}
                        AbText='Когда носитель совершает дальнюю атаку, цель не получает преимущества 
                        легкого прикрытия от этой атаки.' />

                    <AbilitiesBlock AbTitle='Velocity tracker' AbNum='' AbIcon={BS}
                        AbText='Когда носитель совершает атаку дальнего боя против юнита, который может 
                        ЛЕТАТЬ, добавляйте 1 к броску попадания этой атаки. Максимум 1 на модель.' />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <EXPERIMENTAL_WEAPONRY /> <SAVIOUR_PROTOCOLS />
                <BACKUP_AI /> <ORBITAL_UPLINK />
                <COORDINATED_ENGAGEMENT /> <COUNTERFIRE_DEFENCE_SYSTEM /> <FREQUENCY_LOCK />
            </section>
        </section >
    )
}