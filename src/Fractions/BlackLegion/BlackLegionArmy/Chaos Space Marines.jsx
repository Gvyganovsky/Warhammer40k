import style from "../../../scss/CombatUnit.module.scss";
import ChaosSpacemarines from "../../../assets/BlackLegion/Chaos Space Marines.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { WeaponOther } from "../../../Components/WeaponOther";

import {
    Bolt_pistol, Plasma_pistol_S, Plasma_pistol_Sp, Boltgun, Chainsword,
    Daemon_blade, Heavy_chainaxe, Frag_grenade, Krak_grenade
} from "../BlackLegionWeapon";

import {
    DEATH_TO_THE_FALSE_EMPEROR, FURY_OF_KHORNE, GRANDFATHERS_BLESSINGS, HATRED_ETERNAL,
    MURDEROUS_PERFECTION
} from "../BlackLegionStrat";

import morale from "../../../assets/icons/morale.png";

export const ChaosSpaceMarines = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={ChaosSpacemarines}
                M='6"' WS='3+' BS='3+' S='4' T='4' W='2 ' A='3' Ld='7' Sv='3+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Bolt_pistol /> <Plasma_pistol_S />
                    <Plasma_pistol_Sp /> <Boltgun />
                    <Chainsword /> <Daemon_blade /> <Heavy_chainaxe />
                    <Frag_grenade /> <Krak_grenade />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>
                    <WeaponOther title='Chaos icon' img={morale}
                        text='Каждый раз, когда для подразделения носителя проводится тест на боевое 
                        истощение, добавляйте 1 к этому тесту на боевое истощение.'/>
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