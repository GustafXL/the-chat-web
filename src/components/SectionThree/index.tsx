import React from 'react';
import { useTranslation } from 'react-i18next';


const SectionThree = () => {
    const { t } = useTranslation();
    return (
        <div className="section-two-container" id='s3'>
            <h1>Section 3</h1>
        </div>
    );
}

export default SectionThree;