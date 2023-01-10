import React from "react";
import logoImage from '../assets/logo.png';
import styles from '../scss/HomePage.module.scss';
import home from '../assets/icons/Home.png';
import { Outlet } from 'react-router-dom';

const LayOut = () => {
    return (
        <div>
            <header className={styles.header}>
                <a href="/"><img src={home} alt="home" className={styles.home} /></a>
                <img src={logoImage} alt="logo" className={styles.logo} />
            </header>

            < Outlet />

        </div>
    )
}

export { LayOut }