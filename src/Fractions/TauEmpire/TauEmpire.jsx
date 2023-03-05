import { UnitBlock } from '../../Components/UnitBlock';
import style from "../../scss/Fractions.module.scss";
import Tau_XV95_Ghostkeel_Battlesuit from "../../assets/TauEmpire/Tau XV95 Ghostkeel Battlesuit.png";
import FireWarrior from "../../assets/TauEmpire/Fire Warriors.png";
import CrisisBattlesuits from "../../assets/TauEmpire/Crisis Battlesuits.png";
import Etheral from "../../assets/TauEmpire/Etheral.jpg";
import SupportTurret from "../../assets/TauEmpire/Support Turret.png";
import Drone from "../../assets/TauEmpire/Drone.png";
import CadreFireblade from "../../assets/TauEmpire/Cadre Fireblade.png";
import RiptideBattlesuit from "../../assets/TauEmpire/Riptide Battlesuit.png";
import Stormsurge from "../../assets/TauEmpire/stormsurge.png";
import Broadside from "../../assets/TauEmpire/Broadside.png";

export const TauEmpire = () => {
  return (
    <section className={style.content}>
      <UnitBlock link='/GhostkeelBattlesuit' img={Tau_XV95_Ghostkeel_Battlesuit} title='Ghostkeel Battlesuit' />
      <UnitBlock link='/FireWarriors' img={FireWarrior} title='Fire Warriors' />
      <UnitBlock link='/CrisisBattlesuits' img={CrisisBattlesuits} title='Crisis Battlesuits' />
      <UnitBlock link='/Etheral' img={Etheral} title='Etheral' />
      <UnitBlock link='/SupportTurret' img={SupportTurret} title='Support Turret' />
      <UnitBlock link='/Drones' img={Drone} title='Drones' />
      <UnitBlock link='/CadreFireblade' img={CadreFireblade} title='Cadre Fireblade' />
      <UnitBlock link='/RiptideBattlesuit' img={RiptideBattlesuit} title='Riptide Battlesuit' />
      <UnitBlock link='/Stormsurge' img={Stormsurge} title='Stormsurge' />
      <UnitBlock link='/BroadsideBattlesuits' img={Broadside} title='Broadside Battlesuits' />
    </section>
  )
}