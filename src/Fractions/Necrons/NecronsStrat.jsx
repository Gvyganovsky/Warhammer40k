import React from "react";
import style from "../../scss/CombatUnit.module.scss";

export const NerconsStrat = () => {
    return (
        <div>
        </div>
    )
}

export const BLOOD_RITES = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>BLOOD RITES</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                До конца фазы добавляйте 1 к атакам, характерным для моделей в этом подразделении.
            </div>
        </div>
    )
}

export const METHODICAL_DESTRUCTION = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>METHODICAL DESTRUCTION</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                Выберите одно вражеское подразделение, целью которого была атака, произведенная
                моделью в этом подразделении на этой фазе. До конца фазы, каждый раз, когда модель
                из другого дружественного подразделения SAUTEKH совершает атаку против этого вражеского
                подразделения, добавляйте 1 к броску попадания этой атаки.
            </div>
        </div>
    )
}

export const DIMENSIONAL_CORRIDOR = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>DIMENSIONAL CORRIDOR</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза передвижения</span>.
                Выберите пехотное подразделение из вашей армии, которое находится на поле боя. Уберите это подразделение с поля боя.
                На этапе подкрепления этого этапа верните это подразделение на поле боя в любом месте, которое находится в пределах 3"
                от дружественной модели  и более чем в 9" от любых вражеских моделей.
            </div>
        </div>
    )
}

export const TECHNO_ORACULAR_TARGETING = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>TECHNO-ORACULAR TARGETING</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                Не делайте бросок раны для этой атаки: это автоматически ранит цель.
            </div>
        </div>
    )
}

export const TALENT_FOR_ANNIHILATION = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>TALENT FOR ANNIHILATION</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                До конца фазы, каждый раз, когда модель в этом подразделении совершает атаку, неизмененный
                бросок раны из 6 наносит цели 1 смертельную рану в дополнение к любому обычному урону
                (максимум 3 смертельных ранения могут быть нанесены за фазу с помощью этой стратегии).
            </div>
        </div>
    )
}

export const TRANSLOCATION_CRYPT = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>TRANSLOCATION CRYPT</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Перед битвой</span>.
                Выберите одно подразделение NEPHREKH  (исключая транспортные средства или МОНСТРОВ) из вашей армии.
                Эта единица получает способность к пространственной транслокации.
            </div>
        </div>
    )
}

export const RECLAIM_A_LOST_EMPIRE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>RECLAIM A LOST EMPIRE</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                Выберите одно пехотное подразделение NIHILAKH INFANTRY из вашей армии, которое в данный момент
                выполняет действие. Это устройство все еще может выполнить эту фазу без сбоя этого действия.
            </div>
        </div>
    )
}

export const PRISMATIC_DIMENSIONAL_BREACH = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>PRISMATIC DIMENSIONAL BREACH</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза передвижения</span>.
                Выберите одно подразделение из вашей армии, находящееся в стратегических резервах, а затем выберите одну
                дружественную модель NIGHT SCYTHE или MONOLITH , которая находится на поле боя. Разместите это подразделение
                в любом месте поля боя, которое полностью находится в пределах 3" от модели NIGHT SCYTHE или MONOLITH и не
                находится в пределах досягаемости каких-либо вражеских подразделений. Эта стратегия не может быть
                использована в первом раунде боя.
            </div>
        </div>
    )
}

export const RELENTLESS_ONSLAUGHT = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>RELENTLESS ONSLAUGHT</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                До конца фазы, каждый раз, когда модель в этом подразделении совершает атаку с помощью
                скорострельного оружия, неизмененный бросок 6 ударов дает одно дополнительное попадание.
            </div>
        </div>
    )
}

export const EMPYRIC_DAMPING = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>EMPYRIC DAMPING</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза колдовства</span>.
                Если вражеский ПСАЙКЕР пытается проявить психическую силу в пределах 18" от подразделения
                SZAREKHAN  из вашей армии. Бросьте один D6: на 4+ эта психическая сила отрицается.
            </div>
        </div>
    )
}

export const DISRUPTION_FIELDS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>DISRUPTION FIELDS</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                До конца этапа прибавляйте 1 к характеристике прочности моделей в этом блоке.
            </div>
        </div>
    )
}

export const DISINTEGRATION_CAPACITORS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>DISINTEGRATION CAPACITORS</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                До конца фазы, каждый раз, когда модель в этом подразделении совершает атаку Gauss blaster,
                неизмененный бросок попадания из 6 автоматически ранит цель.
            </div>
        </div>
    )
}

export const MALEVOLENT_ARCING = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>MALEVOLENT ARCING</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                Когда модель НЕКРОНОВ из вашей армии нацеливается на вражеское подразделение из tesla weapon.
                После выполнения атак этим оружием бросьте по одному D6 для каждого другого юнита в пределах 6"
                от этого вражеского юнита: при 4+ юнит, для которого выполняется бросок, получает 1 смертельное ранение.
            </div>
        </div>
    )
}

export const SOLAR_PULSE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>SOLAR PULSE</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                Выберите одного вражеского юнита. До конца фазы, каждый раз, когда модель в отряде НЕКРОНОВ
                из вашей армии совершает дальнюю атаку против этого вражеского отряда, цель не получает
                преимуществ прикрытия от этой атаки.
            </div>
        </div>
    )
}

export const RAREFIED_NOBILITY = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>RAREFIED NOBILITY</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Перед битвой</span>.
                Выберите одну модель ПЕРСОНАЖА НЕКРОНОВ (исключая модели ОСКОЛКОВ К'ТАНА) в вашей армии и определите одну черту военачальника для этой модели.
            </div>
        </div>
    )
}

export const DYNASTIC_HEIRLOOMS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>DYNASTIC HEIRLOOMS</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Перед битвой</span>.
                Выберите одну модель ПЕРСОНАЖА НЕКРОНОВ (исключая модели ОСКОЛКОВ К'ТАНА) в вашей армии
                и дайте им одну реликвию.
            </div>
        </div>
    )
}

export const HAND_OF_THE_PHAERON = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>HAND OF THE PHAERON</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Перед битвой</span>.
                Если в вашей армии нет модели с ключевым словом PHAERON, выберите одну модель
                NECRONS OVERLORD из вашей армии (исключая именованных персонажей). Эта модель
                получает ключевое слово PHAERON, и на вашей командной фазе она может использовать
                свою способность My Will Be Done еще один раз.
            </div>
        </div>
    )
}

export const RESURRECTION_PROTOCOLS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>RESURRECTION PROTOCOLS</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                Когда модель в вашей армии будет уничтожен, вы можете выбрать бросок одного D6 в конце
                фазы вместо использования любых правил, которые срабатывают при уничтожении этой модели
                (например, способности суррогатных хозяев). Если вы это сделаете, то на 4+ установите
                эту модель обратно на поле боя как можно ближе к тому месту, где она была уничтожена,
                и на расстоянии более 1 дюйма от любых вражеских моделей, при этом останутся раны D3.
                Эта стратегия не может быть использована для резервного копирования одной и той же
                модели более одного раза за битву.
            </div>
        </div>
    )
}

export const STELLAR_ALIGNMENT_PROTOCOL = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>STELLAR ALIGNMENT PROTOCOL</span>
                <span>2 CP / 1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза командования</span>.
                Выберите одну модель транспортного средства, которая имеет характеристику ран, равную 10
                или более. До начала вашего следующего этапа командования считается, что у этой модели
                остались полные настройки для целей определения того, какие характеристики в ее профиле
                следует использовать. Если в этой модели есть ключевое слово TITANIC, эта стратегия стоит
                2 CP; в противном случае она стоит 1 CP.
            </div>
        </div>
    )
}

export const CURSE_OF_THE_PHAERON = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>CURSE OF THE PHAERON</span>
                <span>3 CP / 1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Любая фаза</span>.
                Если модель транспортного средства НЕКРОНОВ из вашей армии будет уничтожена.
                Не переворачивайте, чтобы увидеть, взорвется ли эта модель: это происходит
                автоматически. Если в этой модели есть ключевое слово TITANIC, эта стратегия
                стоит 3 CP; в противном случае она стоит 1 CP.
            </div>
        </div>
    )
}

export const FRACTAL_TARGETING = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>FRACTAL TARGETING</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                Все Rapid Fire, которым оснащены модели в этом подразделении,
                рассматривается как оружие Assault 2.
                Модели в этом подразделении не подвергаются штрафу за попадание в броски,
                понесенные за стрельбу из Assault weapons в тот же ход, в котором продвинулось
                их подразделение.
            </div>
        </div>
    )
}
