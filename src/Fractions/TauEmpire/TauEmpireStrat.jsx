import React from "react";
import style from "../../scss/CombatUnit.module.scss";

import range from "../../assets/icons/range.png";
import location from "../../assets/icons/location.png";
import hit from "../../assets/icons/hit.svg";
import question from "../../assets/icons/question.png";
import morale from "../../assets/icons/morale.png";
import limitation from "../../assets/icons/limitation.png";

import general from "../../assets/icons/general.png";
import shooting from "../../assets/icons/shooting.png";
import skull from "../../assets/icons/skull.png";

export const TauEmpireStrat = () => {
    return (
        <div>
        </div>
    )
}

export const EXPERIMENTAL_WEAPONRY = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>EXPERIMENTAL WEAPONRY</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                До конца фазы: выбранная модель совершает атаку, неуязвимые спасброски
                не могут быть предприняты против этой атаки.
            </div>
        </div>
    )
}

export const SAVIOUR_PROTOCOLS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>SAVIOUR PROTOCOLS</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Любая фаза</span>.
                Если спасбросок не удался, выберите и уберите модель дрона в пределах 3" или 6" от юнита.
                Урон от атаки по основной цели снижен до 0.
            </div>
        </div>
    )
}

export const FAIL_SAFE_DETONATOR = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>FAIL-SAFE DETONATOR</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Любая фаза</span>.
                Когда модель боевого костюма из вашей армии будет уничтожена. Прежде чем удалить эту
                модель из игры, вместо использования каких-либо правил, которые срабатывают при уничтожении
                этой модели, бросьте по одному D6 для каждого юнита в пределах 3" от этой модели, добавив
                1 к броску, если у уничтоженной модели характеристика ран 12 или более: на 3-5, этот юнит
                получает D3 смертельных ранения; на 6+, этот юнит получает 3 смертельных ранения.
            </div>
        </div>
    )
}

export const BACKUP_AI = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>BACKUP AI</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза командования</span>.
                Выберите одну модель в вашей армии. До начала вашей следующей фазы командования,
                считается, что у этой модели остались полные раны, чтобы определить, какие характеристики
                в ее профиле использовать.
            </div>
        </div>
    )
}

export const ORBITAL_UPLINK = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>ORBITAL UPLINK</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                До конца фазы: При дальней атаки против этого вражеского
                подразделения, цель не получает преимуществ прикрытия от этой атаки.
            </div>
        </div>
    )
}

export const WALL_OF_MIRRORS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>WALL OF MIRRORS</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза движения</span>.
                Выберите один костюм НЕВИДИМКУ/ПРИЗРАК из вашей армии, который полностью находится в пределах 9" от
                любого края поля боя. Уберите это подразделение с поля боя. На этапе подкрепления вашей следующей фазы
                перемещения вы можете вернуть это подразделение на поле боя в любом месте, которое находится в пределах
                9" от любого края поля боя и более чем в 9" от любых вражеских моделей. Если битва заканчивается, а этого
                подразделения нет на поле боя, оно уничтожается.
            </div>
        </div>
    )
}

export const COORDINATED_ENGAGEMENT = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>COORDINATED ENGAGEMENT</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                Прежде чем выбирать юнита для стрельбы. Выберите одно вражеское подразделение и 2 подразделения
                SEPT из вашей армии, которые находятся в пределах 18" от этого вражеского подразделения и видны
                ему. До конца фазы, каждый раз, когда модель в одном из этих подразделений SEPT совершает атаку:
                Улучшите характеристику бронепробиваемости этой атаки на 1.
            </div>
        </div>
    )
}

export const DESIGNATED_TASKING = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>DESIGNATED TASKING</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза командования</span>.
                Вы можете разделить ваш отряд на 2, где содержаться дроны. Все дроны входят в новый отдельный отряд
            </div>
        </div>
    )
}

export const STRIKE_AND_FADE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>STRIKE AND FADE</span>
                <span>1 CP / 2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                Выберите отряд с реактивным ранцем. Вы можете стрелять с помощью этого устройства, и тогда
                оно может совершать нормальное движение до 6 дюймов. Это устройство не может стрелять снова
                на этом этапе. Если это подразделение содержит 5 или меньше моделей (исключая модели дронов),
                эта стратегия стоит 1 CP.
            </div>
        </div>
    )
}

export const REPULSOR_IMPACT_FIELD = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>REPULSOR IMPACT FIELD</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза атаки противника</span>.
                когда в качестве цели атаки выбирается боекостюм из вашей армии. До конца фазы вычтите 2 из бросков
                заряда.
            </div>
        </div>
    )
}

export const IONISED_SHOCKFIELD = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>IONISED SHOCKFIELD</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                Модель во вражеском подразделении уничтожена в результате атаки, произведенной ионным
                оружием моделью SEPT из вашей армии. До начала вашей следующей фазы стрельбы на этот вражеский
                юнит не влияют способности ауры других вражеских юнитов.
            </div>
        </div>
    )
}

export const FOCUSED_FIRE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>FOCUSED FIRE</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                До конца фазы: вражеская модель теряет ранение в результате атаки, при атаке прибавьте
                1 к броску ранений этой атаки.
            </div>
        </div>
    )
}

export const DROP_ZONE_CLEAR = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>DROP ZONE CLEAR</span>
                <span>3 CP / 2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза движения</span>.
                До конца хода, каждый раз, когда модель боевого костюма в этом подразделении совершает дальнюю
                атаку, вы можете повторно выполнить бросок удара и бросок ранения. Если этот юнит содержит 4 или
                более моделей боевых скафандров, эта стратегия стоит 3 CP; в противном случае она стоит 2 CP.
            </div>
        </div>
    )
}

export const DYNAMIC_OFFENSIVE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>DYNAMIC OFFENSIVE</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза движения</span>.
                Каждый раз, когда это подразделение продвигается вперед, не делайте бросок вперед.
                Вместо этого, до конца фазы, добавьте 6" к характеристике перемещения моделей в этом блоке.
                Модели в этом подразделении не подвергаются штрафу за попадание в броски из оружия Assault.
            </div>
        </div>
    )
}

export const OUTFLANK = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>DYNAMIC OFFENSIVE</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза движения</span>.
                Каждый раз, когда это подразделение продвигается вперед, не делайте бросок вперед.
                Вместо этого, до конца фазы, добавьте 6" к характеристике перемещения моделей в этом блоке.
                Модели в этом подразделении не подвергаются штрафу за попадание в броски из оружия Assault.
            </div>
        </div>
    )
}

export const WISDOM_OF_THE_MANY = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>WISDOM OF THE MANY</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Любая фаза, кроме фазы командования</span>.
                Выберите Эфирного, который не произносил заклинание в этот ход. Эта модель может
                произнести одно заклинание, который еще не было использовано в этот ход.
                Это заклинание автоматически вступает в силу до начала вашей следующей командной фазы.
            </div>
        </div>
    )
}

export const EMERGENCY_DISPENSATION = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>EMERGENCY DISPENSATION</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Перед битвой</span>.
                Выберите вашего командира и дайте ему реликвию. Каждая реликвия в вашей
                армии должна быть уникальной. Юнит может иметь только 1 реликвию.
                (Если вы играете в Strike Force battle - можете использовать стратегему
                только 2 раза, Onslaught battle - 3 раза).
            </div>
        </div>
    )
}

export const PROMISING_PUPIL = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>PROMISING PUPIL</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Перед битвой</span>.
                Выберите вашего командира и дайте ему черту. Каждая черта в вашей
                армии должна быть уникальной. Юнит может иметь только 1 черту.
                (Если вы играете в Strike Force battle - можете использовать стратегему
                только 2 раза, Onslaught battle - 3 раза).
            </div>
        </div>
    )
}

export const RELENTLESS_FUSILLADE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>RELENTLESS FUSILLADE</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                Вместо того, чтобы следовать правилам для оружия
                типа Rapid Fire, модели в этом подразделении, стреляющие
                из Pulse rifle, совершают вдвое больше атак.
                При этом увеличьте бронебойность этой атаки на 1
            </div>
        </div>
    )
}

export const PULSE_ONSLAUGHT = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>PULSE ONSLAUGHT</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                До конца фазы: при попадании импульсным оружием, бросок удара на 6
                автоматически ранит цель.
            </div>
        </div>
    )
}

export const POINT_BLANK_VOLLEY = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>POINT-BLANK VOLLEY</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Этап стрельбы</span>.
                До конца фазы: Pulse rifle, Pulse carbine и Pulse pistol имеют тип Pistol 2
                (Действует только на 1 отряд).
            </div>
        </div>
    )
}

export const PHOTON_GRENADES = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>PHOTON GRENADES</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза атаки противника</span>.
                Вычтите 2 из бросков заряда юнита с фотонными гранатами.
                Каждый раз, когда модель в этом подразделении совершает атаку, вычтите 1 из броска удара этой атаки.
            </div>
        </div>
    )
}






