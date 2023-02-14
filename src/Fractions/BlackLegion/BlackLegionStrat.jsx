import React from "react";
import style from "../../scss/CombatUnit.module.scss";

export const BlackLegionStrat = () => {
    return (
        <div>
        </div>
    )
}

export const DEATH_TO_THE_FALSE_EMPEROR = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>DEATH TO THE FALSE EMPEROR!</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                До конца фазы, каждый раз, когда модель АСТАРТЕС-ЕРЕТИКОВ в этом подразделении
                совершает атаку ближнего боя против подразделения АДЕПТУС АСТАРТЕС, вы можете повторно
                выполнить бросок удара.
            </div>
        </div>
    )
}

export const FURY_OF_KHORNE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>FURY OF KHORNE</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                Если для сражения будет выбрано подразделение АСТАРТЕС КХОРН-ПРЕДАТЕЛЬ из вашей армии. До конца фазы, каждый раз, когда модель в этом
                подразделении совершает атаку ближнего боя, неизмененный бросок удара из 6 автоматически ранит цель.
            </div>
        </div>
    )
}

export const GRANDFATHERS_BLESSINGS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>GRANDFATHER’S BLESSINGS</span>
                <span>1 CP / 2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                Если выбрано подразделение АСТАРТЕС НУРГЛ-ПРЕДАТЕЛЬ из вашей армии.
                До конца фазы, каждый раз, когда против этого юнита совершается атака,
                неизмененный бросок ранения 1-3 для этой атаки завершается неудачей,
                независимо от каких-либо способностей, которыми может обладать оружие
                или модель, производящая атаку. Если в этом блоке содержится 5 или меньше
                моделей, эта стратегия стоит 1 CP; в противном случае она стоит 2 CP.
            </div>
        </div>
    )
}

export const HATRED_ETERNAL = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>HATRED ETERNAL</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Конец фазы боя</span>.
                Если это фаза стрельбы, это подразделение может стрелять снова; если это фаза бегства
                и это подразделение находится в пределах досягаемости любых вражеских подразделений,
                это подразделение ЛЕГИОНЕРОВ может сражаться снова.
            </div>
        </div>
    )
}

export const MURDEROUS_PERFECTION = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>MURDEROUS PERFECTION</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                Если для сражения выбирается ПРЕДАТЕЛЬСКОЕ подразделение АСТАРТЕС СЛААНЕШ
                из вашей армии. Однажды во время этой фазы, при разрешении атаки, выполненной
                моделью в этом подразделении, вы можете изменить результат одного броска удара,
                одного броска ранения или одного броска урона на 6 (обратите внимание, что если D3
                бросается как часть этого броска урона, это 6 уменьшается вдвое до 3).
            </div>
        </div>
    )
}

export const VETERANS_OF_THE_LONG_WAR = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>VETERANS OF THE LONG WAR</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                До конца фазы, каждый раз, когда модель в этом подразделении
                совершает атаку, добавляйте 1 к броску раны этой атаки.
            </div>
        </div>
    )
}

export const CURSED_DESPOILERS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>CURSED DESPOILERS</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                До конца фазы, каждый раз, когда модель в этом подразделении
                совершает атаку, добавляйте 1 к броску раны этой атаки.
            </div>
        </div>
    )
}
