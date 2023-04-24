/* eslint-disable react/jsx-key */
import React from 'react';
import { useTranslation } from 'react-i18next';
import style from '../../styles/SectionThree/index.module.css'

import PerfilCard from '../../components/SectionThree/PerfilCard'
import { BsGithub, BsGlobe, BsLinkedin } from 'react-icons/bs';

const SectionThree = () => {
    const { t } = useTranslation();

    const skills = [
        {
            name: 'Pedro Lopes.',
            image: '/img/pedro_picture.png',
            text: 'Olá, sou Pedro Lopes, engenheiro de software com 5 anos de experiência no mercado de TI, fique a vontade para conhecer mais sobre mim e meus trabalhos e entrar em contato',
            skills: [
                {
                    value: <BsGithub size={40} color={'#EE9591'} />,
                    link: 'https://github.com/Pedrolopesh'
                },
                {
                    value: <BsGlobe size={40} color={'#EE9591'} />,
                    link: 'https://pedrolopes.tech/designpage',
                },
                {
                    value: <BsLinkedin size={40} color={'#EE9591'} />,
                    link: 'https://www.linkedin.com/in/pedro-lopes-50b3b818a/',
                },
            ]
        },
        {
            name: 'Gustavo Linhares',
            image: '/img/gustavo_picture.png',
            text: 'Olá, sou Pedro Lopes, engenheiro de software com 5 anos de experiência no mercado de TI, fique a vontade para conhecer mais sobre mim e meus trabalhos e entrar em contato',
            skills: [
                {
                    value: <BsGithub size={40} color={'#EE9591'} />,
                    link: 'https://github.com/Pedrolopesh'
                },
                {
                    value: <BsLinkedin size={40} color={'#EE9591'} />,
                    link: 'https://www.linkedin.com/in/gustavo-linhares-11015b214/',
                },

            ]
        }
    ];

    return (
        <div className="section-three-container" id='s3'>
            <div className={style.containerCards}>
                {skills.map((item, index) => {
                    return (
                        <div key={index}>
                            <PerfilCard skillsProps={item}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default SectionThree;