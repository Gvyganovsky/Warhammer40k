import { UnitBlock } from '../../Components/UnitBlock'
import style from "../../scss/Fractions.module.scss";
import DarkApostle from "../../assets/BlackLegion/Dark Apostle.png";
import Helbrute from "../../assets/BlackLegion/Helbrute.png";
import Havocs from "../../assets/BlackLegion/Havocs.png";
import ChaosSpaceMarines from "../../assets/BlackLegion/Chaos Space Marines.png";

export const BlackLegion = () => {
    return (
        <section className={style.content}>
            <UnitBlock link='/DarkApostle' img={DarkApostle} title='Dark Apostle' />
            <UnitBlock link='/Helbrute' img={Helbrute} title='Helbrute' />
            <UnitBlock link='/Havocs' img={Havocs} title='Havocs' />
            <UnitBlock link='/ChaosSpaceMarines' img={ChaosSpaceMarines} title='Chaos Space Marines' />
        </section>
    )
}