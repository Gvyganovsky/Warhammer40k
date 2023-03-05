import style from "../../../scss/CombatUnit.module.scss";
import Riptidebattlesuit from "../../../assets/TauEmpire/Riptide Battlesuit.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { DamageBlock } from "../../../Components/DamageBlock";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Fusion_blaster, Hv_burst_cannon, Ion_accelerator_S, Ion_accelerator_O,
    Plasma_rifle, Smart_mis_system, Riptide_fists
} from "../TauEmpireWeapon";

import {
    SAVIOUR_PROTOCOLS, COORDINATED_ENGAGEMENT, ORBITAL_UPLINK,
    EXPERIMENTAL_WEAPONRY, BRANCHED_NOVA_CHARGE, FAIL_SAFE_DETONATOR,
    BACKUP_AI, COUNTERFIRE_DEFENCE_SYSTEM, STRIKE_AND_FADE,
    REPULSOR_IMPACT_FIELD, IONISED_SHOCKFIELD
} from "../TauEmpireStrat";

import M from "../../../assets/icons/M.png";
import BS from "../../../assets/icons/BS.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";
import Sv from "../../../assets/icons/Sv.png";
import skull from "../../../assets/icons/skull.png";
import dice from "../../../assets/icons/dice.png";

export const RiptideBattlesuit = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={Riptidebattlesuit}
                M='12"' WS='5+' BS='4+' S='6' T='7' W='14' A='6' Ld='9' Sv='2+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Изменение характеристик от урона</div>
                <DamageBlock
                    img1={W} num1='8-14' num2='5-7' num3='1-4'
                    img2={M} num4='12"' num5='8"' num6='4"'
                    img3={BS} num7='4+' num8='5+' num9='6+'
                    img4={A} num10='6' num11='5' num12='4' />
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Fusion_blaster /> <Hv_burst_cannon />
                    <Ion_accelerator_S /> <Ion_accelerator_O />
                    <Plasma_rifle /> <Smart_mis_system />
                    <Riptide_fists />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Riptide Shield Generator' AbNum='4+' AbIcon={Sv}
                    AbText='Модель имеет 4+ неуязвимых сейва.' />

                <AbilitiesBlock AbTitle='Explodes' AbNum='6' AbIcon={skull}
                    AbText='Когда модель будет уничтожена, бросьте 1D6: на 6 юнит взрывавется,
                    и каждый юнит в пределах 6" получает смертельные ранение D3.' />

                <AbilitiesBlock AbTitle='Nova Reactor' AbNum='6' AbIcon={dice}
                    AbText='На этапе командования бросьте 2D6: если результат больше, чем
                    оставшиеся раны модели, реактор сгорает и эту способность вы
                    больше не сможете использовать. Если вам повезло, то:
                    1. Nova Shield. До начала вашей следующей командной фазы,
                        каждый раз, когда эта модель теряет рану, бросайте один D6:
                        на 5+, эта рана не теряется.
                    2. Boost. На следующем этапе зарядки этот юнит может совершать
                        нормальное движение до 2D6". Если это произойдет, то до конца фазы
                        вы не сможете объявить charge с помощью этого устройства.
                    3. Nova Charge. До начала вашей следующей фазы командования, если эта
                        модель оснащена heavy burst cannon, это оружие имеет тип, характерный
                        для Heavy 16; в противном случае оба профиля ионного ускорителя этой
                        модели имеют тип, характерный для Heavy 8.' />
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <EXPERIMENTAL_WEAPONRY /> <SAVIOUR_PROTOCOLS />
                <BRANCHED_NOVA_CHARGE /> <FAIL_SAFE_DETONATOR />
                <BACKUP_AI /> <ORBITAL_UPLINK />
                <COORDINATED_ENGAGEMENT /> <COUNTERFIRE_DEFENCE_SYSTEM />
                <STRIKE_AND_FADE /> <REPULSOR_IMPACT_FIELD /> <IONISED_SHOCKFIELD />
            </section>
        </section >
    )
}