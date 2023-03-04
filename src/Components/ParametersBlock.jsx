import style from "../scss/CombatUnit.module.scss";

import M from "../assets/icons/M.png";
import WS from "../assets/icons/WS.png";
import BS from "../assets/icons/BS.png";
import S from "../assets/icons/S.png";
import T from "../assets/icons/T.png";
import W from "../assets/icons/W.png";
import A from "../assets/icons/A.png";
import Ld from "../assets/icons/Ld.png";
import Sv from "../assets/icons/Sv.png";

export const ParametersBlock = (props) => {
    return (
        <section className={style.Content_block}>
            <img src={props.img} alt={props.img} className={style.combat_unit_img} />
            <div className={style.combat_unit_param}>
                <div className={style.combat_unit_param_block}>
                    <img src={M} alt="M" className={style.param_img} />
                    <div className={style.param_number}>{props.M}</div>
                </div>

                <div className={style.combat_unit_param_block}>
                    <img src={WS} alt="WS" className={style.param_img} />
                    <div className={style.param_number}>{props.WS}</div>
                </div>

                <div className={style.combat_unit_param_block}>
                    <img src={BS} alt="BS" className={style.param_img} />
                    <div className={style.param_number}>{props.BS}</div>
                </div>

                <div className={style.combat_unit_param_block}>
                    <img src={S} alt="S" className={style.param_img} />
                    <div className={style.param_number}>{props.S}</div>
                </div>

                <div className={style.combat_unit_param_block}>
                    <img src={T} alt="T" className={style.param_img} />
                    <div className={style.param_number}>{props.T}</div>
                </div>

                <div className={style.combat_unit_param_block}>
                    <img src={W} alt="W" className={style.param_img} />
                    <div className={style.param_number}>{props.W}</div>
                </div>

                <div className={style.combat_unit_param_block}>
                    <img src={A} alt="A" className={style.param_img} />
                    <div className={style.param_number}>{props.A}</div>
                </div>

                <div className={style.combat_unit_param_block}>
                    <img src={Ld} alt="Ld" className={style.param_img} />
                    <div className={style.param_number}>{props.Ld}</div>
                </div>

                <div className={style.combat_unit_param_block}>
                    <img src={Sv} alt="Sv" className={style.param_img} />
                    <div className={style.param_number}>{props.Sv}</div>
                </div>
            </div>
        </section>
    )
}