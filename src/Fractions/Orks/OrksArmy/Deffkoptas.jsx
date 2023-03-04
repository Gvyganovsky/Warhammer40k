
import style from "../../../scss/CombatUnit.module.scss";
import deffkoptas from "../../../assets/Orks/Deffkoptas.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { WeaponOther } from "../../../Components/WeaponOther";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Slugga, Kopta_rokkits, Kustom_mega_blasta, Spinnin_blades,
    Stikkbombz
} from "../OrksWeapon";

import {
    GOTEM_TRAPPED, BLITZA_DAKKA, CRASHIN_THROUGH, RAMMING_SPEED, BREAKIN_HEADS,
    MORE_GITZ_OVER_ERE, ATTACK_OUT_O_DA_SUN, DRIVE_BY_DAKKA, TELLYPORTA, CLOUD_OF_SMOKE
} from "../OrksStrat";

import hit from "../../../assets/icons/hit.svg";
import location from "../../../assets/icons/location.png";
import M from "../../../assets/icons/M.png";

export const Deffkoptas = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={deffkoptas}
                M='14"' WS='3+' BS='5+' S='4' T='5' W='4' A='2' Ld='6' Sv='4+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Slugga /> <Kopta_rokkits />
                    <Kustom_mega_blasta /> <Spinnin_blades /> <Stikkbombz />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>
                    <WeaponOther title='Big bomb' img={hit}
                        text='Один раз за битву, в вашей фазе передвижения, после того, как носитель
                        сделает обычный ход или продвинется вперед, вы можете выбрать одну точку
                        на поле боя, которую носитель переместил в этой фазе. Бросьте по одному
                        D6 для каждого юнита в пределах 3" от этой точки, вычитая 1, если этот юнит
                        является ПЕРСОНАЖЕМ при 4+ этот юнит получает смертельные ранения D3.'/>
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Big Red Button' AbNum='+1' AbIcon={M}
                    AbText='Каждый раз, когда этот юнит продвигается вперед, не делайте бросок на рывок.
                    Вместо этого, до конца фазы, добавьте 6" к характеристике перемещения модели
                    в этом блоке.'/>

                <AbilitiesBlock AbTitle='Swoopin’ Down' AbNum='' AbIcon={location}
                    AbText='Во время развертывания вы можете разместить это подразделение высоко в небе 
                    вместо того, чтобы размещать его на поле боя. Если вы это сделаете, то на этапе 
                    подкрепления одной из фаз вашего передвижения вы можете разместить это подразделение
                    в любом месте поля боя, на расстоянии более 9 дюймов от любых вражеских моделей.'/>
            </section>

            <section className={style.Content_block}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <GOTEM_TRAPPED /> <BLITZA_DAKKA />
                <CRASHIN_THROUGH /> <RAMMING_SPEED />
                <BREAKIN_HEADS /> <MORE_GITZ_OVER_ERE />
                <ATTACK_OUT_O_DA_SUN /> <DRIVE_BY_DAKKA />
                <TELLYPORTA /> <CLOUD_OF_SMOKE />
            </section>
        </section >
    )
}