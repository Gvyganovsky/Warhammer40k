import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import Primarispsyker from "../../../assets/AstraMilitarum/Primaris Psyker.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Laspistol, Force_stave
} from "../AstraMilitarumWeapon";

import {
    OFFICER_CADRE, IMPERIAL_COMMANDERS_ARMOURY, ACCEPTABLE_LOSSES, VICIOUS_TRAPS,
    SHIELD_OF_FLESH
} from "../AstraMilitarumStrat";

import W from "../../../assets/icons/W.png";
import Sv from "../../../assets/icons/Sv.png";

import hit from "../../../assets/icons/hit.svg";
import morale from "../../../assets/icons/morale.png";
import location from "../../../assets/icons/location.png";
import question from "../../../assets/icons/question.png";

export const PrimarisPsyker = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={Primarispsyker}
                M='6"' WS='3+' BS='3+' S='3' T='3' W='4' A='3' Ld='8' Sv='5+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Laspistol /> <Force_stave />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Заклинания</div>
                <AbilitiesBlock AbTitle='TERRIFYING VISIONS' AbNum='' AbIcon={morale}
                    AbText='Выберите одного вражеского юнита в радиусе 18". До начала вашей следующей командной фазы:
                    Вычтите 2 из характеристики лидерства моделей в этом подразделении. Ваш противник не может
                    выбрать это подразделение для стратегии Безумной храбрости, а также не может использовать
                    какое-либо правило, которое позволило бы ему повторно провести тест на моральный дух,
                    проведенный для этого подразделения. Кроме того, бросок 2D6: если результат равен или
                    превышает характеристику лидерства этого юнита (после применения модификатора выше),
                    любое действие, которое юнит выполняет в данный момент, немедленно завершается неудачей,
                    и до начала вашей следующей психической фазы этот юнит не может выполнять действия.'/>

                <AbilitiesBlock AbTitle='GAZE OF THE EMPEROR' AbNum='1 / D3' AbIcon={W}
                    AbText='Ведьмин огонь: Взгляд Императора имеет значение варп-заряда 6. Если проявлено,
                    выберите одну модель врага в пределах 12 дюймов от этого ПСАЙКЕРА и сделайте
                    ее видимой для него. Проведите прямую линию между любой частью основания этой
                    модели (или корпуса) и основанием этого ПСАЙКЕРА. Бросьте один D6 для юнита
                    этой вражеской модели и по одному D6 для каждого другого юнита, через который
                    проходит эта линия: на 1-5, юнит, для которого выполняется бросок, получает 1
                    смертельное ранение; на 6, юнит, для которого выполняется бросок, получает D3
                    смертельных ранения.'/>

                <AbilitiesBlock AbTitle='PSYCHIC BARRIER' AbNum='5+' AbIcon={Sv}
                    AbText='Благословение: Психический барьер имеет значение варп-заряда 6. Если проявится,
                    выберите одно дружественное подразделение ASTRA MILITARUM в радиусе 12 дюймов
                    от этого ПСАЙКЕРА. До начала вашей следующей фазы экстрасенсорики модели в
                    этом подразделении имеют запас неуязвимости 5+.'/>

                <AbilitiesBlock AbTitle='NIGHTSHROUD' AbNum='' AbIcon={hit}
                    AbText='Благословение: У Ночного савана значение варп-заряда равно 6. Если проявится,
                    выберите одно дружественное подразделение ASTRA MILITARUM в радиусе 12"
                    от этого ПСАЙКЕРА. Вы не можете выбрать ТИТАНИЧЕСКУЮ единицу, если результатом
                    психического теста не было неизмененное значение 11+. До начала вашей следующей
                    психической фазы, каждый раз, когда производится атака против этого юнита,
                    неизмененный бросок удара 1-3 всегда терпит неудачу, независимо от каких-либо
                    способностей, которыми может обладать оружие или модель, производящая атаку.'/>

                <AbilitiesBlock AbTitle='MENTAL SHACKLES' AbNum='2"' AbIcon={location}
                    AbText='Проклятие: Ментальные кандалы имеют значение варп-заряда 6. Если проявится,
                    выберите одного вражеского юнита в радиусе 18 дюймов от этого ПСАЙКЕРА. До
                    начала вашей следующей психической фазы:
                    Вычтите 2" из характеристики перемещения моделей в этом блоке.
                    Вычтите 2 из предварительных и загрузочных роликов, сделанных для этого устройства.'/>

                <AbilitiesBlock AbTitle='PSYCHIC MAELSTROM' AbNum='' AbIcon={question}
                    AbText='Ведьмин огонь: Психический водоворот имеет значение варп-заряда 6. Если проявлено,
                    бросьте число D6, равное результату психического теста: за каждые 5+ ближайший
                    вражеский юнит, который находится в пределах 18 дюймов от этого ПСАЙКЕРА и виден
                    ему, получает 1 смертельное ранение (максимум 6 смертельных ранений).'/>
            </section>

            <section className={style.Content_block}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <OFFICER_CADRE /> <IMPERIAL_COMMANDERS_ARMOURY />
                <ACCEPTABLE_LOSSES /> <VICIOUS_TRAPS /> <SHIELD_OF_FLESH />
            </section>
        </section >
    )
}