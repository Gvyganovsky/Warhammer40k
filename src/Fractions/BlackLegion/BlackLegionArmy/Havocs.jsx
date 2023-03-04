import React from "react";
import style from "../../../scss/CombatUnit.module.scss";
import havocs from "../../../assets/BlackLegion/Havocs.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";

import {
    Plasma_pistol_S, Plasma_pistol_Sp, Boltgun, Flamer, 
    Havoc_autocannon, Lascannon, Chainsword
} from "../BlackLegionWeapon";

import {
    DEATH_TO_THE_FALSE_EMPEROR, FURY_OF_KHORNE, GRANDFATHERS_BLESSINGS, HATRED_ETERNAL,
    MURDEROUS_PERFECTION
} from "../BlackLegionStrat";

export const Havocs = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={havocs}
                M='6"' WS='3+' BS='3+' S='4' T='5' W='2' A='3' Ld='8' Sv='3+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Plasma_pistol_S /> <Plasma_pistol_Sp/>
                    <Boltgun /> <Flamer /> <Havoc_autocannon />
                    <Lascannon /> <Chainsword />
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