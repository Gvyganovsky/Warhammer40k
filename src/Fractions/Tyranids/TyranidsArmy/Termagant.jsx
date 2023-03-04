import style from "../../../scss/CombatUnit.module.scss";
import termagant from "../../../assets/Tyranids/Termagant.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { WeaponOther } from "../../../Components/WeaponOther";

import {
    Termagant_spinefists, Fleshborer, Termagant_devourer
} from "../TyranidsWeapon";

import {
    UNPARALLELED_FEROCITY, OPPORTUNISTIC_ADVANCE, COMBINED_ASSAULT, CRITICAL_MASS,
    SCORCH_BUGS, ADRENAL_SURGE, BURIED_IN_WAIT, OVERRUN, ENDLESS_SWARM,
    BIO_ADAPTED_BORER_GRUBS, PATHOGENIC_SLIME
} from "../TyranidsStrat";

import S from "../../../assets/icons/S.png";
import hit from "../../../assets/icons/hit.svg";

export const Termagant = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={termagant}
                M='6"' WS='4+' BS='4+' S='3' T='3' W='1' A='1' Ld='5' Sv='5+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Termagant_spinefists /> <Fleshborer /> <Termagant_devourer />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>
                    <WeaponOther title='Adrenal glands' img={S}
                        text='Добавьте 1" к характеристике перемещения и добавьте 1 к
                        характеристике силы носителя.'/>

                    <WeaponOther title='Toxin sacs' img={hit}
                        text='Каждый раз, когда носитель совершает атаку в ближнем бою,
                        неизмененный бросок из 6 ударов автоматически ранит цель.'/>
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <UNPARALLELED_FEROCITY /> <OPPORTUNISTIC_ADVANCE />
                <COMBINED_ASSAULT /> <CRITICAL_MASS />
                <SCORCH_BUGS /> <ADRENAL_SURGE /> <BURIED_IN_WAIT />
                <OVERRUN /> <ENDLESS_SWARM />
                <BIO_ADAPTED_BORER_GRUBS /> <PATHOGENIC_SLIME />
            </section>
        </section >
    )
}