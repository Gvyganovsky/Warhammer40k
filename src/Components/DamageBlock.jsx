import style from "../scss/CombatUnit.module.scss";

export const DamageBlock = (props) => {
    return (
        <div className={style.damage_content}>
            <div className={style.damage_block}>
                <img src={props.img1} alt={props.img1} className={style.param_img} />
                <div className={style.damage_nubmer}>{props.num1}</div>
                <div className={style.damage_nubmer}>{props.num2}</div>
                <div className={style.damage_nubmer}>{props.num3}</div>
            </div>

            <div className={style.damage_block}>
                <img src={props.img2} alt={props.img2} className={style.param_img} />
                <div className={style.damage_nubmer}>{props.num4}</div>
                <div className={style.damage_nubmer}>{props.num5}</div>
                <div className={style.damage_nubmer}>{props.num6}</div>
            </div>

            <div className={style.damage_block}>
                <img src={props.img3} alt={props.img3} className={style.param_img} />
                <div className={style.damage_nubmer}>{props.num7}</div>
                <div className={style.damage_nubmer}>{props.num8}</div>
                <div className={style.damage_nubmer}>{props.num9}</div>
            </div>

            <div className={style.damage_block}>
                <img src={props.img4} alt={props.img4} className={style.param_img} />
                <div className={style.damage_nubmer}>{props.num10}</div>
                <div className={style.damage_nubmer}>{props.num11}</div>
                <div className={style.damage_nubmer}>{props.num12}</div>
            </div>
        </div>
    )
}