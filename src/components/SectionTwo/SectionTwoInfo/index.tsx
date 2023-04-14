import React from 'react';
import style from '../../../styles/sectionTwo/SectionTwoInfo.module.css'

const SectionTwoInfo = () => {
    return (
        <div>
            <h3 className={style.titleSectionTwoInfo}>Conecte-se. Comunique-se. Transforme-se e Compartilhe emoções com novas pessoas.</h3>

            <hr className={style.lineInfo} />

            <div className={style.containerBoxesInfo}>

                <div className={style.boxInfo}>
                    <p className={style.boxInfoTitle}>123</p>
                    <p className={style.boxInfoText}>Usuários cadastrados atualmente trocando mensagens e se conectando com novas pessoas todos os dias</p>
                </div>

                <div className={style.boxInfo}>
                    <p className={style.boxInfoTitle}>1029</p>
                    <p className={style.boxInfoText}>Total de mensagens que já foram trocadas entre os usuários do the chat durante o ano de 2023</p>
                </div>

            </div>
        </div>
    )
}


export default SectionTwoInfo