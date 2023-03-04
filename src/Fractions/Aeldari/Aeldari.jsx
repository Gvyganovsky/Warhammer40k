import style from "../../scss/Fractions.module.scss";
import { UnitBlock } from '../../Components/UnitBlock'
import GuardianDefenders from "../../assets/Aeldari/Guardian Defenders.png";
import Spiritseer from "../../assets/Aeldari/Spiritseer.png";
import Windriders from "../../assets/Aeldari/Windriders.png";
import Wraithlord from "../../assets/Aeldari/Wraithlord.png";

const Aeldari = () => {
    return (
        <section className={style.content}>
            <UnitBlock link='/GuardianDefenders' img={GuardianDefenders} title='Guardian Defenders' />
            <UnitBlock link='/Spiritseer' img={Spiritseer} title='Spiritseer' />
            <UnitBlock link='/Windriders' img={Windriders} title='Windriders' />
            <UnitBlock link='/Wraithlord' img={Wraithlord} title='Wraithlord' />
        </section>
    )
}

export { Aeldari }