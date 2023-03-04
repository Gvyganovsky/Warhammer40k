import style from "../scss/CombatUnit.module.scss";

export const WeaponOther = (props) => {
    return (
        <div className={style.weaponOther_block}>
            <div className={style.abilities_title_block}>
                <div className={style.abilities_title}>{props.title}</div>
                <img src={props.img} alt={props.img} className={style.abilities_symbol} />
            </div>
            <div className={style.weaponOther_text}>{props.text}</div>
        </div>
    )
}