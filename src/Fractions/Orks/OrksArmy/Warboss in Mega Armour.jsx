import style from "../../../scss/CombatUnit.module.scss";
import WarbossinMegaarmour from "../../../assets/Orks/Warboss in Mega Armour.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Big_shoota, Uge_choppa
} from "../OrksWeapon";

import {
    UNBRIDLED_CARNAGE, SHOWIN_OFF, ORKS_IS_NEVER_BEATEN, EXTRA_GUBBINZ,
    BIG_BOSS, WRECKAZ, GET_DA_LOOT, GROT_SHIELDS, TELLYPORTA,
    MORE_DAKKA
} from "../OrksStrat";

import WS from "../../../assets/icons/WS.png";
import Sv from "../../../assets/icons/Sv.png";
import hit from "../../../assets/icons/hit.svg";

export const WarbossinMegaArmour = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={WarbossinMegaarmour}
                M='5"' WS='2+' BS='5+' S='6' T='6' W='7' A='5' Ld='8' Sv='2+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Big_shoota /> <Uge_choppa />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Dead Tough' AbNum='5+' AbIcon={Sv}
                    AbText='Эта модель имеет 5+ неуязвимых сейвов.' />

                <AbilitiesBlock AbTitle='Grot Gunner' AbNum='5+' AbIcon={hit}
                    AbText='Каждый раз, когда эта модель совершает атаку с помощью big shoota или
                    реликвии, заменяющей большой выстрел этой модели, добавляйте 1 к броску
                    попадания этой атаки.' />

                <AbilitiesBlock AbTitle='Warboss (Aura)' AbNum='' AbIcon={WS}
                    AbText='Пока дружественное отряд или ПЕРСОНАЖНАЯ единица находится в пределах 6" 
                    от этой модели, каждый раз, когда модель в этом подразделении совершает атаку 
                    ближнего боя, добавляйте 1 к броску попадания этой атаки.' />
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <UNBRIDLED_CARNAGE /> <SHOWIN_OFF />
                <ORKS_IS_NEVER_BEATEN /> <EXTRA_GUBBINZ />
                <BIG_BOSS /> <WRECKAZ /> <GET_DA_LOOT />
                <GROT_SHIELDS /> <TELLYPORTA /> <MORE_DAKKA />
            </section>
        </section >
    )
}