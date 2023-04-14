import React, { useEffect, useState } from 'react';

import { BsFillSendFill } from 'react-icons/bs'

export interface ChatMessageProps {
    message: string;
    sender: string;
}

export interface Iprops {
    props: ChatMessageProps[];
}

import style from '../../../styles/sectionTwo/ChatMessage.module.css'

const ChatMessage = (props: Iprops) => {
    const [effect, setEffect] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setEffect(1);
        }, 400)

        setTimeout(() => {
            setEffect(2);
        }, 700)
    }, [])

    return (
        <div>
            {
                props.props.map((item, index) => {
                    return (
                        <div key={index} className={style.containerChat}>
                            {
                                item.sender === 'sender' ? (
                                    <div className={`${effect === index ? style.showChatAnimation : ''} ${style.containerSenderMessage}`}>

                                        <div className={style.senderboxMessage}>
                                            <p>{item.message}</p>
                                        </div>
                                        <img src="/img/user-pic-1.png" alt="" />
                                    
                                    </div>
                                ) : (
                                    <div className={`${effect === index ? style.showChatAnimationLeft : ''} ${style.containerReciverMessage}`}>
                                        <div className={style.reciverboxMessage}>
                                            <p>{item.message}</p>
                                        </div>
                                        <img src="/img/chatgpt-logo.png" alt="" />
                                    </div>
                                )
                            }
                        </div>
                    )
                })
            }
            
            <div className={style.blankTextArea}>
                <span></span>
                <div className={style.containerSendIcon}>
                    <BsFillSendFill size={25} />
                </div>
            </div>
        </div>
    )
}

export default ChatMessage;