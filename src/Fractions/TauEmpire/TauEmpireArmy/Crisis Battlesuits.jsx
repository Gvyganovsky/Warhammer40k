import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import CrisisBattlesuit from "../../../assets/TauEmpire/Crisis Battlesuits.png";

import {
  FOCUSED_FIRE,
  DROP_ZONE_CLEAR,
  DYNAMIC_OFFENSIVE,
  EXPERIMENTAL_WEAPONRY,
  SAVIOUR_PROTOCOLS,
  FAIL_SAFE_DETONATOR,
  OUTFLANK,
  ORBITAL_UPLINK,
  COORDINATED_ENGAGEMENT,
  DESIGNATED_TASKING,
  STRIKE_AND_FADE,
  REPULSOR_IMPACT_FIELD,
  IONISED_SHOCKFIELD
} from "../TauEmpireStrat";

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
import shooting from "../../../assets/icons/shooting.png";

const CrisisBattlesuits = () => {
  return (
    <section>
      <section className={style.content}>
        <img src={CrisisBattlesuit} alt="CrisisBattlesuit" className={style.combat_unit_img} />
        <div className={style.combat_unit_param}>
          <div className={style.combat_unit_param_block}>
            <img src={M} alt="M" className={style.param_img} />
            <div className={style.param_number}>10"</div>
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
            <div className={style.param_number}>5</div>
          </div>

          <div className={style.combat_unit_param_block}>
            <img src={T} alt="T" className={style.param_img} />
            <div className={style.param_number}>5</div>
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
        <div className={style.content_title}>Оружие</div>
        <div className={style.weapon_content}>
          <div className={style.block_text_weapon}>
            <div className={style.weapon_block}>
              <div className={style.weapon_title}>Air frag proj</div>
              <div className={style.weapon_block_info}>
                <div className={style.weapon_info}>
                  <div className={style.weapon_text}>R</div>
                  <div className={style.weapon_text}>24"</div>
                </div>

                <div className={style.weapon_info}>
                  <div className={style.weapon_text}>As</div>
                  <div className={style.weapon_text}>D6</div>
                </div>

                <div className={style.weapon_info}>
                  <div className={style.weapon_text}>S</div>
                  <div className={style.weapon_text}>4</div>
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
            <div className={style.weapon_info_text}>*Может поражать юнитов, которые не видны владельцу.</div>
          </div>

          <div className={style.block_text_weapon}>
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
          </div>

          <div className={style.block_text_weapon}>
            <div className={style.weapon_blockTwo}>
              <div className={style.weapon_title}>Cyclic ion bl. S</div>
              <div className={style.weapon_block_info}>
                <div className={style.weapon_info}>
                  <div className={style.weapon_text}>R</div>
                  <div className={style.weapon_text}>18"</div>
                </div>

                <div className={style.weapon_info}>
                  <div className={style.weapon_text}>As</div>
                  <div className={style.weapon_text}>3</div>
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
                  <div className={style.weapon_text}>1</div>
                </div>
              </div>
            </div>
          </div>

          <div className={style.block_text_weapon}>
            <div className={style.weapon_blockTwo}>
              <div className={style.weapon_title}>Cyclic ion bl. O</div>
              <div className={style.weapon_block_info}>
                <div className={style.weapon_info}>
                  <div className={style.weapon_text}>R</div>
                  <div className={style.weapon_text}>18"</div>
                </div>

                <div className={style.weapon_info}>
                  <div className={style.weapon_text}>As</div>
                  <div className={style.weapon_text}>3</div>
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
                  <div className={style.weapon_text}>2</div>
                </div>
              </div>
            </div>
            <div className={style.weapon_info_text}>*Если выпала 1 на попадание, юнит получает урон.</div>
          </div>

          <div className={style.block_text_weapon}>
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
            <div className={style.weapon_info_text}>*Если атака в половине дистанции, урон D6+2.</div>
          </div>

          <div className={style.block_text_weapon}>
            <div className={style.weapon_block}>
              <div className={style.weapon_title}>Missile pod</div>
              <div className={style.weapon_block_info}>
                <div className={style.weapon_info}>
                  <div className={style.weapon_text}>R</div>
                  <div className={style.weapon_text}>30"</div>
                </div>

                <div className={style.weapon_info}>
                  <div className={style.weapon_text}>As</div>
                  <div className={style.weapon_text}>2</div>
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
          </div>

          <div className={style.block_text_weapon}>
            <div className={style.weapon_block}>
              <div className={style.weapon_title}>Plasma rifle</div>
              <div className={style.weapon_block_info}>
                <div className={style.weapon_info}>
                  <div className={style.weapon_text}>R</div>
                  <div className={style.weapon_text}>30"</div>
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
                  <div className={style.weapon_text}>3</div>
                </div>
              </div>
            </div>
          </div>

          <div className={style.block_text_weapon}>
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
            <div className={style.weapon_info_text}>*Атака автоматически попадает в цель.</div>
          </div>
        </div>
      </section>

      <section className={style.content}>
        <div className={style.line}></div>
        <div className={style.content_title}>Другое оружие</div>
        <div className={style.weapon_content}>

          <div className={style.weaponOther_block}>
            <div className={style.abilities_title_block}>
              <div className={style.abilities_title}>Early warning override</div>
              <img src={shooting} alt="shooting" className={style.abilities_symbol} />
            </div>
            <div className={style.weaponOther_text}>
              <div>Когда носитель запускает Overwatch, он получает попадания по неизмененным броскам 5+ вместо 6.</div>
              <div>Каждый раз, когда вы используете стратагему Fire Overwatch, если носитель находится на поле боя и его
                подразделение выбрано для Fire Overwatch, уменьшайте стоимость CP этой стратагемы на 1.
              </div>
            </div>
          </div>

          <div className={style.weaponOther_block}>
            <div className={style.abilities_title_block}>
              <div className={style.abilities_title}>Multi-tracker</div>
              <img src={A} alt="A" className={style.abilities_symbol} />
            </div>
            <div className={style.weaponOther_text}>
              Когда дальняя атака нацелена на юнита, содержащий 6 или более моделей, немодифицированный
              бросок 6 ударов дает 1 дополнительный удар. Максимум 1 на модель.
            </div>
          </div>

          <div className={style.weaponOther_block}>
            <div className={style.abilities_title_block}>
              <div className={style.abilities_title}>Target lock</div>
              <img src={hit} alt="hit" className={style.abilities_symbol} />
            </div>
            <div className={style.weaponOther_text}>
              Когда носитель совершает дальнюю атаку, цель не получает преимущества легкого прикрытия от этой атаки.
            </div>
          </div>

          <div className={style.weaponOther_block}>
            <div className={style.abilities_title_block}>
              <div className={style.abilities_title}>Velocity tracker</div>
              <img src={BS} alt="BS" className={style.abilities_symbol} />
            </div>
            <div className={style.weaponOther_text}>
              Когда носитель совершает атаку дальнего боя против юнита, который может ЛЕТАТЬ, добавляйте 1
              к броску попадания этой атаки. Максимум 1 на модель.
            </div>
          </div>

          <div className={style.weaponOther_block}>
            <div className={style.abilities_title_block}>
              <div className={style.abilities_title}>Shield generator</div>
              <img src={Sv} alt="Sv" className={style.abilities_symbol} />
            </div>
            <div className={style.weaponOther_text}>
              У носителя есть 4+ неуязвимых сейва.
            </div>
          </div>

          <div className={style.weaponOther_block}>
            <div className={style.abilities_title_block}>
              <div className={style.abilities_title}>Iridium battlesuit</div>
              <img src={Sv} alt="Sv" className={style.abilities_symbol} />
            </div>
            <div className={style.weaponOther_text}>
              Спасбросок сохранения 2+.
            </div>
          </div>

        </div>
      </section>

      <section className={style.content}>
        <div className={style.line}></div>
        <div className={style.content_title}>Стратегемы</div>
        <FOCUSED_FIRE />
        <DROP_ZONE_CLEAR />
        <DYNAMIC_OFFENSIVE />
        <EXPERIMENTAL_WEAPONRY />
        <SAVIOUR_PROTOCOLS />
        <FAIL_SAFE_DETONATOR />
        <OUTFLANK />
        <ORBITAL_UPLINK />
        <COORDINATED_ENGAGEMENT />
        <DESIGNATED_TASKING />
        <STRIKE_AND_FADE />
        <REPULSOR_IMPACT_FIELD />
        <IONISED_SHOCKFIELD />
      </section>
    </section>
  )
}

export { CrisisBattlesuits }