import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import FireWarrior from "../../../assets/TauEmpire/Fire Warriors.png";

import M from "../../../assets/icons/M.png";
import WS from "../../../assets/icons/WS.png";
import BS from "../../../assets/icons/BS.png";
import S from "../../../assets/icons/S.png";
import T from "../../../assets/icons/T.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";
import Ld from "../../../assets/icons/Ld.png";
import Sv from "../../../assets/icons/Sv.png";

import range from "../../../assets/icons/range.png";
import location from "../../../assets/icons/location.png";
import hit from "../../../assets/icons/hit.svg";
import question from "../../../assets/icons/question.png";
import morale from "../../../assets/icons/morale.png";
import limitation from "../../../assets/icons/limitation.png";

import shooting from "../../../assets/icons/shooting.png";
import skull from "../../../assets/icons/skull.png";

const FireWarriors = () => {
  return (
    <section>
      <section className={style.content}>
        <img src={FireWarrior} alt="FireWarriors" className={style.combat_unit_img} />
        <div className={style.combat_unit_param}>
          <div className={style.combat_unit_param_block}>
            <img src={M} alt="M" className={style.param_img} />
            <div className={style.param_number}>6"</div>
          </div>

          <div className={style.combat_unit_param_block}>
            <img src={WS} alt="WS" className={style.param_img} />
            <div className={style.param_number}>5+</div>
          </div>

          <div className={style.combat_unit_param_block}>
            <img src={BS} alt="BS" className={style.param_img} />
            <div className={style.param_number}>4+</div>
          </div>

          <div className={style.combat_unit_param_block}>
            <img src={S} alt="S" className={style.param_img} />
            <div className={style.param_number}>3</div>
          </div>

          <div className={style.combat_unit_param_block}>
            <img src={T} alt="T" className={style.param_img} />
            <div className={style.param_number}>3</div>
          </div>

          <div className={style.combat_unit_param_block}>
            <img src={W} alt="W" className={style.param_img} />
            <div className={style.param_number}>1</div>
          </div>

          <div className={style.combat_unit_param_block}>
            <img src={A} alt="A" className={style.param_img} />
            <div className={style.param_number}>1</div>
          </div>

          <div className={style.combat_unit_param_block}>
            <img src={Ld} alt="Ld" className={style.param_img} />
            <div className={style.param_number}>7</div>
          </div>

          <div className={style.combat_unit_param_block}>
            <img src={Sv} alt="Sv" className={style.param_img} />
            <div className={style.param_number}>4+</div>
          </div>
        </div>
      </section >

      <section className={style.content}>
        <div className={style.line}></div>
        <div className={style.content_title}>Оружие</div>

        <div className={style.weapon_content}>
          <div className={style.weapon_block}>
            <div className={style.weapon_title}>Pulse rifle</div>
            <div className={style.weapon_block_info}>
              <div className={style.weapon_info}>
                <div className={style.weapon_text}>R</div>
                <div className={style.weapon_text}>36"</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>Rf</div>
                <div className={style.weapon_text}>1</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>S</div>
                <div className={style.weapon_text}>5</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>AP</div>
                <div className={style.weapon_text}>-1</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>D</div>
                <div className={style.weapon_text}>1</div>
              </div>
            </div>
          </div>

          <div className={style.weapon_block}>
            <div className={style.weapon_title}>Pulse carbine</div>
            <div className={style.weapon_block_info}>
              <div className={style.weapon_info}>
                <div className={style.weapon_text}>R</div>
                <div className={style.weapon_text}>24"</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>As</div>
                <div className={style.weapon_text}>2</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>S</div>
                <div className={style.weapon_text}>5</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>AP</div>
                <div className={style.weapon_text}>0</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>D</div>
                <div className={style.weapon_text}>1</div>
              </div>
            </div>
          </div>

          <div className={style.weapon_block}>
            <div className={style.weapon_title}>Pulse pistol</div>
            <div className={style.weapon_block_info}>
              <div className={style.weapon_info}>
                <div className={style.weapon_text}>R</div>
                <div className={style.weapon_text}>12"</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>Ps</div>
                <div className={style.weapon_text}>1</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>S</div>
                <div className={style.weapon_text}>5</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>AP</div>
                <div className={style.weapon_text}>-1</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>D</div>
                <div className={style.weapon_text}>1</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.content}>
        <div className={style.line}></div>
        <div className={style.content_title}>Стратегемы</div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
            <span>FOCUSED FIRE</span>
            <span>2 CP</span>
          </div>
          <div className={style.strat_text}>
            <span className={style.strat_text_bold}>Фаза стрельбы</span>.
            До конца фазы: вражеская модель теряет ранение в результате атаки, при атаке прибавьте
            1 к броску ранений этой атаки.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
            <span>RELENTLESS FUSILLADE</span>
            <span>1 CP</span>
          </div>
          <div className={style.strat_text}>
            <span className={style.strat_text_bold}>Фаза стрельбы</span>.
            Вместо того, чтобы следовать правилам для оружия
            типа Rapid Fire, модели в этом подразделении, стреляющие
            из Pulse rifle, совершают вдвое больше атак.
            При этом увеличьте бронебойность этой атаки на 1
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
            <span>PULSE ONSLAUGHT</span>
            <span>1 CP</span>
          </div>
          <div className={style.strat_text}>
            <span className={style.strat_text_bold}>Фаза стрельбы</span>.
            До конца фазы: при попадании импульсным оружием, бросок удара на 6
            автоматически ранит цель.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
            <span>POINT-BLANK VOLLEY</span>
            <span>1 CP</span>
          </div>
          <div className={style.strat_text}>
            <span className={style.strat_text_bold}>Этап стрельбы</span>.
            До конца фазы: Pulse rifle, Pulse carbine и Pulse pistol имеют тип Pistol 2
            (Действует только на 1 отряд).
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
            <span>EXPERIMENTAL WEAPONRY</span>
            <span>2 CP</span>
          </div>
          <div className={style.strat_text}>
            <span className={style.strat_text_bold}>Фаза стрельбы</span>.
            До конца фазы: выбранная модель совершает атаку, неуязвимые спасброски
            не могут быть предприняты против этой атаки.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
            <span>SAVIOUR PROTOCOLS</span>
            <span>1 CP</span>
          </div>
          <div className={style.strat_text}>
            <span className={style.strat_text_bold}>Любая фаза</span>.
            Если спасбросок не удался, выберите и уберите модель дрона в пределах 3" или 6" от юнита.
            Урон от атаки по основной цели снижен до 0.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
            <span>OUTFLANK</span>
            <span>1 CP</span>
          </div>
          <div className={style.strat_text}>
            <span className={style.strat_text_bold}>Фаза движения</span>.
            Вы можете убрать ваш отряд с поля в резерв, если он находится в 9" от края поля.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
            <span>ORBITAL UPLINK</span>
            <span>1 CP</span>
          </div>
          <div className={style.strat_text}>
            <span className={style.strat_text_bold}>Фаза стрельбы</span>.
            До конца фазы: При дальней атаки против этого вражеского
            подразделения, цель не получает преимуществ прикрытия от этой атаки.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
            <span>COORDINATED ENGAGEMENT</span>
            <span>1 CP</span>
          </div>
          <div className={style.strat_text}>
            <span className={style.strat_text_bold}>Фаза стрельбы</span>.
            Прежде чем выбирать юнита для стрельбы. Выберите одно вражеское подразделение и 2 подразделения
            SEPT из вашей армии, которые находятся в пределах 18" от этого вражеского подразделения и видны
            ему. До конца фазы, каждый раз, когда модель в одном из этих подразделений SEPT совершает атаку:
            Улучшите характеристику бронепробиваемости этой атаки на 1.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
            <span>DESIGNATED TASKING</span>
            <span>1 CP</span>
          </div>
          <div className={style.strat_text}>
            <span className={style.strat_text_bold}>Фаза командования</span>.
            Вы можете разделить ваш отряд на 2, где содержаться дроны. 
            Все дроны входят в новый отдельный отряд
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
            <span>PHOTON GRENADES</span>
            <span>1 CP</span>
          </div>
          <div className={style.strat_text}>
            <span className={style.strat_text_bold}>Фаза атаки противника</span>.
            Вычтите 2 из бросков заряда юнита с фотонными гранатами.
            Каждый раз, когда модель в этом подразделении совершает атаку, вычтите 1 из броска удара этой атаки.
          </div>
        </div>

      </section>
    </section >
  )
}

export { FireWarriors }