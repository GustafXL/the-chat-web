import { BsChevronLeft } from 'react-icons/bs'
import style from '../../../styles/sectionTwo/ChatHeader.module.css'


const ChatHeader = () => {
    return (
        <div className={style.containerChatHeader}>
            <BsChevronLeft size={20} />
            <img src="/img/chatgpt-logo.png" alt="" className={style.chatImageLogo}/>

            <div className={style.containerChatHGeaderInfo}>
                <h3>ChatGPT</h3>
                <p>online</p>
            </div>
        </div>
    );
}

export default ChatHeader;