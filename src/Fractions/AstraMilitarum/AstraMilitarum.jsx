import React from "react";
import style from "../../scss/Fractions.module.scss";
import ShockTrooper from "../../assets/AstraMilitarum/ShockTrooper.png";
import LordSolarLeontus from "../../assets/AstraMilitarum/Lord Solar Leontus.png";
import UrsulaCreed from "../../assets/AstraMilitarum/Ursula Creed.png";

const AstraMilitarum = () => {
  return (
    <section className={style.content}>
      <a href="/ShockTrooper" className={style.Combat_Unit}>
        <img src={ShockTrooper} alt="ShockTrooper" className={style.Combat_Unit_img} style={{ margin: '-20px 0px 0px -20px' }} />
        <div className={style.Combat_Unit_text}>
          Shock Trooper
        </div>
      </a>

      <a href="/LordSolarLeontus" className={style.Combat_Unit}>
        <img src={LordSolarLeontus} alt="LordSolarLeontus" className={style.Combat_Unit_img} style={{ margin: '-35px 0px 0px -20px' }} />
        <div className={style.Combat_Unit_text}>
          Lord Solar Leontus
        </div>
      </a>

      <a href="/UrsulaCreed" className={style.Combat_Unit}>
        <img src={UrsulaCreed} alt="UrsulaCreed" className={style.Combat_Unit_img} style={{ margin: '-35px 0px 0px -20px' }} />
        <div className={style.Combat_Unit_text}>
          Ursula Creed
        </div>
      </a>

    </section>
  )
}

export { AstraMilitarum }