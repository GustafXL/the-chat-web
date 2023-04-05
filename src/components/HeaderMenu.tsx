/* eslint-disable @next/next/no-img-element */
import React from 'react';
import style from '../styles/HeaderMenu.module.css';
import ChangeLang from './ChangeLang';

const headerMenu = () => {
    const links = [
        { label: 'Home', url: '/' },
        { label: 'Introduction', url: '/Intro' },
        { label: 'Contact', url: '/Contact' },
    ]

    const redirectTo = (url: string) => {
        console.log(url)
    }

    return (
        <div className={style.containerHeaderMenu}>
            <nav className={`${style.boxHeaderMenu} default-container`}>
                <div className={style.containerImageLogo}>
                    <img
                        className={style.imageLogo} 
                        src='/img/logo.png' 
                        alt="Logo" 
                        />
                </div>
                <div className={style.containerHeaderLinks}>
                    {links.map((link) => (
                        <button key={link.label} onClick={() => {redirectTo(link.url)}}>{link.label}</button>
                        ))}
                    <ChangeLang />
                </div>
            </nav>
        </div>
    )
}

export default headerMenu;