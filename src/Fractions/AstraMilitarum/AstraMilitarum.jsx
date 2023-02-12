import React from "react";
import style from "../../scss/Fractions.module.scss";
import ShockTrooper from "../../assets/AstraMilitarum/ShockTrooper.png";
import LordSolarLeontus from "../../assets/AstraMilitarum/Lord Solar Leontus.png";
import UrsulaCreed from "../../assets/AstraMilitarum/Ursula Creed.png";
import TankCommander from "../../assets/AstraMilitarum/Tank Commander.png";
import ArmouredSentinels from "../../assets/AstraMilitarum/Armoured Sentinels.png";
import Basilisk from "../../assets/AstraMilitarum/Basilisk.png";
import Bullgryns from "../../assets/AstraMilitarum/Bullgryns.png";
import Chimera from "../../assets/AstraMilitarum/Chimera.png";
import Commissar from "../../assets/AstraMilitarum/Commissar.png";
import LemanRussBattleTanks from "../../assets/AstraMilitarum/Leman Russ Battle Tanks.png";
import Manticore from "../../assets/AstraMilitarum/Manticore.png";
import PrimarisPsyker from "../../assets/AstraMilitarum/Primaris Psyker.png";
import Taurox from "../../assets/AstraMilitarum/Taurox.png";

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
        <img src={UrsulaCreed} alt="UrsulaCreed" className={style.Combat_Unit_img} style={{ margin: '-45px 50px 0px -20px', width: '150px' }} />
        <div className={style.Combat_Unit_text}>
          Ursula Creed
        </div>
      </a>

      <a href="/TankCommander" className={style.Combat_Unit}>
        <img src={TankCommander} alt="TankCommander" className={style.Combat_Unit_img} style={{ margin: '-45px 0px 0px -20px' }} />
        <div className={style.Combat_Unit_text}>
          Tank Commander
        </div>
      </a>

      <a href="/ArmouredSentinels" className={style.Combat_Unit}>
        <img src={ArmouredSentinels} alt="ArmouredSentinels" className={style.Combat_Unit_img} style={{ margin: '-30px 0px 0px -20px' }} />
        <div className={style.Combat_Unit_text}>
          Armoured Sentinels
        </div>
      </a>

      <a href="/Basilisk" className={style.Combat_Unit}>
        <img src={Basilisk} alt="Basilisk" className={style.Combat_Unit_img} style={{ margin: '-85px 0px 0px -20px' }} />
        <div className={style.Combat_Unit_text}>
          Basilisk
        </div>
      </a>

      <a href="/Bullgryns" className={style.Combat_Unit}>
        <img src={Bullgryns} alt="Bullgryns" className={style.Combat_Unit_img} style={{ margin: '-35px 0px 0px -20px' }} />
        <div className={style.Combat_Unit_text}>
          Bullgryns
        </div>
      </a>

      <a href="/Chimera" className={style.Combat_Unit}>
        <img src={Chimera} alt="Chimera" className={style.Combat_Unit_img} style={{ margin: '-35px 0px 0px -20px' }} />
        <div className={style.Combat_Unit_text}>
          Chimera
        </div>
      </a>

      <a href="/Commissar" className={style.Combat_Unit}>
        <img src={Commissar} alt="Commissar" className={style.Combat_Unit_img} style={{ margin: '-45px 0px 0px -20px' }} />
        <div className={style.Combat_Unit_text}>
          Commissar
        </div>
      </a>

      <a href="/LemanRussBattleTanks" className={style.Combat_Unit}>
        <img src={LemanRussBattleTanks} alt="LemanRussBattleTanks" className={style.Combat_Unit_img} style={{ margin: '-55px 0px 0px -20px' }} />
        <div className={style.Combat_Unit_text}>
          Leman Russ Battle Tanks
        </div>
      </a>

      <a href="/Manticore" className={style.Combat_Unit}>
        <img src={Manticore} alt="Manticore" className={style.Combat_Unit_img} style={{ margin: '-5px 0px 0px -20px' }} />
        <div className={style.Combat_Unit_text}>
          Manticore
        </div>
      </a>

      <a href="/PrimarisPsyker" className={style.Combat_Unit}>
        <img src={PrimarisPsyker} alt="PrimarisPsyker" className={style.Combat_Unit_img} style={{ margin: '-60px 0px 0px -20px' }} />
        <div className={style.Combat_Unit_text}>
          Primaris Psyker
        </div>
      </a>

      <a href="/Taurox" className={style.Combat_Unit}>
        <img src={Taurox} alt="Taurox" className={style.Combat_Unit_img} style={{ margin: '-45px 0px 0px -20px' }} />
        <div className={style.Combat_Unit_text}>
          Taurox
        </div>
      </a>
    </section>
  )
}

export { AstraMilitarum }