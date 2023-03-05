import style from "../../../scss/CombatUnit.module.scss";
import Ghostkeel_Battlesuit from "../../../assets/TauEmpire/Tau XV95 Ghostkeel Battlesuit.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { DamageBlock } from "../../../Components/DamageBlock";
import { WeaponOther } from "../../../Components/WeaponOther";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
  Burst_cannon, Tau_flamer, Cyclic_ion_raker_St, Cyclic_ion_raker_Ov, Fusion_blaster,
  Fusion_collider,
} from "../TauEmpireWeapon";

import {
  EXPERIMENTAL_WEAPONRY, SAVIOUR_PROTOCOLS, FAIL_SAFE_DETONATOR, BACKUP_AI,
  ORBITAL_UPLINK, WALL_OF_MIRRORS, COORDINATED_ENGAGEMENT, DESIGNATED_TASKING,
  STRIKE_AND_FADE, REPULSOR_IMPACT_FIELD,
} from "../TauEmpireStrat";

import M from "../../../assets/icons/M.png";
import BS from "../../../assets/icons/BS.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";

import general from "../../../assets/icons/general.png";
import shooting from "../../../assets/icons/shooting.png";
import hit from "../../../assets/icons/hit.svg";
import location from "../../../assets/icons/location.png";
import skull from "../../../assets/icons/skull.png";

export const GhostkeelBattlesuit = () => {
  return (
    <section className={style.content}>
      <ParametersBlock img={Ghostkeel_Battlesuit}
        M='12"' WS='5+' BS='4+' S='6' T='7' W='12' A='3' Ld='9' Sv='3+' />

      <section className={style.Content_block}>
        <div className={style.content_title}>Изменение характеристик от урона</div>
        <DamageBlock
          img1={W} num1='7-12' num2='4-6' num3='1-3'
          img2={M} num4='12"' num5='8"' num6='4"'
          img3={BS} num7='4+' num8='5+' num9='5+'
          img4={A} num10='3' num11='D3' num12='1' />
      </section>

      <section className={style.Content_block}>
        <div className={style.content_title}>Оружие</div>
        <div className={style.weapon_content}>
          <Burst_cannon /> <Tau_flamer />
          <Cyclic_ion_raker_St /> <Cyclic_ion_raker_Ov />
          <Fusion_blaster /> <Fusion_collider />
        </div>
      </section>

      <section className={style.Content_block}>
        <div className={style.content_title}>Другое оружие</div>
        <div className={style.weapon_content}>
          <WeaponOther title='Drone controller' img={general}
            text='Вы можете выбрать один дрон в пределах 6" от носителя. До начала вашей следующей
            командной фазы: Модели дронов в этом подразделении имеют BS 4+. Модели боевых дронов в этом 
            подразделении теряют способность «Протокола идентификации угрозы».'/>

          <WeaponOther title='Early warning override' img={shooting}
            text='Каждый раз, когда носитель запускает Overwatch, он получает попадания по неизмененным
            броскам 5+ вместо 6+. Каждый раз, когда вы используете стратагему "Огненный дозор", если 
            носитель находится на поле боя и его подразделение выбрано для "Огненного дозора", уменьшайте
            стоимость CP этой стратагемы на 1СP.'/>

          <WeaponOther title='Flare launcher' img={shooting}
            text='Каждый раз, когда носитель теряет рану в результате дальней атаки с характеристикой 
            силы 7 или более, бросайте один D6: при 5+ эта рана не теряется.'/>
        </div>
      </section>

      <section className={style.Content_block}>
        <div className={style.content_title}>Способности</div>
        <AbilitiesBlock AbTitle='Electrowarfare Suite' AbNum='-1' AbIcon={hit}
          AbText='Каждый раз, когда дальняя атака нацелена на этого юнита, вычтите 1 из броска 
          попадания этой атаки.' />

        <AbilitiesBlock AbTitle='Infiltrator' AbNum='9"' AbIcon={location}
          AbText='Во время развертывания, юнита можно установить в любом месте поля боя, которое
          находится более чем в 9" от зоны развертывания противника и любых вражеских моделей.' />

        <AbilitiesBlock AbTitle='Infiltrator' AbNum='' AbIcon={skull}
          AbText='Когда модель этого юнита будет уничтожена, бросьте 1D6, прежде чем удалить его из
          игры. На 6 он взрывается, и каждый юнит в пределах 6 " получает урон D3.' />
      </section>

      <section className={style.Content_block}>
        <div className={style.content_title}>Стратегемы</div>
        <EXPERIMENTAL_WEAPONRY /> <SAVIOUR_PROTOCOLS />
        <FAIL_SAFE_DETONATOR /> <BACKUP_AI />
        <ORBITAL_UPLINK /> <WALL_OF_MIRRORS />
        <COORDINATED_ENGAGEMENT /> <DESIGNATED_TASKING />
        <STRIKE_AND_FADE /> <REPULSOR_IMPACT_FIELD />
      </section>
    </section>
  )
}