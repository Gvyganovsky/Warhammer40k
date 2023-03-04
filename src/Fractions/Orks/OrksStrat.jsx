
import style from "../../scss/CombatUnit.module.scss";

export const OrksStrat = () => {
    return (
        <div>
        </div>
    )
}

export const GOTEM_TRAPPED = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>GOT’EM TRAPPED</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Начало фазы боя</span>.
                Выберите одного вражеского юнита в радиусе действия двух или более отрядов из вашей армии.
                До конца фазы, каждый раз, когда ваш отряд совершает атаку против этого юнита, немодифицированный
                бросок 6 ударов приносит 1 дополнительный удар.
            </div>
        </div>
    )
}

export const UNBRIDLED_CARNAGE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>UNBRIDLED CARNAGE</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Начало фазы боя</span>.
                Выберите одно ЯДРО ГОФФА или подразделение ПЕРСОНАЖА ГОФФА из вашей армии, которое
                не имеет отношения к культуре клана. До конца фазы, каждый раз, когда модель в этом подразделении
                совершает атаку, она получает дополнительный удар при неизмененном броске 5+ вместо 6.
            </div>
        </div>
    )
}

export const SHOWIN_OFF = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>SHOWIN’ OFF</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                До конца фазы, каждый раз, когда модель в этом подразделении совершает атаку оружием Дакка,
                немодифицированный бросок удара в 6 баллов дает 1 дополнительный удар.
            </div>
        </div>
    )
}

export const GET_STUCK_IN_LADZ = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>GET STUCK IN LADZ!</span>
                <span>1 CP / 2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                До конца этапа каждый раз, когда модель в этом блоке выполняет перемещение в штабель или
                консолидацию, она может перемещаться еще на 3 дюйма. Это не суммируется ни с каким другим правилом,
                которое увеличивает расстояние, на которое модели могут накапливаться или консолидироваться. Если в
                этом блоке содержится 10 или меньше моделей, эта стратегия стоит 1 CP; в противном случае она стоит 2 CP.
            </div>
        </div>
    )
}

export const BREAKIN_HEADS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>BREAKIN’ HEADS</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза морали</span>.
                Когда проверка боевого духа не пройдена для подразделения из вашей армии, которое находится в пределах 3"
                от любого дружественного БОЕВОГО БОССА или НОБЗА. Это подразделение  получает смертельные ранения D3, и
                тест на моральный дух считается пройденным.
            </div>
        </div>
    )
}

export const SPESHUL_AMMO = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>SPESHUL AMMO</span>
                <span>1 CP / 2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                До конца фазы модели shootas, которыми оснащено это подразделение, имеют типовую
                характеристику Dakka 4/2 и характеристику бронепробиваемости -1 (это включает
                профиль Shoota оружия kombi). Если в этом блоке содержится 10 или меньше моделей,
                эта стратегия стоит 1 CP; в противном случае она стоит 2 CP.
            </div>
        </div>
    )
}

export const WRECKAZ = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>WRECKAZ</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                До конца фазы, каждый раз, когда модель в этом подразделении совершает атаку,
                нацеленную на транспортное средство, добавляйте 1 к броску ранения этой атаки.
            </div>
        </div>
    )
}

export const DED_SNEAKY = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>DED SNEAKY</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза перемещения</span>.
                Выберите одно ПЕХОТНОЕ подразделение из вашей армии, которое находится в пределах 3" от любого края
                поля боя. Поместите это подразделение в стратегический резерв.
            </div>
        </div>
    )
}

export const GET_DA_LOOT = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>GET DA LOOT</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза командования</span>.
                Выберите одно пехотное подразделение из вашей армии, которое находится на поле боя.
                До начала вашей следующей фазы командования это подразделение получает способность "Защищенная цель".
            </div>
        </div>
    )
}

export const TIDE_OF_MUSCLE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>TIDE OF MUSCLE</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза атаки</span>.
                Этот отряд может игнорировать любые или все модификаторы броска рывка.
            </div>
        </div>
    )
}

export const GROT_SHIELDS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>GROT SHIELDS</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы противника</span>.
                Выберите одно подразделение ПЕХОТЫ ОРКОВ из вашей армии, затем выберите одно подразделение пехоты
                ГРЕТЧИНОВ (исключая подразделения ПЕРСОНАЖЕЙ) из вашей армии, которое находится в пределах 6" от
                этого подразделения. До конца фазы вражеские модели не могут выбрать выбранное подразделение
                ПЕХОТЫ ОРКОВ в качестве цели, если выбранное подразделение ПЕХОТЫ ГРЕТЧИНОВ является более близкой
                видимой целью.
            </div>
        </div>
    )
}

export const TELLYPORTA = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>TELLYPORTA</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза развертывания</span>.
                Выберите из своей армии одно подразделение ОРКОВ, с рейтингом мощности 20 или меньше. Вы можете настроить
                этого юнита вместо того, чтобы устанавливать его на поле боя. Если вы это сделаете, то на этапе подкрепления
                одной из фаз вашего передвижения вы можете разместить это подразделение в любом месте поля боя, на расстоянии
                более 9" от любых вражеских моделей. Если вы выберете ТРАНСПОРТНУЮ единицу, все отправленные юниты останутся
                отправленными, когда эта единица будет установлена на поле боя.
            </div>
        </div>
    )
}

export const MORE_DAKKA = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>MORE DAKKA!</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                До конца фазы оружие Дакка, которым оснащен юнит, считается находящимся в пределах половины
                радиуса действия при определении количества атак, произведенных этим оружием.
            </div>
        </div>
    )
}

export const TANKBUSTA_BOMB = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>TANKBUSTA BOMB</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза атаки</span>.
                Выберите одну модель в этом подразделении; эта модель может совершить только одну атаку на этой фазе и
                должна быть нацелена этой атакой на вражеское ТРАНСПОРТНОЕ средство, но если попадание получено, это
                подразделение получает 2D3 смертельных ранения и последовательность атак заканчивается.
            </div>
        </div>
    )
}

export const CAREEN = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>CAREEN!</span>
                <span>1 CP / 2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Любой фазе</span>.
                Если  модель боевой машины орков в вашей армии, которая не находится в пределах досягаемости вражеских
                моделей, уничтожается и взрывается. Эта модель может сделать обычное движение до 6", прежде чем устранить
                взрыв. Если это ТРАНСПОРТНОЕ средство модели "УНИВЕРСАЛ" или "ТИТАНИК", эта стратегия стоит 2 CP; в
                противном случае она стоит 1 CP.
            </div>
        </div>
    )
}

export const RAMMING_SPEED = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>RAMMING SPEED</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза атаки</span>.
                До конца фазы, при рывке для этого устройства, вместо этого делайте рывок 3D6.
                До конца фазы, когда этот юнит завершит атакующий ход, выберите одного вражеского юнита,
                который находится в пределах досягаемости от него, и бросьте 1D6: при 2+ этот вражеский
                юнит получает смертельные ранения D3.
            </div>
        </div>
    )
}

export const BLITZA_DAKKA = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>BLITZA DAKKA</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                До конца фазы, каждый раз, когда модель в этом подразделении совершает атаку,
                нацеленную на вражеское подразделение в радиусе 12", повторно бросайте
                бросок удара, равный 1. Если у этого юнита СКОРОСТНОГО МОБА есть ключевое слово
                KUSTOM BOOSTA-BLASTAS, вместо этого сделайте повторный бросок хита 1-2.
            </div>
        </div>
    )
}

export const CRASHIN_THROUGH = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>CRASHIN’ THROUGH</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза атаки</span>.
                Если у этого юнита есть способность Spiked Ram, он не может использовать эту способность в этот ход.
                Выберите одного вражеского юнита в пределах 1" от этого юнита SPEED FREEKS и бросьте по 1D6 для каждой
                модели, содержащейся в юните SPEED FREEKS (максимум шесть D6).
                <div>Если у этого юнита SPEED FREEKS есть ключевое слово BIKER, то за каждый результат игры в кости, равный 4+, этот вражеский юнит получает 1 смертельное ранение.</div>
                <div>Если у этого юнита SPEED FREEKS есть ключевое слово VEHICLE (исключая MEGA TRACK SCRAPJETS и KUSTOM BOOST A-BLAST В качестве юнитов), за каждый результат игры в кости, равный 4+, этот вражеский юнит получает смертельные ранения D3.</div>
                <div>Если у этого юнита SPEED FREEKS есть ключевые слова MEGATRAKK SCRAPJETS или KUSTOM BOOSTA-BLASTAS, то за каждый результат игры в кости 2-5 этот вражеский юнит получает D3 смертельных ранения; за каждый результат игры в кости 6 этот вражеский юнит получает 2D3 смертельных ранения.</div>
            </div>
        </div>
    )
}

export const MORE_GITZ_OVER_ERE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>MORE GITZ OVER ’ERE!</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза передвижения</span>.
                Когда подразделение спидмобилей из вашей армии отступает:
                <div>Этот юнит по-прежнему имеет право стрелять в этот ход, даже если он отступил.</div>
                <div>Если у этого отряда есть ключевое слово BOOMDAKKA SNAZZWAGONS, то до конца хода каждый
                    раз, когда модель в этом отряде совершает атаку дальнего боя, неизмененный бросок 6 ударов
                    дает 1 дополнительный удар.</div>
            </div>
        </div>
    )
}

export const ATTACK_OUT_O_DA_SUN = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>ATTACK OUT O’ DA SUN’</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Конец вашего хода</span>.
                Уберите это подразделение с поля боя. На этапе подкрепления вашей следующей фазы перемещения
                вы можете вернуть это подразделение на поле боя в любом месте, удаленном более чем на 9" от
                любых вражеских моделей. Если сражение заканчивается, а этого подразделения нет на поле боя,
                оно уничтожается.
            </div>
        </div>
    )
}

export const DRIVE_BY_DAKKA = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>DRIVE BY DAKKA</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Конец фазы стрельбы</span>.
                Этот юнит может немедленно совершить обычное движение, как если бы это была ваша фаза
                движения. Этот юнит не имеет права взимать плату за этот ход.
            </div>
        </div>
    )
}

export const CLOUD_OF_SMOKE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>CLOUD OF SMOKE</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Начало стрельбы противника</span>.
                До конца фазы, пока дружественная единица транспортного средства SPEED FREEKS находится
                в пределах 6" от выбранной единицы, каждый раз, когда дальняя атака нацелена на эту единицу,
                вычтите 1 из броска попадания этой атаки.
            </div>
        </div>
    )
}

export const ORKS_IS_NEVER_BEATEN = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>ORKS IS NEVER BEATEN</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                Если модель персонажа ОРКА в вашей армии, которая еще не была выбрана для боя на этом
                этапе, будет уничтожена. Не удаляйте эту модель из игры - она может сражаться после
                того, как подразделение атакующей модели закончит совершать атаки. Если характеристики
                выбранной модели изменяются по мере нанесения урона, используйте нижнюю строку профиля
                этой модели при разрешении этих атак. После устранения атак уничтоженной модели она затем удаляется.
            </div>
        </div>
    )
}

export const EXTRA_GUBBINZ = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>EXTRA GUBBINZ</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                Выберите одну модель ПЕРСОНАЖА ОРКОВ в вашей армии и подарите им одного блестящего Губбинца.
            </div>
        </div>
    )
}

export const BIG_BOSS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>BIG BOSS</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                Выберите одного ПЕРСОНАЖА ОРКОВ из вашей армии и определите одну черту военачальника для
                этой модели (это должна быть черта военачальника, которой они могли бы обладать); эта модель
                рассматривается как ваш ВОЕНАЧАЛЬНИК только для целей этой черты военачальника.
            </div>
        </div>
    )
}


