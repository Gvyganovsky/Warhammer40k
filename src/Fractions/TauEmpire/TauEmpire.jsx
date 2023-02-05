import React from "react";
import style from "../../scss/Fractions.module.scss";
import Tau_XV95_Ghostkeel_Battlesuit from "../../assets/TauEmpire/Tau XV95 Ghostkeel Battlesuit.png";
import FireWarrior from "../../assets/TauEmpire/Fire Warriors.png";
import CrisisBattlesuits from "../../assets/TauEmpire/Crisis Battlesuits.png";
import Etheral from "../../assets/TauEmpire/Etheral.jpg";
import SupportTurret from "../../assets/TauEmpire/Support Turret.png";
import Drone from "../../assets/TauEmpire/Drone.png";
import CadreFireblade from "../../assets/TauEmpire/Cadre Fireblade.png";
import RiptideBattlesuit from "../../assets/TauEmpire/Riptide Battlesuit.png";
import stormsurge from "../../assets/TauEmpire/stormsurge.png";

const TauEmpire = () => {
  return (
    <section className={style.content}>
      <a href="/GhostkeelBattlesuit">
        <div className={style.Combat_Unit}>
          <img src={Tau_XV95_Ghostkeel_Battlesuit} alt="Tau XV95 Ghostkeel Battlesuit" className={style.Combat_Unit_img} style={{ margin: '-38px 0px 0px -20px' }} />
          <div className={style.Combat_Unit_text}>
            Ghostkeel Battlesuit
          </div>
        </div>
      </a>

      <a href="/FireWarriors">
        <div className={style.Combat_Unit}>
          <img src={FireWarrior} alt="FireWarriors" className={style.Combat_Unit_img} style={{ margin: '-20px 0px -33px -20px' }} />
          <div className={style.Combat_Unit_text}>
            Fire Warriors
          </div>
        </div>
      </a>

      <a href="/CrisisBattlesuits">
        <div className={style.Combat_Unit}>
          <img src={CrisisBattlesuits} alt="CrisisBattlesuits" className={style.Combat_Unit_img} style={{ margin: '-35px 0px 0px -20px' }} />
          <div className={style.Combat_Unit_text}>
            Crisis Battlesuits
          </div>
        </div>
      </a>

      <a href="/Etheral">
        <div className={style.Combat_Unit}>
          <img src={Etheral} alt="Etheral" className={style.Combat_Unit_img} style={{ margin: '-70px 0px 0px -20px' }} />
          <div className={style.Combat_Unit_text}>
            Etheral
          </div>
        </div>
      </a>

      <a href="/SupportTurret">
        <div className={style.Combat_Unit}>
          <img src={SupportTurret} alt="SupportTurret" className={style.Combat_Unit_img} style={{ margin: '-70px 0px 0px -20px' }} />
          <div className={style.Combat_Unit_text}>
            Support Turret
          </div>
        </div>
      </a>

      <a href="/Drones">
        <div className={style.Combat_Unit}>
          <img src={Drone} alt="Drone" className={style.Combat_Unit_img} style={{ margin: '-45px 0px 0px -20px' }} />
          <div className={style.Combat_Unit_text}>
            Drones
          </div>
        </div>
      </a>

      <a href="/CadreFireblade">
        <div className={style.Combat_Unit}>
          <img src={CadreFireblade} alt="CadreFireblade" className={style.Combat_Unit_img} style={{ margin: '-30px 0px 0px -20px' }} />
          <div className={style.Combat_Unit_text}>
            Cadre Fireblade
          </div>
        </div>
      </a>

      <a href="/RiptideBattlesuit">
        <div className={style.Combat_Unit}>
          <img src={RiptideBattlesuit} alt="RiptideBattlesuit" className={style.Combat_Unit_img} style={{ margin: '-30px 0px 0px -20px' }} />
          <div className={style.Combat_Unit_text}>
            Riptide Battlesuit
          </div>
        </div>
      </a>

      <a href="/Stormsurge">
        <div className={style.Combat_Unit}>
          <img src={stormsurge} alt="stormsurge" className={style.Combat_Unit_img} style={{ margin: '-30px 0px 0px -20px' }} />
          <div className={style.Combat_Unit_text}>
            Stormsurge
          </div>
        </div>
      </a>
    </section>
  )
}

export { TauEmpire }