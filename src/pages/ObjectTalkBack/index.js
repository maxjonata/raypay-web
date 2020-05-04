import React from 'react';

import AccessibilityDataList from './../../assets/Componentes/AccessibilityDataList';
import Choices from './../../assets/Componentes/Choices';

import './styles.css';
import mp3_file from '../../assets/Sounds/bleepRead.mp3';
import { useLocation } from 'react-router-dom';

import FullscreenButton from '../../assets/Componentes/FullscreenButton';
import { useEffect } from 'react';


export default function ObjectTalkBack() {
    const location = useLocation();

    useEffect(() => {
        document.getElementById("DataList").focus();
    });

    return (
        <div className="objTalkBack-container">
            <FullscreenButton/>
            <audio id="audio" src={mp3_file} autoPlay/>
            <AccessibilityDataList id="DataList" dataString={location.state.data}/>
            <Choices />
        </div>
    );
}