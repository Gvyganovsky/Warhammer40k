import React from "react";
import style from "../../scss/CombatUnit.module.scss";

export const AstraMilitarumStrat = () => {
    return (
        <div>
        </div>
    )
}

export const ARMOURED_FIST = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>ARMOURED FIST</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                Eсли отряд высадился из транспорта в этот ход, вы можете повторно выполнить бросок раны.
            </div>
        </div>
    )
}

export const VENGEANCE_FOR_CADIA = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>VENGEANCE FOR CADIA</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы/боя</span>.
                Если стрельбы или боя выбирается кадианское подразделение вашей армии
                или взводное подразделение, которое само находится в пределах 6" от
                дружественного кадианского ОФИЦЕРСКОГО подразделения. До конца фазы,
                каждый раз, когда модель в этом подразделении совершает атаку против
                подразделения ХАОСА, добавляйте 1 к броску ранения этой атаки.
            </div>
        </div>
    )
}

export const CADIA_STANDS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>CADIA STANDS!</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Любая фаза</span>.
                Когда качестве цели атаки выбирается кадианское пехотное подразделение,
                до конца фазы, когда против этого юнита совершается атака, неизмененный
                бросок ранения 1-3 для этой атаки завершается неудачей, независимо от
                способностей, которыми может обладать оружие или модель, производящая атаку.
            </div>
        </div>
    )
}

export const INGRAINED_PRECISION = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>INGRAINED PRECISION</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                Когда для стрельбы выбирается подразделение BORN SOLDIERS из вашей армии,
                до конца фазы, когда модель в этом подразделении совершает атаку дальнего боя,
                неизмененный бросок удара 5+ автоматически ранит цель.
            </div>
        </div>
    )
}

export const OVERLAPPING_FIELDS_OF_FIRE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>OVERLAPPING FIELDS OF FIRE</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                Когда вражеская модель уничтожается атакой, произведенной моделью
                PLATOON или SQUADRON из вашей армии. До конца фазы, когда дружественная
                модель PLATOON или SQUADRON совершает атаку против этого уничтоженного подразделения модели:
                Повторно совершите атаку.
                При неизмененном броске с ранением 6 улучшите характеристику бронепробиваемости этой атаки на 1.
            </div>
        </div>
    )
}

export const VOLLEY_FIRE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>VOLLEY FIRE</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Конец фазы стрельбы</span>.
                Выберите одно подразделение ПЕХОТЫ из вашей армии, которое не двигалось в этот
                ход. Это подразделение может стрелять снова.
            </div>
        </div>
    )
}

export const EXPERIENCED_EYE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>EXPERIENCED EYE</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                Если для стрельбы выбирается подразделения KASRKIN или ELITE SHARPSHOOTERS CORE.
                До конца фазы, когда модель в этом подразделении совершает атаку, улучшайте характеристику
                бронепробиваемости этой атаки на 1.
            </div>
        </div>
    )
}

export const FIRE_ON_MY_POSITION = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>FIRE ON MY POSITION</span>
                <span>1 CP / 2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Mодель ВОКС-ЗАКЛИНАТЕЛЯ будет уничтожена в ближнем бою.</span>.
                После того, как все модели в атакующем подразделении закончат совершать свои атаки,
                бросьте 1D6 для каждого юнита в пределах 3" от модели ВОКС-ЗАКЛИНАТЕЛЯ: на 4+ юнит
                получает раны D3. Модель ВОКС-заклинателя удаляется из игры. Если в этой модели есть
                ключевое слово CULT OF SACRIFICE, эта стратегия стоит 1 CP; в противном случае она стоит 2 CP.
            </div>
        </div>
    )
}

export const BATTLEFIELD_BEQUEST = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>BATTLEFIELD BEQUEST</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Перед битвой</span>.
                Выберите одну модель из вашей армии, в профиле которой есть слово "Sergeant" или "Watchmaster",
                и дайте им 1 из следующих реликвий Завоевания: Legacy of Kalladius; Claw of the Desert Tigers;
                The Barbicant’s Key; The Emperor’s Fury; Relic of Lost Cadia.
                Вы можете использовать эту стратегию только один раз, если только вы не играете
                в Strike Force (в этом случае вы можете использовать эту стратегию дважды) или
                в Onslaught battle (в этом случае вы можете использовать эту стратегию три раза).
            </div>
        </div>
    )
}

export const MOUNT_UP = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>MOUNT UP!</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                Если механизированное подразделение вашей армии или MILITARUM TEMPESTUS произведет выстрел
                и если каждая модель в этом подразделении находится в пределах 3" от ТРАНСПОРТНОЙ модели,
                это ПЕХОТНОЕ подразделение может сесть в нее.
            </div>
        </div>
    )
}

export const SHIELD_OF_FLESH = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>SHIELD OF FLESH</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы противника</span>.
                Если атакуют вашу пехоту, которая находится в пределах 3" от другого дружественного
                подразделения, у которого есть ключевое слово OGRYNS, и это подразделение OGRYNS ближе
                к атакующей модели, вычтите 1 из броска попадания этой атаки.
            </div>
        </div>
    )
}

export const VICIOUS_TRAPS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>VICIOUS TRAPS</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза атаки противника</span>.
                Если вражеский отряд завершает атакующий ход в пределах досягаемости вашей армии,
                бросьте 1D6 и примените следующие модификаторы:
                +1, если есть ключевое слово CATACHAN, VETERAN GUERRILLAS, MELTA MINE, SLY MARBO.
                При счете 2-5 этот вражеский юнит получает D3 смертельных ранения; при счете 6+ этот вражеский юнит получает 2D3 смертельных ранения.
            </div>
        </div>
    )
}

export const ACCEPTABLE_LOSSES = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>ACCEPTABLE LOSSES</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                Выберите ваш отряд, который находится вне досягаемости противника и отряд
                противника. Ваш отряд может может стрелять по врагу, даже если оно вне досягаемости
                вашего отряда. Атака не может быть повторно брошена и при 1 на броске вы атакуете
                своих солдат.
            </div>
        </div>
    )
}

export const FIELD_PROMOTION = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>FIELD PROMOTION</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Любая фаза</span>.
                Если ваш командир был убит, вы можете назначить новую модель командиром.
                Используйте эту стратегию только 1 раз.
            </div>
        </div>
    )
}

export const ARTILLERY_STRIKE_REQUESTED = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>ARTILLERY STRIKE REQUESTED</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза командования</span>.
                Если на поле боя есть MASTER OF ORDNANCE или EXPERT BOMBARDIERS OFFICER, то
                выберите 1 точку на поле боя и поставьте на нее маркер. В начале вашей следующей
                командной фазы бросьте 1D6 для каждой единицы в пределах 6" от центра этого маркера,
                прибавляя 1, если единица, для которой выполняется бросок, находится в пределах 3" от
                центра маркера. При счете 2-5 этот юнит получает D3 смертельных ранения; при счете 6+
                этот юнит получает D6 смертельных ран. Затем маркер удаляется. Вы можете использовать
                эту уловку только один раз.
            </div>
        </div>
    )
}

export const VENGEFUL_SALUTE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>VENGEFUL SALUTE</span>
                <span>1 CP / 2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя противника</span>.
                Если ваш автомобиль уничтожен, но не взорван. Она может выстрелить после того,
                как враг закончит атаки. При этом атаки можно проводить только из turret weapons.
                Баллистический навык равен 5+. Если имеет BATTLE TANK или ARMOURED SUPERIORITY, эта
                стратегия стоит 1 CP.
            </div>
        </div>
    )
}

export const CRUSH_THEM = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>VENGEFUL SALUTE</span>
                <span>1 CP / 2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                Измените характеристику навыка владения оружием этой модели на 4+. Если у этой модели есть ключевое слово ARMOURED, измените ее характеристику навыка владения оружием на 3+ вместо этого.
                При броске с неизмененными ранами, равном 6, цель получает 1 смертельную рану в дополнение к любому обычному урону.
            </div>
        </div>
    )
}

export const OFFICER_CADRE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>VENGEFUL SALUTE</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Перед битвой</span>.
                Выберите черту военачальника для этой модели.
            </div>
        </div>
    )
}

export const IMPERIAL_COMMANDERS_ARMOURY = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>VENGEFUL SALUTE</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Перед битвой</span>.
                Выберите реликвию военачальника для этой модели.
            </div>
        </div>
    )
}

export const SMOKE_LAUNCHERS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>VENGEFUL SALUTE</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы противника</span>.
                До конца фазы, каждый раз, когда производится атака против этого юнита, вычитайте 1 из броска попадания этой атаки.
            </div>
        </div>
    )
}

export const ABLATIVE_PLATING = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>VENGEFUL SALUTE</span>
                <span>2 CP / 3 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы противника</span>.
                Если в качестве цели атаки выбран БОЕВОЙ танк или БРОНИРОВАННОЕ подразделение вашей армии.
                До конца фазы, каждый раз, когда производится атака против этого юнита, вычитайте 1 из урона,
                характерного для этой атаки (как минимум до 1). Если у этого юнита есть ключевое слово "СВЕРХТЯЖЕЛЫЙ БОЕВОЙ ТАНК"
                или "РОГАЛ ДОРН", эта стратегия стоит 3 CP; в противном случае она стоит 2 CP.
            </div>
        </div>
    )
}

export const RELENTLESS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>VENGEFUL SALUTE</span>
                <span>1 CP / 2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза командования</span>.
                Выберите одну модель автомобиля ASTRA MILITARUM из вашей армии. До
                начала вашего следующего этапа командования считается, что у этой модели
                остались полные настройки для целей определения того, какие характеристики
                в ее профиле следует использовать. Если в этой модели есть ключевое слово
                TITANIC, эта стратегия стоит 2 CP; в противном случае она стоит 1 CP.
            </div>
        </div>
    )
}