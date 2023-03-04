import style from "../../../scss/CombatUnit.module.scss";
import deffDread from "../../../assets/Orks/Deff Dread.png";
import { ParametersBlock } from "../../../Components/ParametersBlock";
import { AbilitiesBlock } from "../../../Components/AbilitiesBlock";

import {
    Big_shoota, Kustom_mega_blasta, Rokkit_launcha, Skorcha,
    Dread_klaw
} from "../OrksWeapon";

import {
    GOTEM_TRAPPED, CAREEN, RAMMING_SPEED, BREAKIN_HEADS, TELLYPORTA,
    MORE_DAKKA
} from "../OrksStrat";

import question from "../../../assets/icons/question.png";
import skull from "../../../assets/icons/skull.png";

export const DeffDread = () => {
    return (
        <section className={style.content}>
            <ParametersBlock img={deffDread}
                M='6"' WS='3+' BS='5+' S='5' T='7' W='8' A='3' Ld='7' Sv='3+' />

            <section className={style.Content_block}>
                <div className={style.content_title}>Оружие</div>
                <div className={style.weapon_content}>
                    <Big_shoota /> <Kustom_mega_blasta />
                    <Rokkit_launcha /> <Skorcha /> <Dread_klaw />
                </div>
            </section>

            <section className={style.Content_block}>
                <div className={style.content_title}>Способности</div>
                <AbilitiesBlock AbTitle='Explodes' AbNum='' AbIcon={skull}
                    AbText='Каждый раз, когда модель в этом блоке уничтожается, бросайте 1D6, прежде 
                    чем удалять ее из игры. На 6 он взрывается, и каждый юнит в пределах 3" получает 
                    1 смертельное ранение.'/>

                <AbilitiesBlock AbTitle='Dread Mob' AbNum='' AbIcon={question}
                    AbText='После того, как этот юнит будет впервые установлен на поле боя, если у этого
                    юнита более 1 модели, все модели в этом юните должны быть установлены в пределах
                    6" от другой модели из этого юнита. После того, как они настроены в первый раз,
                    каждая модель рассматривается как отдельный юнит.'/>
            </section>

            <section className={style.Content_block}>
                <div className={style.line}></div>
                <div className={style.content_title}>Стратегемы</div>
                <GOTEM_TRAPPED /> <CAREEN />
                <RAMMING_SPEED /> <BREAKIN_HEADS />
                <TELLYPORTA /> <MORE_DAKKA />
            </section>
        </section >
    )
}