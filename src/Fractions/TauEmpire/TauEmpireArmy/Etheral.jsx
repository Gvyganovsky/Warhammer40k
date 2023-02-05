import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Ether from "../../../assets/TauEmpire/Etheral.jpg";

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
import hit from "../../../assets/icons/hit.svg";
import question from "../../../assets/icons/question.png";
import morale from "../../../assets/icons/morale.png";
import limitation from "../../../assets/icons/limitation.png";
import dice from "../../../assets/icons/dice.png";

const Etheral = () => {
  return (
    <section>
      <section className={style.content}>
        <img src={Ether} alt="Ether" className={style.combat_unit_img} />
        <div className={style.combat_unit_param}>
          <div className={style.combat_unit_param_block}>
            <img src={M} alt="M" className={style.param_img} />
            <div className={style.param_number}>6"</div>
          </div>

          <div className={style.combat_unit_param_block}>
            <img src={WS} alt="WS" className={style.param_img} />
            <div className={style.param_number}>3+</div>
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
            <div className={style.param_number}>4</div>
          </div>

          <div className={style.combat_unit_param_block}>
            <img src={A} alt="A" className={style.param_img} />
            <div className={style.param_number}>3</div>
          </div>

          <div className={style.combat_unit_param_block}>
            <img src={Ld} alt="Ld" className={style.param_img} />
            <div className={style.param_number}>10</div>
          </div>

          <div className={style.combat_unit_param_block}>
            <img src={Sv} alt="Sv" className={style.param_img} />
            <div className={style.param_number}>5+</div>
          </div>
        </div>
      </section >

      <section className={style.content}>
        <div className={style.line}></div>
        <div className={style.content_title}>Оружие</div>

        <div className={style.weapon_content}>
          <div className={style.weapon_block}>
            <div className={style.weapon_title}>Honour stave</div>
            <div className={style.weapon_block_info}>
              <div className={style.weapon_info}>
                <div className={style.weapon_text}>R</div>
                <div className={style.weapon_text}>-</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>Ml</div>
                <div className={style.weapon_text}>-</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>S</div>
                <div className={style.weapon_text}>+2</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>AP</div>
                <div className={style.weapon_text}>-1</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>D</div>
                <div className={style.weapon_text}>2</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.content}>
        <div className={style.line}></div>
        <div className={style.content_title}>Способности</div>

        <div className={style.abilities_block}>
          <div className={style.abilities_title_block}>
            <div className={style.abilities_title}>Embodiments of the Empire</div>
            <div className={style.block_symbol}>
              <img src={question} alt="question" className={style.abilities_symbol} />
            </div>
          </div>
          <div className={style.abilities_text}>
            Эта модель не может быть взята в FARSIGHT ENCLAVES.
          </div>
        </div>

        <div className={style.abilities_block}>
          <div className={style.abilities_title_block}>
            <div className={style.abilities_title}>Failure Is Not An Option (Aura)</div>
            <div className={style.block_symbol}>
              <img src={morale} alt="morale" className={style.abilities_symbol} />
            </div>
          </div>
          <div className={style.abilities_text}>
            Если отряд находится в пределах 6" от эфирного, модели
            этого отряда могут использовать лидерские характеристики
            этой модели вместо своих.
          </div>
        </div>

        <div className={style.abilities_block}>
          <div className={style.abilities_title_block}>
            <div className={style.abilities_title}>Etheral</div>
            <div className={style.block_symbol}>
              <img src={limitation} alt="limitation" className={style.abilities_symbol} />
            </div>
          </div>
          <div className={style.abilities_text}>
            Эфирный может знать только 2 заклинания. При броске D6: на 3+
            заклинание срабатывает и действует до начала следующей командной
            фазы.
          </div>
        </div>
      </section>

      <section className={style.content}>
        <div className={style.line}></div>
        <div className={style.content_title}>Заклинания</div>

        <div className={style.abilities_block}>
          <div className={style.abilities_title_block}>
            <div className={style.abilities_title}>STORM OF FIRE</div>
            <div className={style.block_symbol}>
              <img src={hit} alt="hit" className={style.abilities_symbol} />
            </div>
          </div>
          <div className={style.abilities_text}>
            Отряд в пределах 6" от Эфирного может совершать дальние
            атаки без каких-либод действий, которые он выполняет,
            терпя неудачу.
          </div>
        </div>

        <div className={style.abilities_block}>
          <div className={style.abilities_title_block}>
            <div className={style.abilities_title}>SENSE OF STONE</div>
            <div className={style.block_symbol}>
              <div className={style.symbol_text}>5+</div>
              <img src={Sv} alt="Sv" className={style.abilities_symbol} />
            </div>
          </div>
          <div className={style.abilities_text}>
            Отряд в пределах 6" от Эфирного при потере раны может кинуть
            1D6: на 5+ эта рана не теряется.
          </div>
        </div>

        <div className={style.abilities_block}>
          <div className={style.abilities_title_block}>
            <div className={style.abilities_title}>ZEPHYR’S GRACE</div>
            <div className={style.block_symbol}>
              <div className={style.symbol_text}>-1</div>
              <img src={hit} alt="hit" className={style.abilities_symbol} />
            </div>
          </div>
          <div className={style.abilities_text}>
            Отряд в пределах 6" от Эфирного, если по ним совершают дальнюю
            атаку и если они оставались неподвижными в предыдущей фазе движения,
            вычтите 1 из броска удара этой атаки.
          </div>
        </div>

        <div className={style.abilities_block}>
          <div className={style.abilities_title_block}>
            <div className={style.abilities_title}>POWER OF TIDES</div>
            <div className={style.block_symbol}>
              <div className={style.symbol_text}>+1</div>
              <img src={W} alt="W" className={style.abilities_symbol} />
            </div>
          </div>
          <div className={style.abilities_text}>
            Отряд в пределах 6" от Эфирного при совершении атаки, добавляйте
            1 к броску раны этой атаки.
          </div>
        </div>

        <div className={style.abilities_block}>
          <div className={style.abilities_title_block}>
            <div className={style.abilities_title}>UNIFYING MANTRA (AURA)</div>
            <div className={style.block_symbol}>
              <div className={style.symbol_text}>+1</div>
              <img src={morale} alt="morale" className={style.abilities_symbol} />
            </div>
          </div>
          <div className={style.abilities_text}>
            Отряд в пределах 6" от Эфирного может повторно провести тесты
            морального духа. Добавьте 1 к тестам на боевое истощение.
          </div>
        </div>

        <div className={style.abilities_block}>
          <div className={style.abilities_title_block}>
            <div className={style.abilities_title}>WISDOM OF THE GUIDES</div>
            <div className={style.block_symbol}>
              <div className={style.symbol_text}>+1</div>
              <img src={question} alt="question" className={style.abilities_symbol} />
            </div>
          </div>
          <div className={style.abilities_text}>
            Если этот призыв вдохновляет, вы получаете 1 CP.
          </div>
        </div>
      </section>

      <section className={style.content}>
        <div className={style.line}></div>
        <div className={style.content_title}>Стратегемы</div>

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
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
            <span>WISDOM OF THE MANY</span>
            <span>2 CP</span>
          </div>
          <div className={style.strat_text}>
            <span className={style.strat_text_bold}>Любая фаза, кроме фазы командования</span>.
            Выберите Эфирного, который не произносил заклинание в этот ход. Эта модель может
            произнести одно заклинание, который еще не было использовано в этот ход.
            Это заклинание автоматически вступает в силу до начала вашей следующей командной фазы.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
            <span>EMERGENCY DISPENSATION</span>
            <span>1 CP</span>
          </div>
          <div className={style.strat_text}>
            <span className={style.strat_text_bold}>Перед битвой</span>.
            Выберите вашего командира и дайте ему реликвию. Каждая реликвия в вашей
            армии должна быть уникальной. Юнит может иметь только 1 реликвию.
            (Если вы играете в Strike Force battle - можете использовать стратегему
            только 2 раза, Onslaught battle - 3 раза).
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
            <span>PROMISING PUPIL</span>
            <span>1 CP</span>
          </div>
          <div className={style.strat_text}>
            <span className={style.strat_text_bold}>Перед битвой</span>.
            Выберите вашего командира и дайте ему черту. Каждая черта в вашей
            армии должна быть уникальной. Юнит может иметь только 1 черту.
            (Если вы играете в Strike Force battle - можете использовать стратегему
            только 2 раза, Onslaught battle - 3 раза).
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
            <span>COORDINATED ENGAGEMENT</span>
            <span>1 CP</span>
          </div>
          <div className={style.strat_text}>
            <span className={style.strat_text_bold}>Фаза стрельбы</span>.
            До конца фазы: выберите 2 отряда в пределах 18" от вражеского отряда.
            Атаки могут быть совершены только по этому вражескому отряду, бронебойность
            атак увеличьте на 1.
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

      </section>


    </section>
  )
}

export { Etheral }