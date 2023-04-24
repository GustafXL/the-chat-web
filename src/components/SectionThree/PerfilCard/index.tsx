import React, { useEffect } from 'react'
import style from '../../../styles/SectionThree/perfilCard.module.css';

interface ISkillArray {
    value: JSX.Element,
    link: string
}

interface ISkilsProps {
    skillsProps: {
        name: string
        image: string
        text: string
        skills: ISkillArray[]
    }
}


const PerfilCard = ({skillsProps}: ISkilsProps) => {

    useEffect(() => {
        console.info('skils: ', skillsProps)
    }, [skillsProps])

    return (
        <div>
            <div>
                <div className={style.containerPictureText}>
                    <div className={style.cardPictureContaineer}>
                        <img src={skillsProps.image} alt="" />
                    </div>
                    <div className={style.cardTextContaineer}>
                        <p>{skillsProps.text}</p>
                    </div>
                </div>

                <div className={style.containerContactCard}>
                    {skillsProps.skills.map((item, index) => {
                        return (
                            <div key={index}>
                                <a href={item.link}>{item.value}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PerfilCard;