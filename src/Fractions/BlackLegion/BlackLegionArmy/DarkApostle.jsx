
import style from "../../../scss/CombatUnit.module.scss";
import Darkapostle from "../../../assets/BlackLegion/Dark Apostle.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";

import {
    Bolt_pistol, Accursed_crozius, Close_combat_weapon, Frag_grenade,
    Krak_grenade
} from "../BlackLegionWeapon";

import {
    DEATH_TO_THE_FALSE_EMPEROR, FURY_OF_KHORNE, GRANDFATHERS_BLESSINGS, HATRED_ETERNAL,
    MURDEROUS_PERFECTION
} from "../BlackLegionStrat";

export const DarkApostle = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={Darkapostle}
                M='10"' WS='6+' BS='4+' S='6' T='7' W='11' A='3' Ld='7' Sv='3+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Bolt_pistol /> <Accursed_crozius />
                    <Close_combat_weapon /> <Frag_grenade /> <Krak_grenade />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <DEATH_TO_THE_FALSE_EMPEROR /> <FURY_OF_KHORNE />
                <GRANDFATHERS_BLESSINGS /> <HATRED_ETERNAL /> <MURDEROUS_PERFECTION />
            </section>
        </section >
    )
}