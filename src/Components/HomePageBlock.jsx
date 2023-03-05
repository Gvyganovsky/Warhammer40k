import { Link } from 'react-router-dom';
import styles from '../scss/HomePage.module.scss';

export const HomePageBlock = (props) => {
    return (
        <Link to={props.link}>
            <div className={styles.block_conent}>
                <img src={props.img} alt={props.img} className={styles.content_img} />
                <div className={styles.content_title}>{props.title}</div>
            </div>
        </Link>
    )
}