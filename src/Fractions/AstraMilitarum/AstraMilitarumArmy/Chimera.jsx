
import style from "../../../scss/CombatUnit.module.scss";
import chimera from "../../../assets/AstraMilitarum/Chimera.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { WeaponOther } from "../../../Components/WeaponOther";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";
import { DamageBlock } from "../../../Components/DamageBlock";

import {
    Chimera_heavy_bolter, Chimera_heavy_flamer, Chimera_multi_laser,
    Heavy_bolter, Heavy_flamer, Heavy_stubber, Hunter_killer_missile,
    Lasgun_array, Storm_bolter
} from "../AstraMilitarumWeapon";

import {
    INGRAINED_PRECISION, OVERLAPPING_FIELDS_OF_FIRE, RELENTLESS, VENGEFUL_SALUTE,
    ACCEPTABLE_LOSSES, VICIOUS_TRAPS, SMOKE_LAUNCHERS, ABLATIVE_PLATING
} from "../AstraMilitarumStrat";

import M from "../../../assets/icons/M.png";
import BS from "../../../assets/icons/BS.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";

import question from "../../../assets/icons/question.png";
import shooting from "../../../assets/icons/shooting.png";
import skull from "../../../assets/icons/skull.png";
import location from "../../../assets/icons/location.png";

export const Chimera = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={chimera}
                M='12"' WS='6+' BS='4+' S='6' T='7' W='11' A='3' Ld='7' Sv='3+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Изменение характеристик от урона</div>
                <DamageBlock
                    img1={W} num1='6-11' num2='3-5' num3='1-2'
                    img2={M} num4='12"' num5='10"' num6='8"'
                    img3={BS} num7='4+' num8='5+' num9='6+'
                    img4={A} num10='3' num11='D3' num12='1' />
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Chimera_heavy_bolter /> <Chimera_heavy_flamer />
                    <Chimera_multi_laser /> <Heavy_bolter />
                    <Heavy_flamer /> <Heavy_stubber />
                    <Hunter_killer_missile /> <Lasgun_array /> <Storm_bolter />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Другое оружие</div>
                <div className={style.weapon_content}>
                    <WeaponOther title='Dozer blade' img={location}
                        text='Если носитель имеет DOZER BLADE, то может игнорировать любые или
                        все модификаторы к его характеристике перемещения, передовым роликам
                        и загрузочным роликам.'/>

                    <WeaponOther title='Armoured tracks' img={shooting}
                        text='Если носитель получает ключевое слово "БРОНИРОВАННЫЙ", и каждый раз, 
                        когда носителю назначается дальняя атака с характеристикой урона, равной 1, 
                        добавляйте 1 к спасброску брони, сделанному против этой атаки.'/>
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Explodes' AbNum='' AbIcon={skull}
                    AbText='Когда модель будет уничтожена, бросьте 1D6: на 6 юнит взрывавется,
                    и каждый юнит в пределах 6" получает смертельные ранение D3.'/>

                <AbilitiesBlock AbTitle='Mobile Command Vehicle' AbNum='' AbIcon={question}
                    AbText='Модель офицера в транспорте может одать 1 известный ей приказ.' />
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Стратегемы</div>
                <INGRAINED_PRECISION /> <OVERLAPPING_FIELDS_OF_FIRE />
                <RELENTLESS /> <VENGEFUL_SALUTE /> <ACCEPTABLE_LOSSES />
                <VICIOUS_TRAPS /> <SMOKE_LAUNCHERS /> <ABLATIVE_PLATING />
            </section>
        </section >
    )
}