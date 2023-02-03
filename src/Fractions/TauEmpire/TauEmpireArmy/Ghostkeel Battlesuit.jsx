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

import hit from "../../../assets/icons/hit.svg";
import location from "../../../assets/icons/location.png";

import general from "../../../assets/icons/general.png";
import shooting from "../../../assets/icons/shooting.png";

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
            <div className={style.param_number}>6</div>
          </div>

          <div className={style.combat_unit_param_block}>
            <img src={W} alt="W" className={style.param_img} />
            <div className={style.param_number}>10</div>
          </div>

          <div className={style.combat_unit_param_block}>
            <img src={A} alt="A" className={style.param_img} />
            <div className={style.param_number}>3</div>
          </div>

          <div className={style.combat_unit_param_block}>
            <img src={Ld} alt="Ld" className={style.param_img} />
            <div className={style.param_number}>8</div>
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
            <div className={style.damage_nubmer}>6-10+</div>
            <div className={style.damage_nubmer}>3-5</div>
            <div className={style.damage_nubmer}>1-2</div>
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
            <div className={style.damage_nubmer}>2</div>
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
            <div className={style.abilities_title}>Набор электрошокеров Ghostkeel</div>
            <div className={style.block_symbol}>
              <div className={style.symbol_text}>-1</div>
              <img src={hit} alt="hit" className={style.abilities_symbol} />
            </div>
          </div>
          <div className={style.abilities_text}>
            Ваш противник вычетает 1 из бросков попадания для моделей, атакующих
            эту модель с расстояния более 6".
          </div>
        </div>

        <div className={style.abilities_block}>
          <div className={style.abilities_title_block}>
            <div className={style.abilities_title}>Лазутчики</div>
            <div className={style.block_symbol}>
              <div className={style.symbol_text}>12"</div>
              <img src={location} alt="location" className={style.abilities_symbol} />
            </div>
          </div>
          <div className={style.abilities_text}>
            Во время развертывания это подразделение и любые сопровождающие его дроны
            могут быть установлены в любом месте поля боя, которое находится более чем
            в 12" от любого вражеского подразделения.
          </div>
        </div>
      </section>
    </section>
  )
}

export { GhostkeelBattlesuit }