import style from "../../../scss/CombatUnit.module.scss";
import Drone from "../../../assets/TauEmpire/Drone.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { WeaponOther } from "../../../Components/WeaponOther";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import { Pulse_carbine } from "../TauEmpireWeapon";

import {
    EXPERIMENTAL_WEAPONRY, SAVIOUR_PROTOCOLS, ORBITAL_UPLINK, COORDINATED_ENGAGEMENT,
} from "../TauEmpireStrat";

import hit from "../../../assets/icons/hit.svg";
import morale from "../../../assets/icons/morale.png";
import limitation from "../../../assets/icons/limitation.png";

export const Drones = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={Drone}
                M='10"' WS='5+' BS='5+' S='3' T='4' W='1/2' A='1' Ld='6' Sv='4+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}><Pulse_carbine /></div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>
                    <WeaponOther title='Markerlight' img={hit}
                        text='В начале фазы движения юнит с Markerlight в пределах 36" может отметить
                        вражеского юнита до следующей фазы стрельбы. Бросьте 1D6: на 3+ вражеский
                        юнит получает 1 маркерный жетон, при наличии которого добавьте 1 к броскам
                        на попадание. После атаки вашего юнита уберите 1 маркерный жетон. К концу
                        фазы стрельбы уберите все маркерные жетоны.'/>
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Valued Sacrifice' AbNum='' AbIcon={morale}
                    AbText='Уничтожение этой модели игнорируется с целью проверки боевого духа.' />

                <AbilitiesBlock AbTitle='Docked Drone' AbNum='' AbIcon={limitation}
                    AbText='Если отряд погибает, а дроны в нем остаются - они автоматически
                    уничтожаются.' />
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <EXPERIMENTAL_WEAPONRY /> <SAVIOUR_PROTOCOLS />
                <ORBITAL_UPLINK /> <COORDINATED_ENGAGEMENT />
            </section>
        </section>
    )
}