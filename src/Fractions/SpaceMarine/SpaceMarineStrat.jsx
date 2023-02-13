import React from "react";
import style from "../../scss/CombatUnit.module.scss";

export const SpaceMarineStrat = () => {
    return (
        <div>
        </div>
    )
}

export const TRANSHUMAN_PHYSIOLOGY = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>TRANSHUMAN PHYSIOLOGY</span>
                <span>1 CP / 2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза атаки противника</span>.
                До конца фазы, каждый раз, когда против этого юнита совершается атака, неизмененный бросок ранения
                1-3 для этой атаки завершается неудачей, независимо от каких-либо способностей, которыми может обладать
                оружие или модель, производящая атаку. Если в этом блоке содержится 5 или меньше моделей, эта стратегия
                стоит 1 CP; в противном случае она стоит 2 CP.
            </div>
        </div>
    )
}

export const GENE_WROUGHT_MIGHT = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>GENE-WROUGHT MIGHT</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза ближнего боя</span>.
                До конца фазы, каждый раз, когда модель в этом подразделении совершает атаку
                ближнего боя, неизмененный бросок удара из 6 автоматически ранит цель.
            </div>
        </div>
    )
}

export const OCULAR_NETWORKING = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>OCULAR NETWORKING</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза атаки</span>.
                До конца фазы каждый раз, когда модель в этом подразделении совершает атаку,
                нацеленную на МОНСТРА или ТРАНСПОРТНОЕ средство, с неизмененным броском ранения 6,
                улучшайте характеристику бронепробиваемости этой атаки на 2 (это суммируется с бонусом,
                полученным от способности "Боевые доктрины").
            </div>
        </div>
    )
}

export const SONS_OF_GUILLIMAN = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #294a67 0)' }}>
                <span>SONS OF GUILLIMAN</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза атаки</span>.
                До конца этой фазы, вы можете повторно выполнить бросок удара. В противном случае, вы можете
                повторно использовать бросок хита, равный 1.
            </div>
        </div>
    )
}

export const PIVOTAL_MOMENT = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>PIVOTAL MOMENT</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                До конца фазы, каждый раз, когда модель "АВАНГАРДНОГО КОПЬЯ" совершает дальнюю атаку
                против вражеского ВОЕНАЧАЛЬНИКА, успешный бросок раны наносит количество смертельных ран,
                равное урону, характерному для оружия, используемого для этой атаки, и последовательность
                атак заканчивается.
            </div>
        </div>
    )
}

export const HONOURED_SERGEANT = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>HONOURED SERGEANT</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Перед битвой</span>.
                Выберите одну модель ультрамаринов из вашей армии, в профиле которой есть слово "Сержант".
                Эта модель может иметь одну из следующих реликвий боевого снаряжения специального выпуска,
                даже если они не являются ПЕРСОНАЖЕМ: Master-crafted Weapon, Digital Weapons, Hellfury Bolts,
                Sunwrath Pistol.
            </div>
        </div>
    )
}

export const SQUAD_DOCTRINES = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>SQUAD DOCTRINES</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза движения</span>.
                Выберите одно подразделение ПЕХОТЫ УЛЬТРАМАРИНОВ или байкеров УЛЬТРАМАРИНОВ из вашей армии,
                затем выберите либо "Опустошитель", либо "Тактическую доктрину", либо "Штурмовую доктрину".
                До начала вашей следующей фазы передвижения это подразделение получает бонус в виде этой
                боевой доктрины вместо активной боевой доктрины.
            </div>
        </div>
    )
}

export const HAMMER_OF_WRATH = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>HAMMER OF WRATH</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза атаки</span>.
                Если подразделение ПРЫЖКОВОГО РАНЦА АДЕПТУС АСТАРТЕС из вашей армии завершает атакующий ход.
                Выберите одного вражеского юнита в пределах досягаемости этого юнита с ПРЫЖКОВЫМ РАНЦЕМ и
                бросьте по одному D6 для каждой модели в этом юните с ПРЫЖКОВЫМ РАНЦЕМ, который находится
                в пределах досягаемости этого вражеского юнита. За каждый результат игры в кости, который
                равен или превышает характеристику выносливости вражеского юнита, он получает 1 смертельное
                ранение.
            </div>
        </div>
    )
}

export const UNCOMPROMISING_FIRE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>UNCOMPROMISING FIRE</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                Выберите одно пехотное подразделение из вашей армии, которое выполняет действие.
                Это устройство может выполнить эту фазу без сбоя этого действия.
            </div>
        </div>
    )
}

export const STEADY_ADVANCE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>STEADY ADVANCE</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза передвижения</span>.
                Когда пехотное подразделение из вашей армии совершает обычный ход. Считается, что до
                конца хода этот блок оставался неподвижным.
            </div>
        </div>
    )
}

export const DISPERSAL_PROTOCOLS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>DISPERSAL PROTOCOLS</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Конец фазы боя</span>.
                Выберите одно подразделение из вашей армии, которое находится в пределах досягаемости
                любых вражеских подразделений. Этот отряд может отступить назад, как если бы это была
                ваша фаза движения.
            </div>
        </div>
    )
}

export const AUSPEX_SCAN = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>AUSPEX SCAN</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Конец фазы передвижения противника</span>.
                Выберите одно пехотное подразделение из вашей армии, которое не находится в пределах
                досягаемости вражеских подразделений. Этот юнит может стрелять так, как если бы это
                была ваша фаза стрельбы, но его модели могут нацеливаться только на одного подходящего
                вражеского юнита, который был создан в качестве подкрепления в этот ход и который при
                этом находится в пределах 12" от их юнита.
            </div>
        </div>
    )
}

export const SMOKESCREEN = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>SMOKESCREEN</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы противника</span>.
                Если в качестве цели атаки выбирается подразделение ДЫМОВОЙ ЗАВЕСЫ из вашей армии.
                До конца фазы, каждый раз, когда производится атака против этого юнита, вычитайте
                1 из броска попадания этой атаки.
            </div>
        </div>
    )
}

export const TACTICAL_AUGURY = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>TACTICAL_AUGURY</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза стрельбы</span>.
                До конца фазы, каждый раз, когда модель в этом подразделении совершает атаку дальнего боя,
                цель не получает преимуществ прикрытия от этой атаки.
            </div>
        </div>
    )
}

export const ONLY_IN_DEATH_DOES_DUTY_END = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>ONLY IN DEATH DOES DUTY END</span>
                <span>2 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                Когда модель персонажа из вашей армии, которая еще не была
                выбрана для участия в этом этапе, будет уничтожена. Не удаляйте
                эту модель из игры - она может сражаться после того, как подразделение
                атакующей модели закончит совершать атаки. После устранения атак уничтоженной
                модели она затем удаляется.
            </div>
        </div>
    )
}

export const INSPIRING_COMMAND = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>INSPIRING COMMAND</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Начало фазы боя</span>.
                Выберите одну модель МАСТЕРА ОРДЕНА УЛЬТРАМАРИНОВ, КАПИТАНА УЛЬТРАМАРИНОВ или ЛЕЙТЕНАНТА УЛЬТРАМАРИНОВ из вашей армии.
                До конца фазы диапазон способностей ауры этой модели увеличивается на 3" (максимум до 9").
            </div>
        </div>
    )
}

export const HONOURED_BY_MACRAGGE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>HONOURED BY MACRAGGE</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Перед боем</span>.
                Вы можете подарить одну реликвию модели, которая взята из ордена-преемника Ультрамаринов, вместо того,
                чтобы дарить им реликвию специального снаряжения или реликвию ордена из Codex: Space Marines. Если вы
                это сделаете, замените ключевое слово ULTRAMARINES во всех экземплярах этой реликвии (если таковые имеются)
                на ключевое слово той модели. Вы можете использовать эту стратегию только один раз за битву.
            </div>
        </div>
    )
}

export const EXEMPLAR_OF_THE_CHAPTER = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>EXEMPLAR OF THE CHAPTER</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Перед боем</span>.
                Вы можете сгенерировать для них одну дополнительную черту военачальника; она должна быть из таблицы
                характеристик военачальника ультрамаринов. Каждая черта военачальника в вашей армии должна быть
                уникальной (если она сгенерирована случайным образом, повторно используйте повторяющиеся результаты).
                Вы можете использовать эту уловку только один раз.
            </div>
        </div>
    )
}

export const RELIC_OF_THE_CHAPTER = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>EXEMPLAR OF THE CHAPTER</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Перед боем</span>.
                Выберите одну модель ПЕРСОНАЖА АДЕПТУС АСТАРТЕС из вашей армии и дайте им одну реликвию Ордена.
            </div>
        </div>
    )
}

export const HERO_OF_THE_CHAPTER = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #ba2617 0)' }}>
                <span>HERO OF THE CHAPTER</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Перед боем</span>.
                Выберите одну модель ПЕРСОНАЖА АДЕПТУС АСТАРТЕС из вашей армии (исключая именованных персонажей)
                и определите для нее одну черту Военачальника (это должна быть черта Военачальника, которой она
                может обладать); эта модель рассматривается как ваш ВОЕНАЧАЛЬНИК только для целей этой черты
                военачальника.
            </div>
        </div>
    )
}

export const GUERILLA_TACTICS = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #246656 0)' }}>
                <span>GUERILLA TACTICS</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза передвижения</span>.
                Когда для перемещения выбирается подразделение "ФОБОС" из вашей армии, которое более чем на 6"
                отличается от любых вражеских моделей. Если в миссии, которую вы выполняете, используется правило
                стратегических резервов, поместите это подразделение в Стратегические резервы. Это подразделение
                не может прибыть из Стратегических резервов в тот же ход, в который оно помещено в Стратегические
                резервы.
            </div>
        </div>
    )
}

export const VOXBREAKER_AUSPEX = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>GUERILLA TACTICS</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза командования</span>.
                Выберите одного вражеского юнита, который находится в пределах 18" от VOXBREAKER AUSPEX
                из вашей армии. До начала вашего следующего хода: Каждый раз, когда модель в этом вражеском
                подразделении совершает атаку дальнего боя, вычтите 1 из броска попадания этой атаки.
                Если это подразделение объявляет атаку, вы можете выбрать одно подразделение из вашей армии,
                которое является целью этого нападения, чтобы удерживать его неподвижно или настроиться на
                защиту.
            </div>
        </div>
    )
}

export const SABOTEUR_EXPLOSIVE_PACK = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>SABOTEUR EXPLOSIVE PACK</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                когда для отступления будет выбрано подразделение ДИВЕРСАНТОВ со взрывчаткой из вашей армии.
                Прежде чем этот юнит двинется, выберите одну вражескую МАШИНУ или МОНСТРА, которые находятся
                в пределах досягаемости этого юнита, и бросьте один D6 (прибавляя 3 к результату, если этот
                вражеский юнит является СТРОИТЕЛЬНЫМ юнитом): при 2-5 этот вражеский юнит получает
                смертельные ранения D3. На 6+ этот вражеский юнит получает смертельные ранения D6.
            </div>
        </div>
    )
}

export const ARMOUR_OF_CONTEMPT = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #673d29 0)' }}>
                <span>ARMOUR OF CONTEMPT</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза боя</span>.
                Если  модель транспортного средства из вашей армии потеряет рану
                в результате смертельного ранения. До конца фазы, каждый раз, когда
                эта модель теряла рану в результате смертельного ранения, бросайте
                один D6: на 5+ эта рана не теряется.
            </div>
        </div>
    )
}

export const GRAV_PULSE = () => {
    return (
        <div className={style.strat}>
            <div className={style.strat_title} style={{ background: 'linear-gradient(315deg, transparent 8px, #626869 0)' }}>
                <span>GRAV PULSE</span>
                <span>1 CP</span>
            </div>
            <div className={style.strat_text}>
                <span className={style.strat_text_bold}>Фаза передвижения</span>.
                REPULSOR FIELD подразделение АДЕПТУС АСТАРТЕС из вашей армии отступает. До
                конца хода этот юнит по-прежнему имеет право стрелять, даже если он откатился
                назад. Фаза атаки вашего противника, когда в качестве цели атаки выбирается
                РЕПУЛЬСОРНОЕ ПОЛЕВОЕ подразделение АДЕПТУС АСТАРТЕС из вашей армии. До конца
                фазы вычтите 2 из бросков заряда, сделанных для любого блока, который объявляет
                заряд против этого блока РЕПУЛЬСОРНОГО ПОЛЯ.
            </div>
        </div>
    )
}