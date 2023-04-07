import React from 'react';
import { useTranslation } from 'react-i18next';


const SectionTwo = () => {
    const { t } = useTranslation();
    return (
        <div className="section-two-container" id='s2'>
            <h1>Section 2</h1>
        </div>
    );
}

export default SectionTwo;