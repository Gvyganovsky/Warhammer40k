import { UnitBlock } from '../../Components/UnitBlock';
import style from "../../scss/Fractions.module.scss";
import Eliminators from "../../assets/SpaceMarine/Eliminators.png";
import Impulsor from "../../assets/SpaceMarine/Impulsor.png";
import Infiltrators from "../../assets/SpaceMarine/Infiltrators.png";
import LieutenantinPhobosArmour from "../../assets/SpaceMarine/Lieutenant in Phobos Armour.png";
import Suppressors from "../../assets/SpaceMarine/Suppressors.png";

export const SpaceMarine = () => {
    return (
        <section className={style.content}>
            <UnitBlock link='/Eliminators' img={Eliminators} title='Eliminators' />
            <UnitBlock link='/Impulsor' img={Impulsor} title='Impulsor' />
            <UnitBlock link='/Infiltrators' img={Infiltrators} title='Infiltrators' />
            <UnitBlock link='/LieutenantinPhobosArmour' img={LieutenantinPhobosArmour} title='Lieutenant in Phobos Armour' />
            <UnitBlock link='/Suppressors' img={Suppressors} title='Suppressors' />
        </section>
    )
}