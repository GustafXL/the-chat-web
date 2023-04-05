import React from 'react';
import style from '../../styles/MessageButton.module.css'

const ChatNow = () => {
    return (
        <div className={style.ButtonMessageContent}>
            <button className={style.ChatNowButton} onClick={() => console.log('Bem Vindo ao The Chat!')}>
                Chat now
            </button>
        </div>
    )
}

export default ChatNow;