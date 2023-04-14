import React from 'react';
import { useTranslation } from 'react-i18next';
import style from '../../styles/sectionTwo/index.module.css';

import SectionTwoInfo from './SectionTwoInfo';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';

const SectionTwo = () => {
    const { t } = useTranslation();

    const chatPropsData = [
        {
            message: 'Hi, I am interested in your product. Can you please send me more information?',
            sender: 'sender'
        },
        {
            message: 'Hi, I am interested in your product. Can you please send me more information?',
            sender: 'gpt'
        },
        {
            message: 'Hi, I am interested in your product. Can you please send me more information?',
            sender: 'sender'
        },
    ]

    return (
        <div className="section-two-container" id='s2'>

            <div className={style.containerSectionTwoInfo}>
                <SectionTwoInfo />
            </div>

            <div className={style.containerMobileSection}>
                <div className={style.containerMobileBgContent}>
                    <ChatHeader />
                    <ChatMessage props={chatPropsData} />
                </div>
                <img src="/img/iphone-bg.png" alt="" />
            </div>
        </div>
    );
}

export default SectionTwo;