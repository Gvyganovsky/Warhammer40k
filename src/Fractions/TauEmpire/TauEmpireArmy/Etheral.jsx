import style from "../../../scss/CombatUnit.module.scss";
import Ether from "../../../assets/TauEmpire/Etheral.jpg";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import { Honour_stave } from "../TauEmpireWeapon";

import {
  SAVIOUR_PROTOCOLS, WISDOM_OF_THE_MANY, EMERGENCY_DISPENSATION, PROMISING_PUPIL,
  COORDINATED_ENGAGEMENT, DESIGNATED_TASKING,
} from "../TauEmpireStrat";

import W from "../../../assets/icons/W.png";
import Sv from "../../../assets/icons/Sv.png";
import hit from "../../../assets/icons/hit.svg";
import question from "../../../assets/icons/question.png";
import morale from "../../../assets/icons/morale.png";
import limitation from "../../../assets/icons/limitation.png";

export const Etheral = () => {
  return (
    <section className={style.content}>
      <ParametersBlock img={Ether}
        M='6"' WS='3+' BS='4+' S='3' T='3' W='4' A='3' Ld='10' Sv='5+' />

      <section className={style.Content_block}>
        <div className={style.content_title}>Оружие</div>
        <div className={style.weapon_content}>
          <Honour_stave />
        </div>
      </section>

      <section className={style.Content_block}>
        <div className={style.content_title}>Способности</div>
        <AbilitiesBlock AbTitle='Embodiments of the Empire' AbNum='' AbIcon={question}
          AbText='Эта модель не может быть взята в FARSIGHT ENCLAVES.' />

        <AbilitiesBlock AbTitle='Failure Is Not An Option (Aura)' AbNum='' AbIcon={morale}
          AbText='Если отряд находится в пределах 6" от эфирного, модели этого отряда могут 
          использовать лидерские характеристики этой модели вместо своих.' />

        <AbilitiesBlock AbTitle='Etheral' AbNum='' AbIcon={limitation}
          AbText='Эфирный может знать только 2 заклинания. При броске D6: на 3+ заклинание 
          срабатывает и действует до начала следующей командной фазы.' />
      </section>

      <section className={style.Content_block}>
        <div className={style.content_title}>Заклинания</div>
        <AbilitiesBlock AbTitle='STORM OF FIRE' AbNum='' AbIcon={hit}
          AbText='Отряд в пределах 6" от Эфирного может совершать дальние атаки без каких-либод 
          действий, которые он выполняет, терпя неудачу.' />

        <AbilitiesBlock AbTitle='SENSE OF STONE' AbNum='5+' AbIcon={Sv}
          AbText='Отряд в пределах 6" от Эфирного при потере раны может кинуть 1D6: на 5+ эта рана
           не теряется.' />

        <AbilitiesBlock AbTitle='ZEPHYR’S GRACE' AbNum='-1' AbIcon={hit}
          AbText='Отряд в пределах 6" от Эфирного, если по ним совершают дальнюю атаку и если они
          оставались неподвижными в предыдущей фазе движения, вычтите 1 из броска удара этой атаки.' />

        <AbilitiesBlock AbTitle='POWER OF TIDES' AbNum='+1' AbIcon={W}
          AbText='Отряд в пределах 6" от Эфирного при совершении атаки, добавляйте 1 к броску раны
           этой атаки.' />

        <AbilitiesBlock AbTitle='UNIFYING MANTRA (AURA)' AbNum='+1' AbIcon={morale}
          AbText='Отряд в пределах 6" от Эфирного может повторно провести тесты
          морального духа. Добавьте 1 к тестам на боевое истощение.' />

        <AbilitiesBlock AbTitle='WISDOM OF THE GUIDES' AbNum='+1' AbIcon={question}
          AbText='Если этот призыв вдохновляет, вы получаете 1 CP.' />
      </section>

      <section className={style.Content_block}>
        <div className={style.content_title}>Стратегемы</div>
        <SAVIOUR_PROTOCOLS /> <WISDOM_OF_THE_MANY />
        <EMERGENCY_DISPENSATION />  <PROMISING_PUPIL />
        <COORDINATED_ENGAGEMENT /> <DESIGNATED_TASKING />
      </section>
    </section>
  )
}