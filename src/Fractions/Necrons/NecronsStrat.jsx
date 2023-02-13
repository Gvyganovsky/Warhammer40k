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

