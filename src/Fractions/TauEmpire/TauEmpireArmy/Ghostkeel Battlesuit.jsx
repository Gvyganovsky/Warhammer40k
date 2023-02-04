import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Ghostkeel_Battlesuit from "../../../assets/TauEmpire/Tau XV95 Ghostkeel Battlesuit.png";

import M from "../../../assets/icons/M.png";
import WS from "../../../assets/icons/WS.png";
import BS from "../../../assets/icons/BS.png";
import S from "../../../assets/icons/S.png";
import T from "../../../assets/icons/T.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";
import Ld from "../../../assets/icons/Ld.png";
import Sv from "../../../assets/icons/Sv.png";

import general from "../../../assets/icons/general.png";
import shooting from "../../../assets/icons/shooting.png";

import hit from "../../../assets/icons/hit.svg";
import location from "../../../assets/icons/location.png";
import skull from "../../../assets/icons/skull.png";

const GhostkeelBattlesuit = () => {
  return (
    <section>
      <section className={style.content}>
        <img src={Ghostkeel_Battlesuit} alt="Ghostkeel_Battlesuit" className={style.combat_unit_img} />
        <div className={style.combat_unit_param}>
          <div className={style.combat_unit_param_block}>
            <img src={M} alt="M" className={style.param_img} />
            <div className={style.param_number}>12"</div>
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
            <div className={style.param_number}>6</div>
          </div>

          <div className={style.combat_unit_param_block}>
            <img src={T} alt="T" className={style.param_img} />
            <div className={style.param_number}>7</div>
          </div>

          <div className={style.combat_unit_param_block}>
            <img src={W} alt="W" className={style.param_img} />
            <div className={style.param_number}>12</div>
          </div>

          <div className={style.combat_unit_param_block}>
            <img src={A} alt="A" className={style.param_img} />
            <div className={style.param_number}>3</div>
          </div>

          <div className={style.combat_unit_param_block}>
            <img src={Ld} alt="Ld" className={style.param_img} />
            <div className={style.param_number}>9</div>
          </div>

          <div className={style.combat_unit_param_block}>
            <img src={Sv} alt="Sv" className={style.param_img} />
            <div className={style.param_number}>3+</div>
          </div>
        </div>
      </section>

      <section className={style.content}>
        <div className={style.line}></div>
        <div className={style.content_title}>Изменение характеристик от урона</div>
        <div className={style.damage_content}>
          <div className={style.damage_block}>
            <img src={W} alt="W" className={style.param_img} />
            <div className={style.damage_nubmer}>7-12</div>
            <div className={style.damage_nubmer}>4-6</div>
            <div className={style.damage_nubmer}>1-3</div>
          </div>

          <div className={style.damage_block}>
            <img src={M} alt="M" className={style.param_img} />
            <div className={style.damage_nubmer}>12"</div>
            <div className={style.damage_nubmer}>8"</div>
            <div className={style.damage_nubmer}>4"</div>
          </div>

          <div className={style.damage_block}>
            <img src={BS} alt="BS" className={style.param_img} />
            <div className={style.damage_nubmer}>4+</div>
            <div className={style.damage_nubmer}>5+</div>
            <div className={style.damage_nubmer}>5+</div>
          </div>

          <div className={style.damage_block}>
            <img src={A} alt="A" className={style.param_img} />
            <div className={style.damage_nubmer}>3</div>
            <div className={style.damage_nubmer}>D3</div>
            <div className={style.damage_nubmer}>1</div>
          </div>
        </div>
      </section>

      <section className={style.content}>
        <div className={style.line}></div>
        <div className={style.content_title}>Оружие</div>

        <div className={style.weapon_content}>
          <div className={style.weapon_block}>
            <div className={style.weapon_title}>Burst cannon</div>
            <div className={style.weapon_block_info}>
              <div className={style.weapon_info}>
                <div className={style.weapon_text}>R</div>
                <div className={style.weapon_text}>18"</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>As</div>
                <div className={style.weapon_text}>6</div>
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
            <div className={style.weapon_title}>T’au flamer</div>
            <div className={style.weapon_block_info}>
              <div className={style.weapon_info}>
                <div className={style.weapon_text}>R</div>
                <div className={style.weapon_text}>12"</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>As</div>
                <div className={style.weapon_text}>D6+2</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>S</div>
                <div className={style.weapon_text}>4</div>
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

          <div className={style.weapon_blockTwo}>
            <div className={style.weapon_title}>Cyclic ion raker St</div>
            <div className={style.weapon_block_info}>
              <div className={style.weapon_info}>
                <div className={style.weapon_text}>R</div>
                <div className={style.weapon_text}>36"</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>Hv</div>
                <div className={style.weapon_text}>6</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>S</div>
                <div className={style.weapon_text}>7</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>AP</div>
                <div className={style.weapon_text}>-2</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>D</div>
                <div className={style.weapon_text}>2</div>
              </div>
            </div>
          </div>

          <div className={style.weapon_blockTwo}>
            <div className={style.weapon_title}>Cyclic ion raker Ov</div>
            <div className={style.weapon_block_info}>
              <div className={style.weapon_info}>
                <div className={style.weapon_text}>R</div>
                <div className={style.weapon_text}>36"</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>Hv</div>
                <div className={style.weapon_text}>6</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>S</div>
                <div className={style.weapon_text}>8</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>AP</div>
                <div className={style.weapon_text}>-2</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>D</div>
                <div className={style.weapon_text}>3</div>
              </div>
            </div>
          </div>

          <div className={style.weapon_block}>
            <div className={style.weapon_title}>Fusion blaster</div>
            <div className={style.weapon_block_info}>
              <div className={style.weapon_info}>
                <div className={style.weapon_text}>R</div>
                <div className={style.weapon_text}>18"</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>As</div>
                <div className={style.weapon_text}>1</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>S</div>
                <div className={style.weapon_text}>8</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>AP</div>
                <div className={style.weapon_text}>-4</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>D</div>
                <div className={style.weapon_text}>D6</div>
              </div>
            </div>
          </div>

          <div className={style.weapon_block}>
            <div className={style.weapon_title}>Fusion collider</div>
            <div className={style.weapon_block_info}>
              <div className={style.weapon_info}>
                <div className={style.weapon_text}>R</div>
                <div className={style.weapon_text}>24"</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>Hv</div>
                <div className={style.weapon_text}>3</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>S</div>
                <div className={style.weapon_text}>9</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>AP</div>
                <div className={style.weapon_text}>-4</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>D</div>
                <div className={style.weapon_text}>D6</div>
              </div>
            </div>
          </div>

          <div className={style.weapon_block}>
            <div className={style.weapon_title}>Ghostkeel fists</div>
            <div className={style.weapon_block_info}>
              <div className={style.weapon_info}>
                <div className={style.weapon_text}>Ml</div>
                <div className={style.weapon_text}>-</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>Ml</div>
                <div className={style.weapon_text}>-</div>
              </div>

              <div className={style.weapon_info}>
                <div className={style.weapon_text}>S</div>
                <div className={style.weapon_text}>+1</div>
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
        <div className={style.content_title}>Другое оружие</div>
        <div className={style.weapon_content}>

          <div className={style.weaponOther_block}>
            <div className={style.abilities_title_block}>
              <div className={style.abilities_title}>Drone controller</div>
              <img src={general} alt="general" className={style.abilities_symbol} />
            </div>
            <div className={style.weaponOther_text}>
              На этапе командования вы можете выбрать один дрон в пределах 6"
              от носителя. До начала вашей следующей командной фазы:
            </div>
            <div>Модели дронов в этом подразделении имеют BS 4+.</div>
            <div>Модели боевых дронов в этом подразделении теряют способность «Протокола идентификации угрозы».</div>
          </div>

          <div className={style.weaponOther_block}>
            <div className={style.abilities_title_block}>
              <div className={style.abilities_title}>Early warning override</div>
              <img src={shooting} alt="shooting" className={style.abilities_symbol} />
            </div>
            <div className={style.weaponOther_text}>
              Каждый раз, когда носитель запускает Overwatch, он получает попадания по неизмененным
              броскам 5+ вместо 6+.
            </div>
            <div className={style.weaponOther_text}>
              Каждый раз, когда вы используете стратагему "Огненный дозор", если носитель находится на
              поле боя и его подразделение выбрано для "Огненного дозора", уменьшайте стоимость CP этой
              стратагемы на 1СP.
            </div>
          </div>

          <div className={style.weaponOther_block}>
            <div className={style.abilities_title_block}>
              <div className={style.abilities_title}>Flare launcher</div>
              <img src={shooting} alt="shooting" className={style.abilities_symbol} />
            </div>
            <div className={style.weaponOther_text}>
              Каждый раз, когда носитель теряет рану в результате дальней атаки с характеристикой силы 7
              или более, бросайте один D6: при 5+ эта рана не теряется.
            </div>
          </div>

        </div>
      </section>

      <section className={style.content}>
        <div className={style.line}></div>
        <div className={style.content_title}>Способности</div>

        <div className={style.abilities_block}>
          <div className={style.abilities_title_block}>
            <div className={style.abilities_title}>Electrowarfare Suite</div>
            <div className={style.block_symbol}>
              <div className={style.symbol_text}>-1</div>
              <img src={hit} alt="hit" className={style.abilities_symbol} />
            </div>
          </div>
          <div className={style.abilities_text}>
            Каждый раз, когда дальняя атака нацелена на этого юнита, вычтите 1 из броска попадания этой атаки.
          </div>
        </div>

        <div className={style.abilities_block}>
          <div className={style.abilities_title_block}>
            <div className={style.abilities_title}>Infiltrator</div>
            <div className={style.block_symbol}>
              <div className={style.symbol_text}>9"</div>
              <img src={location} alt="location" className={style.abilities_symbol} />
            </div>
          </div>
          <div className={style.abilities_text}>
            Во время развертывания, юнита можно установить в любом месте поля боя, которое
            находится более чем в 9" от зоны развертывания противника и любых вражеских моделей.
          </div>
        </div>

        <div className={style.abilities_block}>
          <div className={style.abilities_title_block}>
            <div className={style.abilities_title}>Infiltrator</div>
            <div className={style.block_symbol}>
              <img src={skull} alt="skull" className={style.abilities_symbol} />
            </div>
          </div>
          <div className={style.abilities_text}>
            Когда модель этого юнита будет уничтожена, бросьте 1D6,
            прежде чем удалить его из игры. На 6 он взрывается, и каждый
            юнит в пределах 6 " получает урон D3.
          </div>
        </div>
      </section>

      <section className={style.content}>
        <div className={style.line}></div>
        <div className={style.content_title}>Стратегемы</div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
            <span>EXPERIMENTAL WEAPONRY</span>
            <span>2 CP</span>
          </div>
          <div className={style.strat_text}>
            Используйте эту стратегию на <span className={style.strat_text_bold}>этапе стрельбы</span>.
            Выберите одну модель в этом подразделении и одно оружие, которым оснащена
            эта модель. До конца фазы, каждый раз, когда эта модель совершает атаку этим
            оружием, неуязвимые спасброски не могут быть предприняты против этой атаки.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
            <span>SAVIOUR PROTOCOLS</span>
            <span>1 CP</span>
          </div>
          <div className={style.strat_text}>
            Используйте эту стратегию в <span className={style.strat_text_bold}>любой фазе</span>,
            когда спасбросок не удался для модели в подразделении SEPT из вашей армии. Выберите одну
            модель дрона SEPT в пределах 3" или 6" от этого устройства, если оно содержит модель,
            оснащенную дроном. Эта модель дрона уничтожена, и характеристика урона от этой атаки
            изменена на 0.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
            <span>FAIL-SAFE DETONATOR</span>
            <span>1 CP</span>
          </div>
          <div className={style.strat_text}>
            Используйте эту стратегию на <span className={style.strat_text_bold}>любой фазе</span>,
            когда модель боевого костюма из вашей армии будет уничтожена. Прежде чем удалить эту
            модель из игры, вместо использования каких-либо правил, которые срабатывают при уничтожении
            этой модели, бросьте по одному D6 для каждого юнита в пределах 3" от этой модели, добавив
            1 к броску, если у уничтоженной модели характеристика ран 12 или более: на 3-5, этот юнит
            получает D3 смертельных ранения; на 6+, этот юнит получает 3 смертельных ранения.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
            <span>BACKUP AI</span>
            <span>1 CP</span>
          </div>
          <div className={style.strat_text}>
            Используйте эту стратегию на этапе <span className={style.strat_text_bold}>вашего командования</span>.
            Выберите одну модель в вашей армии. До начала вашей следующей фазы командования,
            считается, что у этой модели остались полные раны, чтобы определить, какие характеристики
            в ее профиле использовать.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
            <span>ORBITAL UPLINK</span>
            <span>1 CP</span>
          </div>
          <div className={style.strat_text}>
            Используйте эту стратегию на <span className={style.strat_text_bold}>этапе стрельбы</span>.
            Выберите одного вражеского юнита. До конца фазы, каждый раз, когда модель в подразделении
            SA'CEA из вашей армии совершает дальнюю атаку против этого вражеского подразделения, цель
            не получает преимуществ прикрытия от этой атаки.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
            <span>WALL OF MIRRORS</span>
            <span>1 CP</span>
          </div>
          <div className={style.strat_text}>
            Используйте эту стратегию в конце вашей <span className={style.strat_text_bold}>фазы движения</span>.
            Выберите один костюм НЕВИДИМКУ/ПРИЗРАК из вашей армии, который полностью находится в пределах 9" от
            любого края поля боя. Уберите это подразделение с поля боя. На этапе подкрепления вашей следующей фазы
            перемещения вы можете вернуть это подразделение на поле боя в любом месте, которое находится в пределах
            9" от любого края поля боя и более чем в 9" от любых вражеских моделей. Если битва заканчивается, а этого
            подразделения нет на поле боя, оно уничтожается.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
            <span>COORDINATED ENGAGEMENT</span>
            <span>1 CP</span>
          </div>
          <div className={style.strat_text}>
            Используйте эту стратегию на <span className={style.strat_text_bold}>этапе стрельбы</span>,
            прежде чем выбирать юнита для стрельбы. Выберите одно вражеское подразделение и 2 подразделения
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
            Используйте эту стратегию на этапе <span className={style.strat_text_bold}>вашего командования</span>.
            Вы можете разделить ваш отряд на 2, где содержаться дроны. Все дроны входят в новый отдельный отряд
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
            <span>STRIKE AND FADE</span>
            <span>1 CP / 2 CP</span>
          </div>
          <div className={style.strat_text}>
            Используйте эту стратегию в начале вашей <span className={style.strat_text_bold}>фазы стрельбы</span>.
            Выберите отряд с реактивным ранцем. Вы можете стрелять с помощью этого устройства, и тогда
            оно может совершать нормальное движение до 6 дюймов. Это устройство не может стрелять снова
            на этом этапе. Если это подразделение содержит 5 или меньше моделей (исключая модели дронов),
            эта стратегия стоит 1 CP.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
            <span>REPULSOR IMPACT FIELD</span>
            <span>1 CP</span>
          </div>
          <div className={style.strat_text}>
            Используйте эту стратегию на этапе <span className={style.strat_text_bold}>атаки вашего противника</span>,
            когда в качестве цели атаки выбирается боекостюм из вашей армии. До конца фазы вычтите 2 из бросков
            заряда.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
            <span>IONISED SHOCKFIELD</span>
            <span>2 CP</span>
          </div>
          <div className={style.strat_text}>
            Используйте эту стратегию на <span className={style.strat_text_bold}>этапе стрельбы</span>,
            когда модель во вражеском подразделении уничтожена в результате атаки, произведенной ионным
            оружием моделью SEPT из вашей армии. До начала вашей следующей фазы стрельбы на этот вражеский
            юнит не влияют способности ауры других вражеских юнитов.
          </div>
        </div>

      </section>
    </section>
  )
}

export { GhostkeelBattlesuit }