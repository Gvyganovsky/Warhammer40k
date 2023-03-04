import styles from '../scss/HomePage.module.scss';
import { HomePageBlock } from '../Components/HomePageBlock'
import TauEmpireImg from '../assets/logoFractions/TauEmpire.png';
import AstraMilitarumImg from '../assets/logoFractions/AstraMilitarum.png';
import SpaceMarineImg from '../assets/logoFractions/SpaceMarine.png';
import BlackLegionImg from '../assets/logoFractions/BlackLegion.png';
import NecronsImg from '../assets/logoFractions/Necrons.png';
import TyranidsImg from '../assets/logoFractions/Tyranids.png';
import AeldariImg from '../assets/logoFractions/Aeldari.png';
import OrksImg from '../assets/logoFractions/Orks.png';

export const HomePage = () => {
    return (
        <section className={styles.content}>
            <HomePageBlock link='./TauEmpire' img={TauEmpireImg} title='Империя Тау' />
            <HomePageBlock link='./AstraMilitarum' img={AstraMilitarumImg} title='Имперская Гвардия' />
            <HomePageBlock link='./SpaceMarine' img={SpaceMarineImg} title='Космодесант' />
            <HomePageBlock link='./BlackLegion' img={BlackLegionImg} title='Черный Легион' />
            <HomePageBlock link='./Necrons' img={NecronsImg} title='Некроны' />
            <HomePageBlock link='./Tyranids' img={TyranidsImg} title='Тираниды' />
            <HomePageBlock link='./Aeldari' img={AeldariImg} title='Эльдары' />
            <HomePageBlock link='./Orks' img={OrksImg} title='Орки' />
        </section>
    )
}