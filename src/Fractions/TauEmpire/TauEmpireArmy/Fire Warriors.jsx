import style from "../../../scss/CombatUnit.module.scss";
import FireWarrior from "../../../assets/TauEmpire/Fire Warriors.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";

import {
  Pulse_rifle, Pulse_carbine, Pulse_pistol
} from "../TauEmpireWeapon";

import {
  FOCUSED_FIRE, RELENTLESS_FUSILLADE, PULSE_ONSLAUGHT, POINT_BLANK_VOLLEY, EXPERIMENTAL_WEAPONRY,
  SAVIOUR_PROTOCOLS, OUTFLANK, ORBITAL_UPLINK, COORDINATED_ENGAGEMENT, DESIGNATED_TASKING, PHOTON_GRENADES
} from "../TauEmpireStrat";

export const FireWarriors = () => {
  return (
    <section className={style.content}>
      <ParametersBlock img={FireWarrior}
        M='6"' WS='5+' BS='4+' S='3' T='3' W='1' A='1' Ld='7' Sv='4+' />

      <section className={style.Content_block}>
        <div className={style.content_title}>Оружие</div>
        <div className={style.weapon_content}>
          <Pulse_rifle /> <Pulse_carbine /> <Pulse_pistol />
        </div>
      </section>

      <section className={style.Content_block}>
        <div className={style.content_title}>Стратегемы</div>
        <FOCUSED_FIRE /> <RELENTLESS_FUSILLADE />
        <PULSE_ONSLAUGHT />  <POINT_BLANK_VOLLEY />
        <EXPERIMENTAL_WEAPONRY /> <SAVIOUR_PROTOCOLS />
        <OUTFLANK /> <ORBITAL_UPLINK />
        <COORDINATED_ENGAGEMENT /> <DESIGNATED_TASKING /> <PHOTON_GRENADES />
      </section>
    </section >
  )
}