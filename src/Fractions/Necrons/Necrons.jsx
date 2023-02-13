import React from "react";
import style from "../../scss/Fractions.module.scss";
import NecronImmortals from "../../assets/Necrons/Necron Immortals.png";
import NecronOverlord from "../../assets/Necrons/Necron Overlord.png";
import NightScythe from "../../assets/Necrons/Night Scythe.png";
import TombBlades from "../../assets/Necrons/Tomb Blades.png";

const Necrons = () => {
  return (
    <section className={style.content}>
      <a href="/NecronImmortals" className={style.Combat_Unit}>
        <img src={NecronImmortals} alt="NecronImmortals" className={style.Combat_Unit_img} style={{ margin: '-40px 0px 0px -20px' }} />
        <div className={style.Combat_Unit_text}>
          Necron Immortals
        </div>
      </a>

      <a href="/NecronOverlord" className={style.Combat_Unit}>
        <img src={NecronOverlord} alt="NecronOverlord" className={style.Combat_Unit_img} style={{ margin: '-20px 0px 0px -20px'}} />
        <div className={style.Combat_Unit_text}>
          Necron Overlord
        </div>
      </a>

      <a href="/NightScythe" className={style.Combat_Unit}>
        <img src={NightScythe} alt="NightScythe" className={style.Combat_Unit_img} style={{ margin: '-35px 0px 0px -20px' }} />
        <div className={style.Combat_Unit_text}>
          Night Scythe
        </div>
      </a>

      <a href="/TombBlades" className={style.Combat_Unit}>
        <img src={TombBlades} alt="TombBlades" className={style.Combat_Unit_img} style={{ margin: '-60px 0px 0px -20px' }} />
        <div className={style.Combat_Unit_text}>
          Tomb Blades
        </div>
      </a>
    </section>
  )
}

export { Necrons }