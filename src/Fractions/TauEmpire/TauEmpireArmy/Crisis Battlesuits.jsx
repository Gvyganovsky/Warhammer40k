import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import CrisisBattlesuit from "../../../assets/TauEmpire/Crisis Battlesuits.png";

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

const CrisisBattlesuits = () => {
  return (
    <div>
      <section className={style.content}>
        <img src={CrisisBattlesuit} alt="CrisisBattlesuits" className={style.combat_unit_img} />
        <div className={style.combat_unit_param}>
          <div className={style.combat_unit_param_three}>
            <div className={style.combat_unit_param_block}>
              <img src={M} alt="M" className={style.param_img} />
              <div className={style.param_number}>8</div>
            </div>

            <div className={style.combat_unit_param_block}>
              <img src={WS} alt="WS" className={style.param_img} />
              <div className={style.param_number}>5+</div>
            </div>

            <div className={style.combat_unit_param_block}>
              <img src={BS} alt="BS" className={style.param_img} />
              <div className={style.param_number}>4+</div>
            </div>
          </div>

          <div className={style.combat_unit_param_three}>
            <div className={style.combat_unit_param_block}>
              <img src={S} alt="S" className={style.param_img} />
              <div className={style.param_number}>5</div>
            </div>

            <div className={style.combat_unit_param_block}>
              <img src={T} alt="T" className={style.param_img} />
              <div className={style.param_number}>5</div>
            </div>

            <div className={style.combat_unit_param_block}>
              <img src={W} alt="W" className={style.param_img} />
              <div className={style.param_number}>3</div>
            </div>
          </div>

          <div className={style.combat_unit_param_three}>
            <div className={style.combat_unit_param_block}>
              <img src={A} alt="A" className={style.param_img} />
              <div className={style.param_number}>2</div>
            </div>

            <div className={style.combat_unit_param_block}>
              <img src={Ld} alt="Ld" className={style.param_img} />
              <div className={style.param_number}>7</div>
            </div>

            <div className={style.combat_unit_param_block}>
              <img src={Sv} alt="Sv" className={style.param_img} />
              <div className={style.param_number}>3+</div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.content}>
        <div className={style.line}></div>
        <div className={style.content_title}>Оружие</div>
        <div className={style.weapon}>
          <div className={style.gun_title}>Airbursting fragmentation projector</div>

          <div className={style.weapon_content}>
            <img src={range} alt="range" className={style.param_img} />
            <div className={style.gun_number}>24"</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>Assault</div>
            <div className={style.gun_number}>D6"</div>
          </div>

          <div className={style.weapon_content}>
            <img src={S} alt="S" className={style.param_img} />
            <div className={style.gun_number}>4</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>AP</div>
            <div className={style.gun_number}>-1</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>D</div>
            <div className={style.gun_number}>1
            </div>
          </div>
        </div>

        <div className={style.weapon}>
          <div className={style.gun_title}>Burst cannon</div>

          <div className={style.weapon_content}>
            <img src={range} alt="range" className={style.param_img} />
            <div className={style.gun_number}>18"</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>Assault</div>
            <div className={style.gun_number}>6</div>
          </div>

          <div className={style.weapon_content}>
            <img src={S} alt="S" className={style.param_img} />
            <div className={style.gun_number}>5</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>AP</div>
            <div className={style.gun_number}>0</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>D</div>
            <div className={style.gun_number}>1</div>
          </div>
        </div>

        <div className={style.weapon}>
          <div className={style.gun_title}>Cyclic ion blaster S</div>

          <div className={style.weapon_content}>
            <img src={range} alt="range" className={style.param_img} />
            <div className={style.gun_number}>18"</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>Assault</div>
            <div className={style.gun_number}>3</div>
          </div>

          <div className={style.weapon_content}>
            <img src={S} alt="S" className={style.param_img} />
            <div className={style.gun_number}>7</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>AP</div>
            <div className={style.gun_number}>-2</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>D</div>
            <div className={style.gun_number}>1</div>
          </div>
        </div>

        <div className={style.weapon}>
          <div className={style.gun_title}>Cyclic ion blaster O</div>

          <div className={style.weapon_content}>
            <img src={range} alt="range" className={style.param_img} />
            <div className={style.gun_number}>18"</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>Assault</div>
            <div className={style.gun_number}>3</div>
          </div>

          <div className={style.weapon_content}>
            <img src={S} alt="S" className={style.param_img} />
            <div className={style.gun_number}>8</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>AP</div>
            <div className={style.gun_number}>-2</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>D</div>
            <div className={style.gun_number}>2</div>
          </div>
        </div>

        <div className={style.weapon}>
          <div className={style.gun_title}>Fusion blaster</div>

          <div className={style.weapon_content}>
            <img src={range} alt="range" className={style.param_img} />
            <div className={style.gun_number}>18"</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>Assault</div>
            <div className={style.gun_number}>1</div>
          </div>

          <div className={style.weapon_content}>
            <img src={S} alt="S" className={style.param_img} />
            <div className={style.gun_number}>8</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>AP</div>
            <div className={style.gun_number}>-4</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>D</div>
            <div className={style.gun_number}>D6</div>
          </div>
        </div>

        <div className={style.weapon}>
          <div className={style.gun_title}>Missile pod</div>

          <div className={style.weapon_content}>
            <img src={range} alt="range" className={style.param_img} />
            <div className={style.gun_number}>30"</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>Assault</div>
            <div className={style.gun_number}>2</div>
          </div>

          <div className={style.weapon_content}>
            <img src={S} alt="S" className={style.param_img} />
            <div className={style.gun_number}>7</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>AP</div>
            <div className={style.gun_number}>-2</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>D</div>
            <div className={style.gun_number}>2</div>
          </div>
        </div>

        <div className={style.weapon}>
          <div className={style.gun_title}>Plasma rifle</div>

          <div className={style.weapon_content}>
            <img src={range} alt="range" className={style.param_img} />
            <div className={style.gun_number}>30"</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>Assault</div>
            <div className={style.gun_number}>1</div>
          </div>

          <div className={style.weapon_content}>
            <img src={S} alt="S" className={style.param_img} />
            <div className={style.gun_number}>8</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>AP</div>
            <div className={style.gun_number}>-4</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>D</div>
            <div className={style.gun_number}>3</div>
          </div>
        </div>

        <div className={style.weapon}>
          <div className={style.gun_title}>T’au flamer</div>

          <div className={style.weapon_content}>
            <img src={range} alt="range" className={style.param_img} />
            <div className={style.gun_number}>12"</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>Assault</div>
            <div className={style.gun_number}>D6+2</div>
          </div>

          <div className={style.weapon_content}>
            <img src={S} alt="S" className={style.param_img} />
            <div className={style.gun_number}>4</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>AP</div>
            <div className={style.gun_number}>0</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>D</div>
            <div className={style.gun_number}>1</div>
          </div>
        </div>
      </section>

      <section className={style.content}>
        <div className={style.line}></div>
        <div className={style.content_title}>Другое оружие</div>
        <div className={style.weapon}>
          <div className={style.gun_title}>Advanced targeting system</div>
          <div className={style.weapon_info}>
            Модель, оснащенная усовершенствованной системой наведения, увеличивает характеристику AP
            всего своего оружия на 1 (например, AP, равный 0, становится -1, AP, равный -1, становится -2).
          </div>
        </div>

        <div className={style.weapon}>
          <div className={style.gun_title}>Counterfire defence system</div>
          <div className={style.weapon_info}>
            Модель, оснащенная системой защиты от ответного огня, повторяет неудачные броски при стрельбе Overwatch.
          </div>
        </div>
      </section>

      <section className={style.content}>
        <div className={style.line}></div>
        <div className={style.content_title}>Способности</div>
        <div className={style.abilities_block}>
          <div className={style.abilities_title_block}>
            <div className={style.abilities_title}>Удар Манты</div>
            <div className={style.block_symbol}>
              <div className={style.symbol_text}>9"</div>
              <img src={location} alt="location" className={style.abilities_symbol} />
            </div>
          </div>
          <div className={style.abilities_text}>
            Вы можете разместить это подразделение и любые сопровождающие его
            дроны в трюме Манты вместо того, чтобы размещать их на поле боя.
            В конце любой из ваших фаз передвижения они могут использовать удар Манты,
            чтобы вступить в бой – разместите их в любом месте поля боя,
            которое находится более чем на 9" от любых вражеских моделей.
          </div>
        </div>
      </section>
    </div>
  )
}

export { CrisisBattlesuits }