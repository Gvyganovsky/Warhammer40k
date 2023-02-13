import React from "react";
import style from "../../scss/CombatUnit.module.scss";

export const NecronsWeapon = () => {
    return (
        <div>
        </div>
    )
}

export const Gauss_blaster = () => {
    return (
        <div className={style.block_text_weapon}>
            <div className={style.weapon_block}>
                <div className={style.weapon_title}>Gauss blaster</div>
                <div className={style.weapon_block_info}>
                    <div className={style.weapon_info}>
                        <div className={style.weapon_text}>R</div>
                        <div className={style.weapon_text}>30"</div>
                    </div>

                    <div className={style.weapon_info}>
                        <div className={style.weapon_text}>Rp</div>
                        <div className={style.weapon_text}>1</div>
                    </div>

                    <div className={style.weapon_info}>
                        <div className={style.weapon_text}>S</div>
                        <div className={style.weapon_text}>5</div>
                    </div>

                    <div className={style.weapon_info}>
                        <div className={style.weapon_text}>AP</div>
                        <div className={style.weapon_text}>-2</div>
                    </div>

                    <div className={style.weapon_info}>
                        <div className={style.weapon_text}>D</div>
                        <div className={style.weapon_text}>1</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Tesla_carbine = () => {
    return (
        <div className={style.block_text_weapon}>
            <div className={style.weapon_block}>
                <div className={style.weapon_title}>Tesla carbine</div>
                <div className={style.weapon_block_info}>
                    <div className={style.weapon_info}>
                        <div className={style.weapon_text}>R</div>
                        <div className={style.weapon_text}>24"</div>
                    </div>

                    <div className={style.weapon_info}>
                        <div className={style.weapon_text}>As</div>
                        <div className={style.weapon_text}>2</div>
                    </div>

                    <div className={style.weapon_info}>
                        <div className={style.weapon_text}>S</div>
                        <div className={style.weapon_text}>5</div>
                    </div>

                    <div className={style.weapon_info}>
                        <div className={style.weapon_text}>AP</div>
                        <div className={style.weapon_text}>0</div>
                    </div>

                    <div className={style.weapon_info}>
                        <div className={style.weapon_text}>D</div>
                        <div className={style.weapon_text}>1</div>
                    </div>
                </div>
            </div>
            <div className={style.weapon_info_text}>*Неизмененный бросок хита 6 дает 2 дополнительных попадания.</div>
        </div>
    )
}

