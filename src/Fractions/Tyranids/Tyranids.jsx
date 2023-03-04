import { UnitBlock } from '../../Components/UnitBlock';
import style from "../../scss/Fractions.module.scss";
import HiveTyrant from "../../assets/Tyranids/Hive Tyrant.png";
import Termagant from "../../assets/Tyranids/Termagant.png";
import TyranidWarriors from "../../assets/Tyranids/Tyranid Warriors.png";
import Zoanthropes from "../../assets/Tyranids/Zoanthropes.png";

export const Tyranids = () => {
    return (
        <section className={style.content}>
            <UnitBlock link='/HiveTyrant' img={HiveTyrant} title='Hive Tyrant' />
            <UnitBlock link='/Termagant' img={Termagant} title='Termagant' />
            <UnitBlock link='/TyranidWarriors' img={TyranidWarriors} title='Tyranid Warriors' />
            <UnitBlock link='/Zoanthropes' img={Zoanthropes} title='Zoanthropes' />
        </section>
    )
}