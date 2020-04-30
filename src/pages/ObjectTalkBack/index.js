import React from 'react';

import AccessibilityDataList from './../../assets/Componentes/AccessibilityDataList';
import Choices from './../../assets/Componentes/Choices';

import './styles.css';
import mp3_file from '../../assets/Sounds/bleepRead.mp3';

export default function ObjectTalkBack() {
    return(
        <div className="objTalkBack-container">
            <audio id="audio" src={mp3_file} autoPlay/>
            <AccessibilityDataList dataString={localStorage.getItem('data')}/>
            <Choices />
        </div>
    );
}