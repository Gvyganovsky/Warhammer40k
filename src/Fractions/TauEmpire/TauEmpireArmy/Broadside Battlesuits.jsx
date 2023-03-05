import style from "../../../scss/CombatUnit.module.scss";
import Broadside from "../../../assets/TauEmpire/Broadside.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { WeaponOther } from "../../../Components/WeaponOther";

import {
    Heavy_rail_rifle, High_yield_mis_pod, Seeker_missile, Twin_plasma_rifle,
    Twin_smart_mis, Crushing_bulk
} from "../TauEmpireWeapon";

import {
    EXPERIMENTAL_WEAPONRY, SAVIOUR_PROTOCOLS, FAIL_SAFE_DETONATOR, ORBITAL_UPLINK,
    COORDINATED_ENGAGEMENT, FREQUENCY_LOCK, REPULSOR_IMPACT_FIELD
} from "../TauEmpireStrat";

import hit from "../../../assets/icons/hit.svg";

export const BroadsideBattlesuits = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={Broadside}
                M='5"' WS='5+' BS='4+' S='5' T='5' W='8' A='3' Ld='8' Sv='2+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Heavy_rail_rifle /> <High_yield_mis_pod />
                    <Seeker_missile /> <Twin_plasma_rifle />
                    <Twin_smart_mis /> <Crushing_bulk />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>
                    <WeaponOther title='Advanced targeting system' img={hit}
                        text='Каждый раз, когда носитель совершает дальнюю атаку, неизмененный 
                    бросок из 6 ударов автоматически ранит цель.'/>

                    <WeaponOther title='Early warning override' img={hit}
                        text='Каждый раз, когда носитель запускает Overwatch, он получает попадания 
                    по неизмененным броскам 5+ вместо 6. Каждый раз, когда вы используете стратагему
                    Fire Overwatch Stratagem, если носитель находится на поле боя и его подразделение
                    выбрано для Fire Overwatch Stratagem, уменьшайте стоимость CP этой стратагемы на 1.'/>

                    <WeaponOther title='Multi-tracker' img={hit}
                        text='Каждый раз, когда дальняя атака, совершаемая носителем, нацелена на юнит, 
                    содержащий 6 или более моделей, немодифицированный бросок удара в 6 очков дает 1
                    дополнительный удар. Максимум 1 на модель.'/>

                    <WeaponOther title='Stabilised optics' img={hit}
                        text='Предъявитель не подвергается штрафу за броски попадания, понесенные
                    за стрельбу из Heavy оружия в тот же ход, что и его подразделение,
                    и не подвергается штрафу за броски попадания, понесенные за стрельбу
                    из Heavy оружия по цели, которая находится в пределах досягаемости их подразделения.'/>

                    <WeaponOther title='Velocity tracker' img={hit}
                        text='Каждый раз, когда носитель совершает атаку дальнего боя против юнита,
                    который может ЛЕТАТЬ, добавляйте 1 к броску попадания этой атаки.
                    Максимум 1 на модель.'/>
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <EXPERIMENTAL_WEAPONRY /> <SAVIOUR_PROTOCOLS />
                <FAIL_SAFE_DETONATOR /> <ORBITAL_UPLINK />
                <COORDINATED_ENGAGEMENT /> <FREQUENCY_LOCK /> <REPULSOR_IMPACT_FIELD />
            </section>
        </section >
    )
}