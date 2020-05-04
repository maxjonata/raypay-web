import React, {Component, useState} from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import FullscreenButton from '../../assets/Componentes/FullscreenButton';

export default function TestAlertPage() {
    return (
        <Link className="button testAlert-container testAlert-confirmButton"  to="/lendo" >
            <FullscreenButton/>
            <p className="testAlert-informationText">Aplicativo web para testes, haverão limitações do navegador.</p>
            <br/>
            <p className="testAlert-informationText">Pressione para continuar.</p>
        </Link>
    )
}