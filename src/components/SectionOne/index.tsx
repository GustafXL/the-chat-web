import React from 'react';
import { useTranslation } from 'react-i18next';
import ChatNow from './ChatNowButton';
import SendMessage from './SendMessage';


const SectionOne = () => {
    const { t } = useTranslation();
    return (
        <div className="section-one-container" id='s1'>
            <SendMessage />
            <ChatNow />
        </div>
    );
}

export default SectionOne;