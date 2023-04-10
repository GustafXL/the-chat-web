export interface ChatMessageProps {
    message: string;
    sender: string;
}

export interface Iprops {
    props: ChatMessageProps[];
}

import style from '../../../styles/sectionTwo/ChatMessage.module.css'
import {HiUserCircle} from 'react-icons/hi'

const chatMessage = (props: Iprops) => {
    console.log(props)
    return (
        <div>
            {
                props.props.map((item, index) => {
                    return (
                        <div key={index} className={style.containerChat}>
                            {
                                item.sender === 'sender' ? (
                                    <div className={style.containerSenderMessage}>
                                        <div className={style.senderboxMessage}>
                                            <p>{item.message}</p>
                                        </div>
                                        <img src="/img/user-pic-1.png" alt="" />
                                    </div>
                                ) : (
                                    <div className={style.containerReciverMessage}>
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
        </div>
    )
}

export default chatMessage;