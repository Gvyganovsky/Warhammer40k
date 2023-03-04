import { UnitBlock } from '../../Components/UnitBlock';
import style from "../../scss/Fractions.module.scss";
import DeffDread from "../../assets/Orks/Deff Dread.png";
import Deffkoptas from "../../assets/Orks/Deffkoptas.png";
import OrkBoyz from "../../assets/Orks/Ork Boyz.png";
import WarbossinMegaArmour from "../../assets/Orks/Warboss in Mega Armour.png";

export const Orks = () => {
    return (
        <section className={style.content}>
            <UnitBlock link='/DeffDread' img={DeffDread} title='Deff Dread' />
            <UnitBlock link='/DeffDread' img={Deffkoptas} title='Deffkoptas' />
            <UnitBlock link='/OrkBoyz' img={OrkBoyz} title='Ork Boyz' />
            <UnitBlock link='/WarbossinMegaArmour' img={WarbossinMegaArmour} title='Warboss in Mega Armour' />
        </section>
    )
}