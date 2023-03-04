import { UnitBlock } from '../../Components/UnitBlock';
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
import Manticore from "../../assets/AstraMilitarum/Manticore.png";
import PrimarisPsyker from "../../assets/AstraMilitarum/Primaris Psyker.png";

export const AstraMilitarum = () => {
  return (
    <section className={style.content}>
      <UnitBlock link='/ShockTrooper' img={ShockTrooper} title='Shock Trooper' />
      <UnitBlock link='/LordSolarLeontus' img={LordSolarLeontus} title='Lord Solar Leontus' />
      <UnitBlock link='/UrsulaCreed' img={UrsulaCreed} title='Ursula Creed' />
      <UnitBlock link='/TankCommander' img={TankCommander} title='Tank Commander' />
      <UnitBlock link='/ArmouredSentinels' img={ArmouredSentinels} title='Armoured Sentinels' />
      <UnitBlock link='/Basilisk' img={Basilisk} title='Basilisk' />
      <UnitBlock link='/Bullgryns' img={Bullgryns} title='Bullgryns' />
      <UnitBlock link='/Chimera' img={Chimera} title='Chimera' />
      <UnitBlock link='/Commissar' img={Commissar} title='Commissar' />
      <UnitBlock link='/Manticore' img={Manticore} title='Manticore' />
      <UnitBlock link='/PrimarisPsyker' img={PrimarisPsyker} title=' Primaris Psyker' />
    </section>
  )
}