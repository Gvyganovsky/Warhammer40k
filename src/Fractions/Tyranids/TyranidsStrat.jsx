import React from "react";
import style from "../../scss/CombatUnit.module.scss";

export const TyranidsStrat = () => {
    return (
        <div>
        </div>
    )
}

export const THUNDEROUS_IMPACT = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>THUNDEROUS IMPACT</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                Выберите одного вражеского монстра или транспортное средство в пределах досягаемости этой
                модели. До конца фазы эта модель может совершать атаки только против выбранного юнита, и каждый
                раз, когда она совершает атаку:
                <div>Добавьте 1 к броску попадания этой атаки.</div>
                <div>Добавьте 1 к броску раны этой атаки.</div>
                <div>Добавьте 1 к броску урона от этой атаки.</div>
            </div>
        </div>
    )
}

export const TERRIFYING_CHARGE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>TERRIFYING CHARGE</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза морали</span>.
                Выберите одного вражеского юнита в пределах досягаемости модели из вашей армии, который
                совершил атакующий ход в этот ход. До конца хода вычтите 3 из характеристики лидерства
                моделей в этом вражеском подразделении.
            </div>
        </div>
    )
}

export const BREAKING_THROUGH = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>BREAKING THROUGH</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза атаки</span>.
                Выберите одну вражескую модель в радиусе поражения и бросьте количество D6, равное
                оставшимся ранам этой модели:
                <div>Если характеристика силы этой модели МОНСТРА совпадает с характеристикой выносливости этой
                    вражеской модели, за каждые 4+ юнит этой вражеской модели получает 1 смертельное ранение
                    (максимум 6 смертельных ранений).</div>
                <div>Если характеристика силы этой модели МОНСТРА меньше характеристики выносливости
                    вражеской модели, за каждые 5+ юнит этой вражеской модели получает 1 смертельное ранение
                    (максимум 6 смертельных ранений).</div>
                <div>Если характеристика силы этой модели МОНСТРА выше, чем характеристика выносливости
                    вражеской модели, за каждые 3+ юнит этой вражеской модели получает 1 смертельное ранение
                    (максимум 6 смертельных ранений).</div>
            </div>
        </div>
    )
}

export const GUARD_AND_CONSUME = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>GUARD AND CONSUME</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                Если этот юнит находится в пределах досягаемости целевого маркера, повторите бросок попадания, равный 1.
                Если этот юнит находится в пределах досягаемости имплантированного маркера цели Tyrannoform Spore, вы
                можете повторить бросок попадания.
            </div>
        </div>
    )
}

export const OPPORTUNISTIC_ADVANCE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>OPPORTUNISTIC ADVANCE</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза перемещения</span>.
                Каждый раз, когда это подразделение продвигается вперед, не делайте опережающий бросок.
                Вместо этого, до конца фазы, добавляйте 8" к характеристике перемещения моделей в этом
                подразделении.
                Модели в этом подразделении не подвергаются штрафу за попадание в броски, понесенные за
                стрельбу из Assault weapons в тот же ход, в котором продвинулось их подразделение.
            </div>
        </div>
    )
}

export const COMBINED_ASSAULT = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>COMBINED ASSAULT</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                До конца фазы, каждый раз, когда модель ЛЕВИАФАНА совершает атаку ближнего боя против
                этого вражеского юнита, улучшайте характеристику бронепробиваемости этой атаки на 1.
            </div>
        </div>
    )
}

export const CRITICAL_MASS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>CRITICAL MASS</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                До конца фазы, каждый раз, когда атака ближнего боя, выполняемая моделью
                в этом подразделении, нацелена на вражеское подразделение с меньшим количеством
                моделей, чем у него, вы можете повторно выполнить бросок ранения.
            </div>
        </div>
    )
}

export const INDOMITABLE_MONSTROSITY = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>INDOMITABLE MONSTROSITY</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                До конца фазы, каждый раз, когда против этого юнита совершается атака, неизмененный
                бросок ранения 1-3 для этой атаки завершается неудачей, независимо от каких-либо
                способностей, которыми может обладать оружие или модель, производящая атаку.
            </div>
        </div>
    )
}

export const ADRENAL_SURGE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>ADRENAL SURGE</span>
                <span>1 CP / 2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                Добавьте 1 к атакам, характерным для моделей в этом подразделении.
                Добавьте D3 к атакам, характерным для моделей монстров в этом подразделении.
                Если в этом блоке содержится 19 или меньше моделей, эта стратегия стоит 1 CP; в
                противном случае она стоит 2 CP.
            </div>
        </div>
    )
}

export const VORACIOUS_APPETITE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>VORACIOUS APPETITE</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                До конца фразы, каждый раз, когда эта модель совершает атаку ближнего боя,
                вы можете повторно выполнить бросок раны.
            </div>
        </div>
    )
}

export const TRAMPLING_CHARGE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>TRAMPLING CHARGE</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза атаки</span>.
                Выберите одного вражеского юнита в радиусе поражения этой модели и бросьте 1D6:
                <div>Если у этой модели МОНСТРА есть ключевое слово "РОГАТЫЙ ХИТИН", на 2-4 вражеский
                    юнит получает 3 смертельных ранения; на 5+ вражеский юнит получает D3+3 смертельных ранения.</div>
                <div>Если у этой модели МОНСТРА нет ключевого слова "РОГАТЫЙ ХИТИН", на 2-4 этот вражеский юнит
                    получает D3 смертельных ранения; на 5+ этот вражеский юнит получает 3 смертельных ранения.</div>
            </div>
        </div>
    )
}

export const SYNAPTIC_CHANNELLING = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>SYNAPTIC CHANNELLING</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Психическая фаза</span>.
                Выберите одно подразделение псайкеров из вашей армии. До конца фазы это подразделение владеет
                всеми психическими способностями, известными дружественным подразделениям псайкеров, которые
                находятся на поле боя.
            </div>
        </div>
    )
}

export const DEATH_FRENZY = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>DEATH FRENZY</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                При смерти модели не удаляйте эту модель из игры - она может сражаться после того, как подразделение
                атакующей модели закончит совершать атаки. При выполнении этих атак, если характеристики уничтоженной
                модели могут изменяться по мере того, как она получает урон, считается, что у этой модели остались
                полные повреждения с целью определения того, каковы эти характеристики. После устранения атак
                уничтоженной модели она затем удаляется.
            </div>
        </div>
    )
}

export const POWER_OF_THE_HIVE_MIND = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>POWER OF THE HIVE MIND</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Психическая фаза</span>.
                Выберите одного персонажа-псайкера из своей армии. До конца фазы этот юнит может попытаться
                проявить еще одну психическую силу.
            </div>
        </div>
    )
}

export const CONTROL_OF_THE_SWARM = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>CONTROL OF THE SWARM</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                При убийстве модели вы можете немедленно выбрать другую модель персонажа из вашей армии,
                у которой нет черты военачальника, затем выберите черту военачальника, которой нет ни
                у одной модели в вашей армии (это должна быть черта военачальника, которой может обладать
                только что выбранная вами модель). До конца битвы эта модель приобретает черту военачальника
                и по всем правилам теперь считается вашим ВОЕНАЧАЛЬНИКОМ. Если какая-либо цель миссии,
                второстепенная цель, тактическая задача или правила повестки дня срабатывают при уничтожении
                вашего первоначального ВОЕНАЧАЛЬНИКА, эти правила не срабатывают до тех пор, пока не будет
            </div>
        </div>
    )
}

export const SYNAPTIC_DOMINATION = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>SYNAPTIC DOMINATION</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Психическая фаза</span>.
                Выберите одно дружественное подразделение из вашей армии, затем выберите одно дружественное
                подразделение из вашей армии. До начала вашей следующей психической фазы, пока этот юнит
                находится на поле боя, этот несинапсный юнит всегда считается находящимся в пределах досягаемости
                этого СИНАПСНОГО юнита для целей способностей Синапса и инстинктивного поведения.
            </div>
        </div>
    )
}

export const ANIMATED_BY_THE_HIVE_MIND = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>ANIMATED BY THE HIVE MIND</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                При убийстве этой модели, если у этой модели есть способность, которая срабатывает при броске
                кости после ее уничтожения, не бросайте, чтобы увидеть, срабатывает ли эта способность: это
                происходит автоматически.
            </div>
        </div>
    )
}

export const THE_DEEPEST_SHADOW = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>THE DEEPEST SHADOW</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Психическая фаза противника</span>.
                Когда вражеский юнит проваливает психический тест, выберите одного псайкера из своей армии
                в радиусе 18" от этого вражеского отряда. Этот вражеский юнит получает смертельные ранения D3,
                и до конца фазы этот юнит псайкера КРОНОСА получает следующую способность:
                Глубочайшая тень (Аура): Пока вражеский псайкер находится в пределах 18Э от этого юнита, каждый раз,
                когда психический тест, проведенный для этого юнита, проваливается, этот юнит получает смертельные
                ранения D3.
            </div>
        </div>
    )
}

export const HIVE_PREDATOR = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>HIVE PREDATOR</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Перед боя</span>.
                Выберите одну модель из вашей армии и определите одну черту военачальника для этой модели.
            </div>
        </div>
    )
}

export const ALPHA_LEADER_BEAST = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>ALPHA LEADER-BEAST</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Перед боя</span>.
                При сборе своей армии, после назначения модели персонажа ЛЕВИАФАНА, который не является
                именованным персонажем, в качестве вашего ВОЕНАЧАЛЬНИКА. Вы можете сгенерировать для
                них одну дополнительную черту военачальника из таблицы черт военачальника Левиафана.
            </div>
        </div>
    )
}

export const BURIED_IN_WAIT = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>BURIED IN WAIT</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Перед боя</span>.
                Выберите одно подразделение ЙОРМУНГАНДРА из своей армии (исключая подразделения ТИТАНИКА).
                Вы можете разместить это подразделение недалеко от поверхности вместо того, чтобы размещать
                его на поле боя. Если вы это сделаете, то на этапе подкрепления одной из фаз вашего передвижения
                вы можете разместить это подразделение в любом месте поля боя, на расстоянии более 9"
                от любых вражеских моделей.
            </div>
        </div>
    )
}

export const RAREFIED_ENHANCEMENTS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>RAREFIED ENHANCEMENTS</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Перед боя</span>.
                Ecли у вашего ВОЕНАЧАЛЬНИКА есть ключевое слово HIVE TENDRIL. Выберите одну модель персонажа
                HIVE TENDRIL из вашей армии и дайте им одну реликвию.
            </div>
        </div>
    )
}

export const SHARD_LURE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>SHARD LURE</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                Используйте эту стратегию на этапе стрельбы, когда дальняя атака, проведенная моделью из
                СИНАПСНОГО подразделения, наносит удар по вражескому подразделению. До конца хода, каждый раз,
                когда дружественный отряд объявляет атаку, если этот вражеский отряд является одной из целей
                этой атаки, бросьте еще один D6 и выбросьте один из кубиков при броске атаки.
            </div>
        </div>
    )
}

export const INSTINCTIVE_RAMPAGE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>INSTINCTIVE RAMPAGE</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                Когда вражеский юнит уничтожит модель из вашей армии. До конца битвы:
                Каждый раз, когда дружественный отряд ОХРАНЫ ТИРАНА объявляет атаку, если
                вражеский отряд является целью этой атаки, добавляйте 4 к броску атаки.
                Каждый раз, когда дружественный отряд ОХРАНЫ ТИРАНА  совершает атаку против этого вражеского отряда,
                добавляйте 1 к броску поражений при этой атаке и 1 к броску ранений при этой атаке.
            </div>
        </div>
    )
}

export const THE_VOID_IN_THE_WARP = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>THE VOID IN THE WARP</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Психическая фаза противника</span>.
                Если вражеский отряд ПСАЙКЕРОВ находится в пределах 24" от любых отрядов ЛЕВИАФАНА СИНАПСА
                из вашей армии, бросьте 1D6: на 4+, эта психическая сила аннулируется.
            </div>
        </div>
    )
}

export const HIVE_MIND_IMPERATIVE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>HIVE MIND IMPERATIVE</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза командования</span>.
                Выберите одно подразделение "ЛЕВИАФАН" из вашей армии, которое находится в пределах 12"
                от дружественного подразделения "ЛЕВИАФАН СИНАПС". До начала вашей следующей командной фазы:
                Выбранный вами юнит получает способность "Защита цели". Если модель в этом блоке уже обладает
                этой способностью, она учитывается как одна дополнительная модель при определении контроля целевого маркера.
                Если выбранное вами устройство выполняет какое-либо действие, оно может стрелять без сбоя этого действия.
            </div>
        </div>
    )
}

export const HYPER_TOXICITY = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>HYPER-TOXICITY</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                До конца фазы, каждый раз, когда модель совершает атаку ближнего боя, неизмененный
                бросок удара 5+ автоматически ранит цель.
            </div>
        </div>
    )
}

export const PSYCHOTROPIC_VENOM = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>PSYCHOTROPIC VENOM</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза морали</span>.
                Выберите одного вражеского юнита (исключая транспортные средства) в пределах досягаемости
                отряда "LASH WHIP" или "TOXIC LASHES" из вашей армии. До конца фазы:
                <div>Вычтите 2 из характеристики лидерства моделей в этом вражеском подразделении.</div>
                <div>Вычтите 1 из тестов на боевое истощение, проведенных для этого вражеского подразделения.</div>
            </div>
        </div>
    )
}

export const PATHOGENIC_SLIME = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>PATHOGENIC SLIME</span>
                <span>1 CP / 2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                До конца фазы, каждый раз, когда модель в этом подразделении совершает атаку, неизмененный
                бросок удара из 6 автоматически наносит урон цели. Если у этого юнита есть ключевое слово
                TOXIN SACS, эта стратегия стоит 1 CP; в противном случае она стоит 2 CP.
            </div>
        </div>
    )
}

export const RAPID_ADAPTATION = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>PATHOGENIC SLIME</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Перед битвой</span>.
                Модели в этом подразделении имеют навык владения оружием, характерный для 2+, и баллистический навык,
                характерный для 3+. Вы можете использовать эту стратегию только один раз, если только вы не играете
                в битву ударных сил (в этом случае вы можете использовать эту стратегию дважды) или в битву натиска
                (в этом случае вы можете использовать эту стратегию три раза).
            </div>
        </div>
    )
}

export const ENHANCED_BRAIN_FUNCTIONS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>ENHANCED BRAIN FUNCTIONS</span>
                <span>1 CP / 2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                До конца фазы модели в этом подразделении могут совершать дальние атаки, используя
                правило Big Guns Never Tire, как если бы у них было ключевое слово MONSTER. Если в
                этом блоке содержится 5 или меньше моделей, эта стратегия стоит 1 CP; в противном
                случае она стоит 2 CP.
            </div>
        </div>
    )
}

export const UNPARALLELED_FEROCITY = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>UNPARALLELED FEROCITY</span>
                <span>1 CP / 2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                не удаляйте уничтоженную модель из игры - это возможно после того, как подразделение
                атакующей модели закончит совершать свои атаки., атакуйте так, как если бы его подразделение
                было выбрано для боя. После устранения этих атак уничтоженная модель затем удаляется. Если
                у ПЕХОТНОГО подразделения "БЕГЕМОТ" есть ключевое слово "БЕСКОНЕЧНОЕ МНОЖЕСТВО", эта
                стратегия стоит 1 CP; в противном случае она стоит 2 CP.
            </div>
        </div>
    )
}

export const REINFORCED_HIVE_NODE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>UNPARALLELED FEROCITY</span>
                <span>1 CP / 2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Любая фаза</span>.
                До конца фазы, каждый раз, когда атака назначается модели в этом подразделении,
                вычитайте 1 из характеристики урона этой атаки (как минимум до 1). Если в этом блоке
                содержится 5 или меньше моделей, эта стратегия стоит 1 копейку; в противном случае
                она стоит 2 копейки.
            </div>
        </div>
    )
}

export const OVERRUN = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>OVERRUN</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Конец фазы боя</span>.
                Выберите одно подразделение из вашей армии, которое совершило атаку в этот ход.
                Если в радиусе действия этого подразделения нет вражеских моделей, модели в этом
                подразделении могут сделать обычный ход.
            </div>
        </div>
    )
}

export const IMPALING_HOOKS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>IMPALING HOOKS</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                До конца фазы, каждый раз, когда модель в этом подразделении совершает атаку ближнего
                боя против вражеского подразделения (исключая транспортные средства и МОНСТРОВ),
                добавляйте 1 к броску попадания этой атаки.
            </div>
        </div>
    )
}

export const ENCIRCLE_THE_PREY = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>ENCIRCLE THE PREY</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Конец фазы движения</span>.
                Выберите одно подразделение, которое может летать из вашей армии. Уберите это подразделение
                с поля боя. На этапе подкрепления вашей следующей фазы перемещения вы можете вернуть это
                подразделение обратно в любое место на поле боя, в любое место, удаленное более чем на 9"
                от любых вражеских моделей. Если сражение заканчивается, а этого подразделения нет на поле
                боя, оно уничтожается. Юнит не может быть выбран для этой стратегии, если он был установлен
                на поле боя в этот ход.
            </div>
        </div>
    )
}

export const BIO_ADAPTED_BORER_GRUBS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>BIO-ADAPTED BORER GRUBS</span>
                <span>1 CP / 2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                До конца фазы, каждый раз, когда модель в этом подразделении совершает атаку
                fleshborer или fleshborer hive с неизмененным броском ран, равным 6, эта атака
                наносит 1 смертельную рану цели в дополнение к обычному урону
                (максимум 6 смертельных ран может быть нанесено за фазу с помощью эта уловка).
                Если этот юнит - ТИРАННОФЕКС, эта стратегия стоит 2 CP; в противном случае она
                стоит 1 CP. Вы не можете использовать эту стратегию и стратегию Выжигания багов
                на одном и том же юните во время одной и той же фазы.
            </div>
        </div>
    )
}

export const SCORCH_BUGS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>SCORCH BUGS</span>
                <span>1 CP / 2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                До конца фазы добавьте 6" к характеристике дальности стрельбы и 1 к характеристике
                силы моделей оружия fleshborer и fleshborer hive, которыми оснащены подразделения.
                Если у этого юнита 16 или более моделей или есть ключевое слово MONSTER, эта
                стратегия стоит 2 CP; в противном случае она стоит 1 CP.
            </div>
        </div>
    )
}

export const ENDLESS_SWARM = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>ENDLESS SWARM</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Начало фазы командования</span>.
                Выберите одно подразделение из своей армии. До D3 +3 уничтоженных модели
                могут быть добавлены обратно в этот отряд с сохранением их полных ран.
                Эти возвращенные модели могут быть установлены только в пределах досягаемости
                вражеских юнитов, которые уже находятся в пределах досягаемости подразделения,
                к которому они добавляются обратно.
            </div>
        </div>
    )
}

