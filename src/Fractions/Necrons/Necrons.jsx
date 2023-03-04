import { UnitBlock } from '../../Components/UnitBlock';
import style from "../../scss/Fractions.module.scss";
import NecronImmortals from "../../assets/Necrons/Necron Immortals.png";
import NecronOverlord from "../../assets/Necrons/Necron Overlord.png";
import NightScythe from "../../assets/Necrons/Night Scythe.png";
import TombBlades from "../../assets/Necrons/Tomb Blades.png";

const Necrons = () => {
  return (
    <section className={style.content}>
      <UnitBlock link='/NecronImmortals' img={NecronImmortals} title='Necron Immortals' />
      <UnitBlock link='/NecronsOverlord' img={NecronOverlord} title='Necron Overlord' />
      <UnitBlock link='/NightScythe' img={NightScythe} title='Night Scythe' />
      <UnitBlock link='/TombBlades' img={TombBlades} title='Tomb Blades' />
    </section>
  )
}

export { Necrons }