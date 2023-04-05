/* eslint-disable @next/next/no-img-element */
import React from 'react';
import style from '../styles/HeaderMenu.module.css';

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
        <nav className={`${style.containerHeaderMenu} default-container`}>
            <div className={style.containerImageLogo}>
                <img
                    className={style.imageLogo} 
                    src='/img/logo.png' 
                    alt="Logo" 
                />
            </div>
            <ul className={style.containerHeaderLinks}>
                {links.map((link) => (
                    <button key={link.label} onClick={() => {redirectTo(link.url)}}>{link.label}</button>
                ))}
            </ul>
      </nav>
    )
}

export default headerMenu;