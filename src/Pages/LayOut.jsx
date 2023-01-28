import React from "react";
import logoImage from '../assets/icons/logo.png';
import styles from '../scss/HomePage.module.scss';
import home from '../assets/icons/Home.png';
import profile from '../assets/icons/profile.svg';
import { Outlet } from 'react-router-dom';

const LayOut = () => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.block_burger}>
                    <a href="/" className={styles.as}><img src={home} alt="home" className={styles.home} /></a>
                </div>
                <div className={styles.block_logo}>
                    <img src={logoImage} alt="logo" className={styles.logo} />
                </div>
                <div className={styles.block_burger}>
                    <a href="/RegistrationPage" className={styles.as}><img src={profile} alt="profile" className={styles.home} /></a>
                </div>
            </header>

            < Outlet />

        </div>
    )
}

export { LayOut }