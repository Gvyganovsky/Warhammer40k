import style from "../../../scss/CombatUnit.module.scss";
import SupportTurrets from "../../../assets/TauEmpire/Support Turret.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { DamageBlock } from "../../../Components/DamageBlock";
import { WeaponOther } from "../../../Components/WeaponOther";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import { Smart_missile_syst, Missile_pod } from "../TauEmpireWeapon";

import question from "../../../assets/icons/question.png";
import morale from "../../../assets/icons/morale.png";

export const SupportTurret = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={SupportTurrets}
                M='-' WS='-' BS='4+' S='3' T='3' W='1' A='-' Ld='4' Sv='4+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Smart_missile_syst /> <Missile_pod />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Support Turret' AbNum='' AbIcon={morale}
                    AbText='Уничтожение этой модели игнорируется с целью проверки боевого духа.' />

                <AbilitiesBlock AbTitle='Support Turret' AbNum='' AbIcon={question}
                    AbText='Модель не занимает места при транспортировке.' />

                <AbilitiesBlock AbTitle='Support Turret' AbNum='' AbIcon={question}
                    AbText='При перемещении вы можете убрать этого юнита с поле боя (модель не считается
                    уничтожанной). На этапе вашего командования любой ваш отряд может начать развертывать
                    этого юнита. Действие завершается в конце вашей следующей фазы движения.' />
            </section>
        </section >
    )
}