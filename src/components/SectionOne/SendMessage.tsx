import React from 'react';
import style from '../../styles/SendMessage.module.css';

const SendMessage = () => {
    return (
        <div className={style.messageContent}>
            <p className={style.sendMessageText}>
                Mandar mensagens nunca foi tão fácil<span className={style.dotText}>.</span>
            </p>
        </div>
    )
}

export default SendMessage;