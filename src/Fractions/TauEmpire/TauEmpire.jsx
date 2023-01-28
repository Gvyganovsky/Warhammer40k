import React from "react";
import style from "../../scss/Fractions.module.scss";
import Tau_XV95_Ghostkeel_Battlesuit from "../../assets/TauEmpire/Tau XV95 Ghostkeel Battlesuit.png";
import FireWarrior from "../../assets/TauEmpire/Fire Warriors.png";
import CrisisBattlesuits from "../../assets/TauEmpire/Crisis Battlesuits.png";
import Etheral from "../../assets/TauEmpire/Etheral.jpg";
import DS8TacticalSupportTurret from "../../assets/TauEmpire/DS8 Tactical Support Turret.png";
import GunDrone from "../../assets/TauEmpire/Gun Drone.png";

const TauEmpire = () => {
  return (
    <section className={style.content}>
      <a href="/GhostkeelBattlesuit">
        <div className={style.Combat_Unit}>
          <img src={Tau_XV95_Ghostkeel_Battlesuit} alt="Tau XV95 Ghostkeel Battlesuit" className={style.TauXV95GhostkeelBattlesuit_img} />
          <div className={style.Combat_Unit_text}>
            Ghostkeel Battlesuit
          </div>
        </div>
      </a>

      <a href="/FireWarriors">
        <div className={style.Combat_Unit}>
          <img src={FireWarrior} alt="FireWarriors" className={style.FireWarriors_img} />
          <div className={style.Combat_Unit_text}>
            Fire Warriors
          </div>
        </div>
      </a>

      <a href="/CrisisBattlesuits">
        <div className={style.Combat_Unit}>
          <img src={CrisisBattlesuits} alt="CrisisBattlesuits" className={style.CrisisBattlesuits_img} />
          <div className={style.Combat_Unit_text}>
            Crisis Battlesuits
          </div>
        </div>
      </a>

      <a href="/Etheral">
        <div className={style.Combat_Unit}>
          <img src={Etheral} alt="Etheral" className={style.Etheral_img} />
          <div className={style.Combat_Unit_text}>
            Etheral
          </div>
        </div>
      </a>

      <a href="/DS8TacticalSupportTurret">
        <div className={style.Combat_Unit}>
          <img src={DS8TacticalSupportTurret} alt="DS8TacticalSupportTurret" className={style.DS8TacticalSupportTurret_img} />
          <div className={style.Combat_Unit_text}>
            DS8 Tactical Support Turret
          </div>
        </div>
      </a>

      <a href="/GunDrone">
        <div className={style.Combat_Unit}>
          <img src={GunDrone} alt="GunDrone" className={style.GunDrone_img} />
          <div className={style.Combat_Unit_text}>
            Gun Drone
          </div>
        </div>
      </a>
    </section>
  )
}

export { TauEmpire }