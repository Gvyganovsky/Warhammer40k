
import style from "../../../scss/CombatUnit.module.scss";
import helbrute from "../../../assets/BlackLegion/Helbrute.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";

import {
    Combi_bolter, Heavy_flamer, Helbrute_plasma_cannon, Missile_launcher_F, Missile_launcher_K,
    Multi_melta, Reaper_autocannon, Twin_heavy_bolter, Twin_lascannon, Helbrute_fist, Helbrute_hammer,
    Power_scourge
} from "../BlackLegionWeapon";

import {
    DEATH_TO_THE_FALSE_EMPEROR, FURY_OF_KHORNE, GRANDFATHERS_BLESSINGS, HATRED_ETERNAL,
    MURDEROUS_PERFECTION
} from "../BlackLegionStrat";

export const Helbrute = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={helbrute}
                M='6"' WS='3+' BS='3+' S='6' T='7' W='8' A='5' Ld='8' Sv='3+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Combi_bolter /> <Heavy_flamer />
                    <Helbrute_plasma_cannon /> <Missile_launcher_F />
                    <Missile_launcher_K /> <Multi_melta /> <Reaper_autocannon />
                    <Twin_heavy_bolter /> <Twin_lascannon /> <Helbrute_fist />
                    <Helbrute_hammer /> <Power_scourge />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <DEATH_TO_THE_FALSE_EMPEROR /> <FURY_OF_KHORNE />
                <GRANDFATHERS_BLESSINGS /> <HATRED_ETERNAL /> <MURDEROUS_PERFECTION />
            </section>
        </section >
    )
}