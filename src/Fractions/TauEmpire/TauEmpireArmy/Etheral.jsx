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

const Etheral = () => {
  return (
    <div>
      <section className={style.content}>
        <img src={Ether} alt="Ether" className={style.combat_unit_img} />
        <div className={style.combat_unit_param}>
          <div className={style.combat_unit_param_three}>
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
              <div className={style.param_number}>4</div>
            </div>
          </div>

          <div className={style.combat_unit_param_three}>
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
        </div>
      </section>

      <section className={style.content}>
        <div className={style.line}></div>
        <div className={style.content_title}>Оружие</div>
        <div className={style.weapon}>
          <div className={style.gun_title}>Honour stave</div>

          <div className={style.weapon_content}>
            <img src={range} alt="range" className={style.param_img} />
            <div className={style.gun_number}>Melee</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>Melee</div>
            <div className={style.gun_number}>-</div>
          </div>

          <div className={style.weapon_content}>
            <img src={S} alt="S" className={style.param_img} />
            <div className={style.gun_number}>2</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>AP</div>
            <div className={style.gun_number}>-1</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>D</div>
            <div className={style.gun_number}>2</div>
          </div>
        </div>
      </section>

      <section className={style.content}>
        <div className={style.line}></div>
        <div className={style.content_title}>Способности</div>
        <div className={style.abilities}>
          <div className={style.abilities_title}>
            Неудача - это не вариант
          </div>
          <div className={style.abilities_text}>
            В то время как дружественный ОСНОВНОЙ отряд ИМПЕРИИ Тау
            находится в пределах 6" от ЭФИРНОЙ модели этого подразделения,
            модели в этом подразделении могут использовать лидерские характеристики
            этой модели вместо своих собственных.
          </div>
        </div>

        <div className={style.abilities}>
          <div className={style.abilities_title}>
            Безмятежный объединитель
          </div>
          <div className={style.abilities_text}>
            Эта модель знает два призыва из Призывов Эфирного. В вашей командной фазе,
            если эта модель находится на поле боя, она может произнести одно известное
            ей заклинание, которое еще не было произнесено дружественной моделью в этот ход.
            Бросок один D6: на 3+ произнесенный нараспев призыв вдохновляет и действует до начала
            вашей следующей командной фазы.
          </div>
        </div>
      </section>

      <section className={style.content}>
        <div className={style.line}></div>
        <div className={style.content_title}>Заклинания</div>
        <div className={style.abilities}>
          <div className={style.abilities_title}>
            Огненный шторм
          </div>
          <div className={style.abilities_text}>
            Если этот призыв вдохновляет, выберите одно дружественное подразделение в пределах 6"
            от этого ЭФИРНОГО. Этот юнит может совершать дальние атаки без каких-либо действий,
            которые он выполняет, терпя неудачу.
          </div>
        </div>

        <div className={style.abilities}>
          <div className={style.abilities_title}>
            Ощущение камня
          </div>
          <div className={style.abilities_text}>
            Если этот призыв вдохновляет, выберите одно дружественное подразделение в пределах 6"
            от этого ЭФИРНОГО. Каждый раз, когда БАЗОВАЯ модель в этом подразделении теряет рану,
            бросайте один D6: на 5+ эта рана не теряется.
          </div>
        </div>

        <div className={style.abilities}>
          <div className={style.abilities_title}>
            Благодать Зефира
          </div>
          <div className={style.abilities_text}>
            Если этот призыв вдохновляет, выберите одно дружественное подразделение в пределах 6"
            от этого ЭФИРНОГО. Каждый раз, когда против этого юнита наносится дальняя атака,
            если он не оставался неподвижным в вашей предыдущей фазе передвижения, вычтите 1 из
            броска удара этой атаки.
          </div>
        </div>

        <div className={style.abilities}>
          <div className={style.abilities_title}>
            Сила приливов и отливов
          </div>
          <div className={style.abilities_text}>
            Если этот призыв вдохновляет, выберите одну дружественную ВСПОМОГАТЕЛЬНУЮ единицу Тау
            в пределах 6" от этого ЭФИРНОГО. Каждый раз, когда модель в этом подразделении совершает атаку,
            добавляйте 1 к броску раны этой атаки.
          </div>
        </div>

        <div className={style.abilities}>
          <div className={style.abilities_title}>
            Объединяющая мантра
          </div>
          <div className={style.abilities_text}>
            Если этот призыв вдохновляет, то в то время как дружественное подразделение находится в
            пределах 6" от этого ЭФИРНОГО: </div>
          <div className={style.abilities_text}>
            1. Вы можете повторно провести тесты морального духа, проведенные для этого подразделения.
          </div>
          <div className={style.abilities_text}>
            2. Добавьте 1 к тестам на боевое истощение, проведенным для этого подразделения.
          </div>
        </div>

        <div className={style.abilities}>
          <div className={style.abilities_title}>
            Мудрость проводников
          </div>
          <div className={style.abilities_text}>
            Если этот призыв вдохновляет, вы получаете 1 командное очко.
          </div>
        </div>
      </section>
    </div>
  )
}

export { Etheral }