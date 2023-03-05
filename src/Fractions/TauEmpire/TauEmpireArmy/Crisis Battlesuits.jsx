import style from "../../../scss/CombatUnit.module.scss";
import CrisisBattlesuit from "../../../assets/TauEmpire/Crisis Battlesuits.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { WeaponOther } from "../../../Components/WeaponOther";

import {
  Air_frag_proj, Burst_cannon, Cyclic_ion_bl_S, Cyclic_ion_bl_O, Fusion_blaster,
  Missile_pod, Plasma_rifle, Tau_flamer
} from "../TauEmpireWeapon";

import {
  FOCUSED_FIRE, DROP_ZONE_CLEAR, DYNAMIC_OFFENSIVE, EXPERIMENTAL_WEAPONRY, SAVIOUR_PROTOCOLS,
  FAIL_SAFE_DETONATOR, OUTFLANK, ORBITAL_UPLINK, COORDINATED_ENGAGEMENT, DESIGNATED_TASKING,
  STRIKE_AND_FADE, REPULSOR_IMPACT_FIELD, IONISED_SHOCKFIELD
} from "../TauEmpireStrat";

import BS from "../../../assets/icons/BS.png";
import A from "../../../assets/icons/A.png";
import Sv from "../../../assets/icons/Sv.png";
import hit from "../../../assets/icons/hit.svg";
import shooting from "../../../assets/icons/shooting.png";

export const CrisisBattlesuits = () => {
  return (
    <section className={style.content}>
      <ParametersBlock img={CrisisBattlesuit}
        M='10"' WS='5+' BS='4+' S='5' T='5' W='4' A='3' Ld='8' Sv='3+' />

      <section className={style.Content_block}>
        <div className={style.content_title}>Оружие</div>
        <div className={style.weapon_content}>
          <Air_frag_proj /> <Burst_cannon />
          <Cyclic_ion_bl_S /> <Cyclic_ion_bl_O />
          <Fusion_blaster /> <Missile_pod />
          <Plasma_rifle /> <Tau_flamer />
        </div>
      </section>

      <section className={style.Content_block}>
        <div className={style.content_title}>Другое оружие</div>
        <div className={style.weapon_content}>
          <WeaponOther title='Early warning override' img={shooting}
            text='Когда носитель запускает Overwatch, он получает попадания по неизмененным броскам 5+ 
            вместо 6. Каждый раз, когда вы используете стратагему Fire Overwatch, если носитель находится 
            на поле боя и его подразделение выбрано для Fire Overwatch, уменьшайте стоимость CP этой 
            стратагемы на 1.' />

          <WeaponOther title='Multi-tracker' img={A}
            text='Когда дальняя атака нацелена на юнита, содержащий 6 или более моделей, 
            немодифицированный бросок 6 ударов дает 1 дополнительный удар. Максимум 1 на модель.' />

          <WeaponOther title='Target lock' img={hit}
            text='Когда носитель совершает дальнюю атаку, цель не получает преимущества легкого 
            прикрытия от этой атаки.' />

          <WeaponOther title='Velocity tracker' img={BS}
            text='Когда носитель совершает атаку дальнего боя против юнита, который может ЛЕТАТЬ, 
            добавляйте 1 к броску попадания этой атаки. Максимум 1 на модель.' />

          <WeaponOther title='Shield generator' img={Sv}
            text='У носителя есть 4+ неуязвимых сейва.' />

          <WeaponOther title='Iridium battlesuit' img={Sv}
            text='Спасбросок сохранения 2+.' />
        </div>
      </section>

      <section className={style.Content_block}>
        <div className={style.content_title}>Стратегемы</div>
        <FOCUSED_FIRE /> <DROP_ZONE_CLEAR /> <DYNAMIC_OFFENSIVE />
        <EXPERIMENTAL_WEAPONRY /><SAVIOUR_PROTOCOLS /> <FAIL_SAFE_DETONATOR />
        <OUTFLANK /> <ORBITAL_UPLINK /> <COORDINATED_ENGAGEMENT />
        <DESIGNATED_TASKING /> <STRIKE_AND_FADE /> <REPULSOR_IMPACT_FIELD /> <IONISED_SHOCKFIELD />
      </section>
    </section>
  )
}