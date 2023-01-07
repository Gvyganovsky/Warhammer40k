import React from "react";
import style from "../../scss/TauEmpire.module.scss";
import Tau_XV95_Ghostkeel_Battlesuit from "../../assets/TauEmpire/Tau XV95 Ghostkeel Battlesuit.png";

const TauEmpire = () => {
  return (
    <section className={style.content}>
      <a href="/TauXV95GhostkeelBattlesuit">
        <div className={style.Combat_Unit}>
          <img src={Tau_XV95_Ghostkeel_Battlesuit} alt="Tau XV95 Ghostkeel Battlesuit" className={style.Combat_Unit_img} />
          <div className={style.Combat_Unit_text}>
            Tau XV95 Ghostkeel Battlesuit
          </div>
        </div>
      </a>


    </section>
  )
}

export { TauEmpire }