/* eslint-disable @next/next/no-img-element */
import React from 'react';
import style from '../styles/HeaderMenu.module.css';

const headerMenu = () => {
    const links = [
        { label: 'Home', url: '/' },
        { label: 'Introduction', url: '/Intro' },
        { label: 'Contact', url: '/Contact' },
    ]

    return (
        <nav className={style.containerHeaderMenu}>
            <div className={style.containerImageLogo}>
                <img
                    className={style.imageLogo} 
                    src='/img/logo.png' 
                    alt="Logo" 
                />
            </div>
            <ul className={style.containerHeaderLinks}>
                {links.map((link) => (
                    <li key={link.label}>
                    <a href={link.url}>{link.label}</a>
                    </li>
                ))}
            </ul>
      </nav>
    )
}

export default headerMenu;