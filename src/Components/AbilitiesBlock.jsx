import style from "../scss/CombatUnit.module.scss";

export const AbilitiesBlock = (props) => {
    return (
        <div className={style.abilities_block}>
            <div className={style.abilities_title_block}>
                <div className={style.abilities_title}>{props.AbTitle}</div>
                <div className={style.block_symbol}>
                    <div className={style.abilities_title}>{props.AbNum}</div>
                    <img src={props.AbIcon} alt={props.AbIcon} className={style.abilities_symbol} />
                </div>
            </div>
            <div className={style.abilities_text}>{props.AbText}</div>
        </div>
    )
}