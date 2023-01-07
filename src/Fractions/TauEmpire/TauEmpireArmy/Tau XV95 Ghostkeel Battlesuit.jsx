import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Tau_XV95_Ghostkeel_Battlesuit from "../../../assets/TauEmpire/Tau XV95 Ghostkeel Battlesuit.png";

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

const TauXV95GhostkeelBattlesuit = () => {
  return (
    <div>
      <section className={style.content}>
        <img src={Tau_XV95_Ghostkeel_Battlesuit} alt="TauXV95GhostkeelBattlesuit" className="style.combat_unit_img" />
        <div className={style.combat_unit_param}>
          <img src={M} alt="M" className={style.param_img} />
          <div className={style.param_number}>12</div>

          <img src={WS} alt="WS" className={style.param_img} />
          <div className={style.param_number}>5+</div>

          <img src={BS} alt="BS" className={style.param_img} />
          <div className={style.param_number}>4+</div>

          <img src={S} alt="S" className={style.param_img} />
          <div className={style.param_number}>6</div>

          <img src={T} alt="T" className={style.param_img} />
          <div className={style.param_number}>6</div>

          <img src={W} alt="W" className={style.param_img} />
          <div className={style.param_number}>10</div>

          <img src={A} alt="A" className={style.param_img} />
          <div className={style.param_number}>3</div>

          <img src={Ld} alt="Ld" className={style.param_img} />
          <div className={style.param_number}>8</div>

          <img src={Sv} alt="Sv" className={style.param_img} />
          <div className={style.param_number}>3+</div>
        </div>
      </section>

      <section className={style.content}>
        <div className={style.weapon}>
          <div className={style.gun_title}>Burst cannon</div>

          <div className={style.weapon_content}>
            <img src={range} alt="range" className={style.param_img} />
            <div className={style.gun_number}>12"</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>Assault</div>
            <div className={style.gun_number}>4</div>
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
          <div className={style.gun_title}>Cyclic ion raker S</div>

          <div className={style.weapon_content}>
            <img src={range} alt="range" className={style.param_img} />
            <div className={style.gun_number}>24"</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>Heavy</div>
            <div className={style.gun_number}>6</div>
          </div>

          <div className={style.weapon_content}>
            <img src={S} alt="S" className={style.param_img} />
            <div className={style.gun_number}>7</div>
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
          <div className={style.gun_title}>Cyclic ion raker O</div>

          <div className={style.weapon_content}>
            <img src={range} alt="range" className={style.param_img} />
            <div className={style.gun_number}>24"</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>Heavy</div>
            <div className={style.gun_number}>6</div>
          </div>

          <div className={style.weapon_content}>
            <img src={S} alt="S" className={style.param_img} />
            <div className={style.gun_number}>8</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>AP</div>
            <div className={style.gun_number}>-1</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>D</div>
            <div className={style.gun_number}>D3</div>
          </div>
        </div>

        <div className={style.weapon}>
          <div className={style.gun_title}>Flamer</div>

          <div className={style.weapon_content}>
            <img src={range} alt="range" className={style.param_img} />
            <div className={style.gun_number}>8"</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>Assault</div>
            <div className={style.gun_number}>D6</div>
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
          <div className={style.gun_title}>Fusion collider</div>

          <div className={style.weapon_content}>
            <img src={range} alt="range" className={style.param_img} />
            <div className={style.gun_number}>18"</div>
          </div>

          <div className={style.weapon_content}>
            <div className={style.gun_number}>Heavy</div>
            <div className={style.gun_number}>D3</div>
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

      </section>

      <section className={style.content}>
        <div className={style.abilities}>
          <div className={style.abilities_title}>
            Набор электрошокеров Ghostkeel
          </div>
          <div className={style.abilities_text}>
            Ваш противник должен вычесть 1 из бросков попадания для моделей,
            атакующих эту модель с расстояния более 6".
          </div>

          <div className={style.abilities_title}>
            Лазутчики
          </div>
          <div className={style.abilities_text}>
            Во время развертывания это подразделение и любые сопровождающие его дроны
            могут быть установлены в любом месте поля боя, которое не находится в зоне
            развертывания вашего противника и находится более чем в 12" от любого
            вражеского подразделения.
          </div>
        </div>
      </section>
    </div >
  )
}

export { TauXV95GhostkeelBattlesuit }