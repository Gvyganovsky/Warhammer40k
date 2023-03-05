import style from "../scss/Fractions.module.scss";

export const UnitBlock = (props) => {
    return (
        <a href={props.link} className={style.Combat_Unit}>
            <img src={props.img} alt={props.img} className={style.Combat_Unit_img} style={{ margin: '-25px 0px 0px -20px' }} />
            <div className={style.Combat_Unit_text}>{props.title}</div>
        </a>
    )
}