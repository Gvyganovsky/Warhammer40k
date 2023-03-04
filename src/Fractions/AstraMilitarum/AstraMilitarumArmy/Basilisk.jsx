import style from "../../../scss/CombatUnit.module.scss";
import Basiliskk from "../../../assets/AstraMilitarum/Basilisk.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { DamageBlock } from "../../../Components/DamageBlock";
import { WeaponOther } from "../../../Components/WeaponOther";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Earthshaker_cannon, Heavy_bolter, Heavy_flamer,
    Hunter_killer_missile
} from "../AstraMilitarumWeapon";

import BS from "../../../assets/icons/BS.png";
import W from "../../../assets/icons/W.png";
import A from "../../../assets/icons/A.png";

import skull from "../../../assets/icons/skull.png";
import shooting from "../../../assets/icons/shooting.png";
import location from "../../../assets/icons/location.png";

export const Basilisk = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={Basiliskk}
                M='10"' WS='6+' BS='4+' S='6' T='7' W='11' A='3' Ld='7' Sv='3+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Изменение характеристик от урона</div>
                <DamageBlock
                    img1={W} num1='6-11' num2='3-5' num3='1-2'
                    img2={BS} num4='10"' num5='8"' num6='6"'
                    img3={W} num7='4+' num8='5+' num9='6+'
                    img4={A} num10='3' num11='D3' num12='1' />
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Earthshaker_cannon /> <Heavy_bolter />
                    <Heavy_flamer /> <Hunter_killer_missile />
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
                    AbText='Каждый раз, когда модель в этом блоке уничтожается, бросайте 1D6, прежде 
                    чем удалять ее из игры. На 6 он взрывается, и каждый юнит в пределах 3" получает 
                    1 смертельное ранение.'/>
            </section>
        </section >
    )
}