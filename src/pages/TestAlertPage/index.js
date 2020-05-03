import React, {Component, useState} from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function TestAlertPage() {
    return (
        <Link className="button testAlert-container testAlert-confirmButton"  to="/lendo" >
            <p className="testAlert-informationText">Aplicativo web para testes, haverão limitações do navegador.</p>
            <br/>
            <p className="testAlert-informationText">Pressione para continuar.</p>
        </Link>
    )
}