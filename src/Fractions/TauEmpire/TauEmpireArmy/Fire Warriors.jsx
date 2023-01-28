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
        <div className={style.content_title}>Стратегемы</div>
        <div className={style.strat}>
          <div className={style.stratName_stratBattleTactic}>
            <span>СОСРЕДОТОЧЕННЫЙ ОГОНЬ</span>
            <span>2 CP</span>
          </div>
          <div className={style.stratName_info_stratBattleTactic}>
            Используйте эту стратегему на этапе стрельбы, когда вражеская модель получает урон
            в результате атаки. До конца фазы, каждый раз, когда модель вашей армии совершает
            атаку против подразделения этой вражеской модели, добавляйте 1 к броску урона этой атаки.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.stratName_stratBattleTactic}>
            <span>БЕЗЖАЛОСТНЫЙ ОБСТРЕЛ</span>
            <span>1 CP</span>
          </div>
          <div className={style.stratName_info_stratBattleTactic}>
            Используйте эту стратегию на этапе стрельбы. До конца фазы:
            Вместо того, чтобы следовать обычным правилам для Rapid Fire,
            модели в этом подразделении, стреляющие из pulse rifles, совершают вдвое больше атак.
            Каждый раз, когда модель в этом подразделении совершает атаку дальнего боя,
            улучшайте характеристику AP этой атаки на 1.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.stratName_stratBattleTactic}>
            <span>ИМПУЛЬСНЫЙ НАТИСК</span>
            <span>1 CP</span>
          </div>
          <div className={style.stratName_info_stratBattleTactic}>
            Используйте эту стратегию на этапе стрельбы. До конца фазы, каждый раз, 
            когда модель в этом подразделении совершает атаку импульсным оружием, 
            неизмененный бросок удара из 6 автоматически ранит цель.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.stratName_stratBattleTactic}>
            <span>ЗАЛП В УПОР</span>
            <span>1 CP</span>
          </div>
          <div className={style.stratName_info_stratBattleTactic}>
            Используйте эту стратегию в начале вашей фазы стрельбы.
            Выберите одно подразделение FIRE WARRIOR из вашей армии,
            которое находится в пределах досягаемости любых вражеских подразделений.
            До конца фазы pulse blasters, pulse carbines и pulse rifles,
            которыми оснащены модели в этом подразделении, имеют характеристику типа Pistol 2.
          </div>
        </div>


        <div className={style.strat}>
          <div className={style.stratName_stratStrategicPloy}>
            <span>ОБОЙТИ С ФЛАНГА</span>
            <span>1 CP</span>
          </div>
          <div className={style.stratName_info_stratStrategicPloy}>
            Используйте эту стратегию в конце вашей фазы движения. Выберите один ДАЛЬНИЙ ОСНОВНОЙ
            отряд или ВСПОМОГАТЕЛЬНЫЙ отряд Тау из вашей армии, который находится в пределах 9"
            от любого края поля боя. Если в миссии, которую вы выполняете, используется
            правило стратегических резервов, вы можете удалить это подразделение с поля боя и
            поместить его в Стратегические резервы.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.stratName_stratStrategicPloy}>
            <span>ОРБИТАЛЬНАЯ ЛИНИЯ СВЯЗИ</span>
            <span>1 CP</span>
          </div>
          <div className={style.stratName_info_stratStrategicPloy}>
            Используйте эту стратегию на этапе съемки. Выберите одного вражеского юнита.
            До конца фазы, каждый раз, когда модель в подразделении SA'CEA из вашей армии
            совершает дальнюю атаку против этого вражеского подразделения, цель не получает
            преимуществ прикрытия от этой атаки.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.stratName_stratStrategicPloy}>
            <span>СКООРДИНИРОВАННОЕ ВЗАИМОДЕЙСТВИЕ</span>
            <span>1 CP</span>
          </div>
          <div className={style.stratName_info_stratStrategicPloy}>
            Используйте эту стратегию на этапе стрельбы, прежде чем выбирать юнит для стрельбы.
            Выберите одно вражеское подразделение и два подразделения 'SEPT' из вашей армии,
            которые находятся в пределах 18 дюймов от этого вражеского подразделения и видны ему.
            До конца фазы, каждый раз, когда модель в одном из этих подразделений 'SEPT' совершает атаку:
            Эта атака может быть нацелена только на этот вражеский юнит и только в том случае, если это
            подходящая цель. Улучшите характеристику бронепробиваемости этой атаки на 1.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.stratName_stratStrategicPloy}>
            <span>НАЗНАЧЕННАЯ ЗАДАЧА</span>
            <span>1 CP</span>
          </div>
          <div className={style.stratName_info_stratStrategicPloy}>
            Используйте эту стратегию на этапе вашего командования. Выберите одно подразделение ИМПЕРИИ Тау
            из вашей армии, которое не находится в пределах досягаемости вражеских подразделений и содержит
            как модели дронов, так и модели без ключевого слова DRONE. Разделите этот блок на два блока, один
            из которых содержит все модели дронов, а другой содержит все модели без ключевого слова DRONE.

            Если какая-либо из этих моделей дронов состыкована с другой моделью, установите их в пределах 1"
            от модели, с которой они состыкованы, прежде чем разделять устройство. Эти модели дронов больше
            не состыкованы с этой моделью.
          </div>
        </div>


        <div className={style.strat}>
          <div className={style.stratName_stratEpicDeed}>
            <span>ЭКСПЕРИМЕНТАЛЬНОЕ ОРУЖИЕ</span>
            <span>2 CP</span>
          </div>
          <div className={style.stratName_info_stratEpicDeed}>
            Используйте эту стратегию на этапе стрельбы, когда для стрельбы выбирается подразделение
            БОРК'ан из вашей армии. Выберите одну модель в этом подразделении и одно оружие, которым
            оснащена эта модель. До конца фазы, каждый раз, когда эта модель совершает атаку этим оружием,
            неуязвимые спасброски не могут быть предприняты против этой атаки.
          </div>
        </div>

        <div className={style.strat}>
          <div className={style.stratName_stratEpicDeed}>
            <span>ПРОТОКОЛЫ СПАСИТЕЛЯ</span>
            <span>1 CP</span>
          </div>
          <div className={style.stratName_info_stratEpicDeed}>
            Используйте эту стратегию на любой фазе, когда спасбросок не удался для модели в подразделении
            'SEPT' из вашей армии. Выберите одну удобную модель дрона 'SEPT' в пределах 3 дюймов
            от этого устройства или в пределах 6 дюймов от этого устройства, если оно содержит модель,
            оснащенную контроллером дрона. Эта модель дрона уничтожена, и характеристика урона от этой
            атаки изменена на 0.
          </div>
        </div>


        <div className={style.strat}>
          <div className={style.stratName_stratWargear}>
            <span>ФОТОННЫЕ ГРАНАТЫ</span>
            <span>1 CP</span>
          </div>
          <div className={style.stratName_info_stratWargear}>
            Используйте эту стратегию на этапе атаки вашего противника, когда подразделение ФОТОННЫХ ГРАНАТ
            из вашей армии выбрано в качестве цели для атаки, объявленной вражеским подразделением
            (за исключением транспортных средств и монстров). До конца хода: Вычтите 2 из бросков
            заряда этого устройства.
            Каждый раз, когда модель в этом подразделении совершает атаку, вычтите 1 из броска удара этой атаки.
            Модификатор броска заряда, полученный с помощью этой стратегии, не суммируется с каким-либо
            другим отрицательным модификатором броска заряда единицы.
          </div>
        </div>

      </section>
    </div >
  )
}

export { FireWarriors }