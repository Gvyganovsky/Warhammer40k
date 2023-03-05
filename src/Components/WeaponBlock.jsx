import style from "../scss/CombatUnit.module.scss";

export const WeaponBlock = (props) => {
    return (
        <div className={style.block_text_weapon}>
            <div className={style.weapon_block}>
                <div className={style.weapon_title}>{props.title}</div>
                <div className={style.weapon_block_info}>
                    <div className={style.weapon_info}>
                        <div className={style.weapon_text}>R</div>
                        <div className={style.weapon_text}>{props.R}</div>
                    </div>

                    <div className={style.weapon_info}>
                        <div className={style.weapon_text}>{props.Type}</div>
                        <div className={style.weapon_text}>{props.Type_num}</div>
                    </div>

                    <div className={style.weapon_info}>
                        <div className={style.weapon_text}>S</div>
                        <div className={style.weapon_text}>{props.S}</div>
                    </div>

                    <div className={style.weapon_info}>
                        <div className={style.weapon_text}>AP</div>
                        <div className={style.weapon_text}>{props.AP}</div>
                    </div>

                    <div className={style.weapon_info}>
                        <div className={style.weapon_text}>D</div>
                        <div className={style.weapon_text}>{props.D}</div>
                    </div>
                </div>
            </div>
            <div className={style.weapon_info_text}>{props.Text}</div>
        </div>
    )
}

export const WeaponBlockBlue = (props) => {
    return (
        <div className={style.block_text_weapon}>
            <div className={style.weapon_blockTwo}>
                <div className={style.weapon_title}>{props.title}</div>
                <div className={style.weapon_block_info}>
                    <div className={style.weapon_info}>
                        <div className={style.weapon_text}>R</div>
                        <div className={style.weapon_text}>{props.R}</div>
                    </div>

                    <div className={style.weapon_info}>
                        <div className={style.weapon_text}>{props.Type}</div>
                        <div className={style.weapon_text}>{props.Type_num}</div>
                    </div>

                    <div className={style.weapon_info}>
                        <div className={style.weapon_text}>S</div>
                        <div className={style.weapon_text}>{props.S}</div>
                    </div>

                    <div className={style.weapon_info}>
                        <div className={style.weapon_text}>AP</div>
                        <div className={style.weapon_text}>{props.AP}</div>
                    </div>

                    <div className={style.weapon_info}>
                        <div className={style.weapon_text}>D</div>
                        <div className={style.weapon_text}>{props.D}</div>
                    </div>
                </div>
            </div>
            <div className={style.weapon_info_text}>{props.Text}</div>
        </div>
    )
}