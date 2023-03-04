
import style from "../../scss/CombatUnit.module.scss";

export const AeldariStrat = () => {
    return (
        <div>
        </div>
    )
}

export const INEXHAUSTIBLE_HATRED = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>INEXHAUSTIBLE HATRED</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                До конца фазы, каждый раз, когда модель в этом отряде совершает атаку ближнего боя против
                отряда ДЕМОНОВ (за исключением транспортных средств и МОНСТРОВ), добавляйте 1 к броску раны
                от этой атаки.
            </div>
        </div>
    )
}

export const THE_GREAT_ENEMY = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>THE GREAT ENEMY</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                До конца фазы, каждый раз, когда модель в этом подразделении совершает атаку ближнего боя,
                нацеленную на подразделение СЛААНЕШ, вы можете повторно выполнить бросок попадания и бросок ранения.
            </div>
        </div>
    )
}

export const MATCHLESS_AGILITY = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>MATCHLESS AGILITY</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                после броска D6, чтобы определить, как далеко продвинется подразделение из вашей армии,
                когда оно переместит фокус боя. Повторите бросок этого D6.
            </div>
        </div>
    )
}

export const LIGHTNING_FAST_REACTIONS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>LIGHTNING FAST REACTIONS</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                До конца фазы, каждый раз, когда производится атака против этого юнита, вычитайте
                1 из броска попадания этой атаки.
            </div>
        </div>
    )
}

export const BLADESTORM = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>BLADESTORM</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                До конца фазы, каждый раз, когда модель в этом подразделении совершает атаку
                сюрикеновым оружием, неизмененный бросок 6 ударов дает 1 дополнительный удар.
            </div>
        </div>
    )
}

export const DEFIANT_TO_THE_LAST = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>DEFIANT TO THE LAST</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Начало фазы командования</span>.
                До начала вашей следующей фазы командования это подразделение получает способность "Защищенная цель".
            </div>
        </div>
    )
}

export const CHAMPION_OF_THE_AELDARI = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>CHAMPION OF THE AELDARI</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Перед битвой</span>.
                Определите одну черту военачальника для этой модели.
            </div>
        </div>
    )
}

export const TREASURES_OF_THE_AELDARI = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>TREASURES OF THE AELDARI</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Перед битвой</span>.
                Если у вашего ВОЕНАЧАЛЬНИКА есть ключевое слово SURYANI, вы можете выбрать одну модель персонажа SURYANI из своей армии.
                Выбранной модели ПЕРСОНАЖА может быть предоставлена одна реликвия "Сокровища эльдар".
            </div>
        </div>
    )
}

export const WEBWAY_STRIKE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>WEBWAY STRIKE</span>
                <span>1 CP / 3 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза передвижения</span>.
                Вы можете разместить любых юнитов в любом месте поля боя, удаленном более чем на 9" от любых
                вражеских моделей. Вы можете использовать эту уловку только один раз.
            </div>
        </div>
    )
}

export const PHANTASM = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>PHANTASM</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Первый раунд битвы</span>.
                Выберите из своей армии до трех подразделений и передислоцируйте их. Если миссия использует правила
                стратегических резервов, любое из этих подразделений может быть переведено в Стратегические резервы
                без необходимости тратить какие-либо дополнительные CP, независимо от того, сколько подразделений уже
                находится в Стратегических резервах. Если у обоих игроков есть способности, которые передислоцируют
                юнитов, откатывайтесь; победитель выбирает, кто передислоцирует своих юнитов первым. Вы можете использовать
                эту уловку только один раз.
            </div>
        </div>
    )
}

export const FIRE_AND_FADE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>FIRE AND FADE</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                Это устройство может немедленно совершить обычное перемещение до 7". Если это подразделение не является
                подразделением АРЛЕКИНОВ, оно не может вступить в ТРАНСПОРТНУЮ модель в конце этого перемещения.
            </div>
        </div>
    )
}

export const FOREWARNED = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>FOREWARNED</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза передвижения</span>.
                Выберите одно подразделение из своей армии в пределах 12" от дружественной модели. Этот юнит может стрелять
                так, как если бы это была ваша фаза стрельбы, но его модели могут нацеливаться только на одного подходящего
                вражеского юнита, который был создан в качестве подкрепления в этот ход и который при этом находится в
                пределах 18" от их юнита.
            </div>
        </div>
    )
}

export const FEIGNED_RETREAT = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>FEIGNED RETREAT</span>
                <span>1 CP / 2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза передвижения</span>.
                Вы можете выбрать, чтобы это подразделение имело право стрелять в этот ход или право объявить атаку
                в этот ход, или и то, и другое. Если вы выберете оба варианта, эта стратегия будет стоить 2 CP; в
                противном случае она будет стоить lCP.
            </div>
        </div>
    )
}

export const GUIDED_WRAITHSIGHT = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>GUIDED WRAITHSIGHT</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                Выберите одну модель из вашей армии и одно дружественное подразделение. До конца фазы считается,
                что эта единица-НОСИТЕЛЬ ДУХА находится в пределах досягаемости способности SPIRITSEER к метке Духа
                данной модели.
            </div>
        </div>
    )
}

export const THRICE_LAYERED_WARDS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>THRICE-LAYERED WARDS</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Психическая фаза</span>.
                До конца фазы, каждый раз, когда модель в этом подразделении теряла рану, бросайте один D6:
                на 4+ эта рана не теряется.
            </div>
        </div>
    )
}

export const THE_TEARS_OF_ISHA = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>THE TEARS OF ISHA</span>
                <span>1 CP / 2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза командования</span>.
                Модель восстанавливает до D3 потерянных ран. Если выбранная модель находится в пределах 6" от дружественной
                модели, эта модель восстанавливает 3 потерянных ранения вместо этого. Если вы выберете модель "ТИТАНИК",
                эта стратегия будет стоить 2 PC; в противном случае она будет стоить 1 PC.
            </div>
        </div>
    )
}

export const WITHERING_VOLLEYS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>WITHERING VOLLEYS</span>
                <span>1 CP / 2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                До конца фазы, каждый раз, когда модель в этом подразделении совершает атаку с помощью ракетной
                установки "Эльдари" или "Жнец", улучшайте характеристику бронепробиваемости этой атаки на 1.
                Если у этого юнита есть ключевое слово "ТЕМНЫЕ жнецы", эта стратегия стоит 2 копейки; в
                противном случае она стоит 1 копейку.
            </div>
        </div>
    )
}

export const STARHAWK_MISSILE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>STARHAWK MISSILE</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                Модель SURYANI из вашей армии нацеливается на авиационное подразделение с помощью ракетной установки Eldar.
                Эта модель может нанести только одну атаку этим оружием на этой фазе, но при разрешении этой атаки добавьте
                1 к броску попадания этой атаки. Если попадание засчитано, цель получает 2D3 смертельных ранения и
                последовательность атак заканчивается.
            </div>
        </div>
    )
}

export const DISCIPLINE_OF_THE_BLACK_GUARDIANS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>DISCIPLINE OF THE BLACK GUARDIANS</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                До конца фазы, каждый раз, когда модель в этом подразделении совершает атаку, добавляйте 1 к броску
                попадания этой атаки.
            </div>
        </div>
    )
}

export const WARRIORS_OF_THE_RAGING_WINDS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>DISCIPLINE OF THE BLACK GUARDIANS</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза рывка</span>.
                До конца фазы этот юнит имеет право объявить атаку, даже если он продвинулся в этом ходе.
            </div>
        </div>
    )
}

export const MARTIAL_CITIZENRY = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>MARTIAL CITIZENRY</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                До конца фразы, каждый раз, когда модель в этом подразделении совершает атаку, повторяйте бросок удара, равный 1.
            </div>
        </div>
    )
}