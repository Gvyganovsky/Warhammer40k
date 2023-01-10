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

const FireWarriors = () => {
  return (
    <div>
      <section className={style.content}>
        <img src={FireWarrior} alt="FireWarriors" className={style.combat_unit_img} />
        <div className={style.combat_unit_param}>
          <div className={style.combat_unit_param_three}>
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
          </div>

          <div className={style.combat_unit_param_three}>
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
          </div>

          <div className={style.combat_unit_param_three}>
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
        </div>
      </section>

      <section className={style.content}>
        <div className={style.line}></div>
        <div className={style.content_title}>Оружие</div>
        <div className={style.weapon}>
          <div className={style.gun_title}>Pulse rifle</div>

          <div className={style.weapon_content}>
            <img src={range} alt="range" className={style.param_img} />
            <div className={style.gun_number}>36"</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>Rapid Fire</div>
            <div className={style.gun_number}>1</div>
          </div>

          <div className={style.weapon_content}>
            <img src={S} alt="S" className={style.param_img} />
            <div className={style.gun_number}>5</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>AP</div>
            <div className={style.gun_number}>-1</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>D</div>
            <div className={style.gun_number}>1</div>
          </div>
        </div>

        <div className={style.weapon}>
          <div className={style.gun_title}>Pulse carbine</div>

          <div className={style.weapon_content}>
            <img src={range} alt="range" className={style.param_img} />
            <div className={style.gun_number}>24"</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>Assault</div>
            <div className={style.gun_number}>2</div>
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
          <div className={style.gun_title}>Pulse pistol</div>

          <div className={style.weapon_content}>
            <img src={range} alt="range" className={style.param_img} />
            <div className={style.gun_number}>12"</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>Pistol</div>
            <div className={style.gun_number}>1</div>
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
      </section>

      <section className={style.content}>
        <div className={style.line}></div>
        <div className={style.content_title}>Стратагемы</div>
        <div className={style.strat}>
          <div className={style.stratName_9k}>
            <span>СОСРЕДОТОЧЕННЫЙ ОГОНЬ</span>
            <span>2 CP</span>
          </div>
          <div className={style.stratName_info}>
            Используйте эту стратегию на этапе стрельбы, когда вражеская модель теряет какие-либо
            ранения в результате атаки, произведенной моделью T'AU SEPT из вашей армии. До конца фазы,
            каждый раз, когда базовая модель T'AU SEPT из вашей армии совершает атаку против подразделения
            этой вражеской модели, добавляйте 1 к броску ранений этой атаки.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.stratName_9k}>
            <span>БЕЗЖАЛОСТНЫЙ ОБСТРЕЛ</span>
            <span>1 CP</span>
          </div>
          <div className={style.stratName_info}>
            Используйте эту стратегию на этапе стрельбы, когда для стрельбы
            выбирается подразделение УДАРНОЙ группы из вашей армии. До конца фазы:
            Вместо того, чтобы следовать обычным правилам для скорострельного оружия,
            модели в этом подразделении, стреляющие из импульсных винтовок, совершают вдвое больше атак.
            Каждый раз, когда БАЗОВАЯ модель в этом подразделении совершает атаку дальнего боя,
            улучшайте характеристику бронепробиваемости этой атаки на 1.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.stratName_9k}>
            <span>ИМПУЛЬСНЫЙ НАТИСК</span>
            <span>1 CP</span>
          </div>
          <div className={style.stratName_info}>
            Используйте эту стратегию на этапе стрельбы, когда для стрельбы выбирается подразделение
            FIRE WARRIOR TEAM из вашей армии. До конца фазы, каждый раз, когда БАЗОВАЯ модель в этом
            подразделении совершает атаку импульсным оружием, неизмененный бросок удара из 6 автоматически
            ранит цель.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.stratName_9k}>
            <span>ЗАЛП В УПОР</span>
            <span>1 CP</span>
          </div>
          <div className={style.stratName_info}>
            Используйте эту стратегию в начале вашей фазы стрельбы.
            Выберите одно подразделение FIRE WARRIOR TEAM из вашей армии,
            которое находится в пределах досягаемости любых вражеских подразделений.
            До конца фазы импульсные бластеры, импульсные карабины и импульсные винтовки,
            которыми оснащены модели в этом подразделении, имеют характеристику типа Pistol 2.
          </div>
        </div>

      </section>
    </div >
  )
}

export { FireWarriors }