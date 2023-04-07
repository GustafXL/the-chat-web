import React from 'react';
import { useTranslation } from 'react-i18next';


const SectionOne = () => {
    const { t } = useTranslation();
    return (
        <div className="section-one-container" id='s1'>
            <h1>Section 1</h1>
        </div>
    );
}

export default SectionOne;