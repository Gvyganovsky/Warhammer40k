import style from "../../../scss/CombatUnit.module.scss";
import Cadrefireblade from "../../../assets/TauEmpire/Cadre Fireblade.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { DamageBlock } from "../../../Components/DamageBlock";
import { WeaponOther } from "../../../Components/WeaponOther";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Firebl_pulse_rifle
} from "../TauEmpireWeapon";

import {
    SAVIOUR_PROTOCOLS, EMERGENCY_DISPENSATION, PROMISING_PUPIL, COORDINATED_ENGAGEMENT,
    DESIGNATED_TASKING, ORBITAL_UPLINK, EXPERIMENTAL_WEAPONRY, PHOTON_GRENADES
} from "../TauEmpireStrat";

import hit from "../../../assets/icons/hit.svg";
import dice from "../../../assets/icons/dice.png";

export const CadreFireblade = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={Cadrefireblade}
                M='6"' WS='4+' BS='3+' S='3' T='3' W='4' A='3' Ld='8' Sv='4+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Firebl_pulse_rifle />
                </div>
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
                <AbilitiesBlock AbTitle='Volley Fire (Aura)' AbNum='+1' AbIcon={hit}
                    AbText='Отряд в пределах 6" от юнита при атаке импульсным
                    оружием немодифицированный бросок удара 6 дает
                    дополнительное попадание.'/>

                <AbilitiesBlock AbTitle='Target Sighted' AbNum='1' AbIcon={dice}
                    AbText='Отряд в пределах 9" от юнита до начала следующей
                    фазы командования может перебрасывать броски попадания,
                    равные 1.'/>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <EXPERIMENTAL_WEAPONRY /> <SAVIOUR_PROTOCOLS />
                <EMERGENCY_DISPENSATION /> <PROMISING_PUPIL />
                <ORBITAL_UPLINK /> <COORDINATED_ENGAGEMENT />
                <DESIGNATED_TASKING /> <PHOTON_GRENADES />
            </section>
        </section >
    )
}