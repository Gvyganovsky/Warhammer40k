import style from "../../../scss/CombatUnit.module.scss";
import Necronsoverlord from "../../../assets/Necrons/Necron Overlord.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { DamageBlock } from "../../../Components/DamageBlock";
import { WeaponOther } from "../../../Components/WeaponOther";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Staff_of_light, Tachyon_arrow, Hyperphase_glaive, Hyperphase_sword,
    Voidblade, Voidscythe, Warscythe
} from "../NecronsWeapon";

import {
    BLOOD_RITES, METHODICAL_DESTRUCTION, TECHNO_ORACULAR_TARGETING, RESURRECTION_PROTOCOLS,
    HAND_OF_THE_PHAERON, DYNASTIC_HEIRLOOMS, RAREFIED_NOBILITY, TALENT_FOR_ANNIHILATION,
    TRANSLOCATION_CRYPT, RECLAIM_A_LOST_EMPIRE, EMPYRIC_DAMPING, SOLAR_PULSE
} from "../NecronsStrat";

import general from "../../../assets/icons/general.png";

export const NecronsOverlord = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={Necronsoverlord}
                M='6"' WS='2+' BS='2+' S='6' T='5' W='5' A='4' Ld='10' Sv='3+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Staff_of_light /> <Tachyon_arrow />
                    <Hyperphase_glaive /> <Hyperphase_sword />
                    <Staff_of_light /> <Voidblade />
                    <Voidscythe /> <Warscythe />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>
                    <WeaponOther title='Resurrection Orb' img={general}
                        text='Один раз за битву, на этапе вашего командования, носитель может 
                        использовать свой шар воскрешения. Если это произойдет, выберите одно 
                        дружественное подразделение в пределах 6" от носителя, которое не достигло 
                        своей начальной численности и протоколы реанимации которого не были введены
                        в действие на этом этапе. Вводятся в действие протоколы реанимации этого 
                        подразделения, и каждая уничтоженная модель в этом подразделении начинает 
                        собираться заново.'/>
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <BLOOD_RITES /> <METHODICAL_DESTRUCTION />
                <TECHNO_ORACULAR_TARGETING /> <RESURRECTION_PROTOCOLS />
                <HAND_OF_THE_PHAERON /> <DYNASTIC_HEIRLOOMS />
                <RAREFIED_NOBILITY /> <TALENT_FOR_ANNIHILATION />
                <TRANSLOCATION_CRYPT /> <RECLAIM_A_LOST_EMPIRE />
                <EMPYRIC_DAMPING /> <SOLAR_PULSE />
            </section>
        </section >
    )
}