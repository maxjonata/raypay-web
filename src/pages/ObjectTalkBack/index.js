import React from 'react';

import AccessibilityDataList from './../../assets/Componentes/AccessibilityDataList';
import Choices from './../../assets/Componentes/Choices';

import './styles.css';
import mp3_file from '../../assets/Sounds/bleepRead.mp3';
import { useLocation } from 'react-router-dom';

export default function ObjectTalkBack() {
    const location = useLocation();
    return (
        <div className="objTalkBack-container">
            <audio id="audio" src={mp3_file} autoPlay/>
            <AccessibilityDataList dataString={location.state.data}/>
            <Choices />
        </div>
    );
}