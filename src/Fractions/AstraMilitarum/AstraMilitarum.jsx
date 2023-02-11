import React from "react";
import style from "../../scss/Fractions.module.scss";
import ShockTrooper from "../../assets/AstraMilitarum/ShockTrooper.png";

const AstraMilitarum = () => {
  return (
    <section className={style.content}>
      <a href="/ShockTrooper" className={style.Combat_Unit}>
        <img src={ShockTrooper} alt="ShockTrooper" className={style.Combat_Unit_img} style={{ margin: '-20px 0px 0px -20px' }} />
        <div className={style.Combat_Unit_text}>
          Shock Trooper
        </div>
      </a>

    </section>
  )
}

export { AstraMilitarum }