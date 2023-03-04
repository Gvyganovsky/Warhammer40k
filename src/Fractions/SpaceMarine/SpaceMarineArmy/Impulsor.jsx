import style from "../../../scss/CombatUnit.module.scss";
import impulsor from "../../../assets/SpaceMarine/Impulsor.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { DamageBlock } from "../../../Components/DamageBlock";
import { WeaponOther } from "../../../Components/WeaponOther";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Krak_missiles, Frag_missiles, Icarus_missiles, Fragstorm_grenade_launcher,
    Ironhail_heavy_stubber, Ironhail_skytalon_array, Storm_bolter
} from "../SpaceMarineWeapon";

import {
    OCULAR_NETWORKING, ARMOUR_OF_CONTEMPT, DISPERSAL_PROTOCOLS,
    TACTICAL_AUGURY, GRAV_PULSE
} from "../SpaceMarineStrat";

import BS from "../../../assets/icons/BS.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";
import Sv from "../../../assets/icons/Sv.png";

import question from "../../../assets/icons/question.png";
import skull from "../../../assets/icons/skull.png";
import general from "../../../assets/icons/general.png";

export const Impulsor = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={impulsor}
                M='14"' WS='6+' BS='3+' S='7' T='7' W='11' A='3' Ld='8' Sv='3+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Изменение характеристик от урона</div>
                <DamageBlock
                    img1={W} num1='6-11' num2='3-5' num3='1-2'
                    img2={BS} num4='14"' num5='7"' num6='4"'
                    img3={W} num7='3+' num8='4+' num9='5+'
                    img4={A} num10='3' num11='D3' num12='1' />
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Krak_missiles /> <Frag_missiles />
                    <Icarus_missiles /> <Fragstorm_grenade_launcher />
                    <Ironhail_heavy_stubber /> <Ironhail_skytalon_array /> <Storm_bolter />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>
                    <WeaponOther title='Orbital comms array' img={general}
                        text='На этапе вашего командования одна модель из вашей армии с орбитальной 
                        системой связи, которая не использовалась в этом сражении, может использовать 
                        ее для вызова орбитального заградительного огня. Если это произойдет, выберите
                        одну точку на поле боя и бросьте по одному D6 для каждого юнита в пределах D6"
                        от этой точки, вычитая 1 из результата, если юнит, для которого выполняется 
                        бросок, является ПЕРСОНАЖЕМ. На 4+ этот юнит получает смертельные ранения D3.'/>

                    <WeaponOther title='Shield dome' img={Sv}
                        text='У носителя есть 5+ неуязвимых сейвов.' />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Assault Vehicle' AbNum='' AbIcon={question}
                    AbText='Подразделения, находящиеся на борту этого транспорта, могут высадиться,
                    даже если на этом этапе он совершил обычное перемещение. Любой юнит, который
                    высаживается после того, как этот транспорт совершил обычный ход, не может
                    атаковать в этот ход.'/>

                <AbilitiesBlock AbTitle='Hover Tank' AbNum='' AbIcon={question}
                    AbText='Расстояния всегда измеряются до корпуса этой модели и от него.' />

                <AbilitiesBlock AbTitle='Explodes' AbNum='' AbIcon={skull}
                    AbText='Каждый раз, когда модель в этом блоке уничтожается, бросайте 1D6, прежде 
                    чем удалять ее из игры. На 6 он взрывается, и каждый юнит в пределах 3" получает 
                    1 смертельное ранение.' />
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <OCULAR_NETWORKING /> <ARMOUR_OF_CONTEMPT />
                <DISPERSAL_PROTOCOLS /> <TACTICAL_AUGURY /> <GRAV_PULSE />
            </section>
        </section >
    )
}