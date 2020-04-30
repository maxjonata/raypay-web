import React, { useEffect } from 'react';

import AccessibilityDataList from './../../assets/Componentes/AccessibilityDataList';
import Choices from './../../assets/Componentes/Choices';

import './styles.css';
import mp3_file from '../../assets/Sounds/bleepRead.mp3';
import { useRef } from 'react';

export default function ObjectTalkBack() {
    const screenref = useRef(null);
    useEffect(() => {
        screenref.current.requestFullscreen();
    })

    return(
        <div className="objTalkBack-container" ref={screenref}>
            <audio id="audio" src={mp3_file} autoPlay/>
            <AccessibilityDataList dataString={localStorage.getItem('data')}/>
            <Choices />
        </div>
    );
}