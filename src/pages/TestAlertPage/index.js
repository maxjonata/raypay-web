import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import './styles.css';
import FullscreenButton from '../../assets/Componentes/FullscreenButton';


export default function TestAlertPage() {

    useEffect(() => {
        document.getElementById("fullscreenFab").focus();
    });

    return (
        <div className="testAlert-container">
            <FullscreenButton/>
            <Link className="button testAlert-container testAlert-confirmButton"  to="/lendo" >
                <p className="testAlert-informationText">Aplicativo web para testes, haverão limitações do navegador.</p>
                <br/>
                <p className="testAlert-informationText">Pressione para continuar.</p>
            </Link>
        </div>
    )
}