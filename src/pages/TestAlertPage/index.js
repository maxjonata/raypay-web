import React, {Component, useState} from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function TestAlertPage() {
    if(navigator.mediaDevices.getUserMedia({video: true})) {//Caso tenha permissão
        return (
            <Link className="button testAlert-container testAlert-confirmButton"  to="/lendo" >
                <p className="testAlert-informationText">Aplicativo web para testes, haverão limitações do navegador.</p>
                <br/>
                <p className="testAlert-informationText">Pressione para continuar.</p>
            </Link>
        )
    } else { //Caso não tenha permissão
        return (
            <div>
                <h1>Você não concedeu permissao à camera!</h1>
                <h2>No navegador GoogleChrome, para que tenhamos acesso a sua camera, siga as seguintes etapas:</h2>
                <ol>
                    <li>Abra o GoogleChrome</li>
                    <li>Logo à direita da barra de endereço, toque no símbolo de Mais Opções, representado por 3 pontinhos verticais</li>
                    <li>Clique em Configurações</li>
                    <li>Em Avançado, toque em Configurações do site</li>
                    <li>Toque na permissão de camera, para ficar positiva</li>
                </ol>
            </div>
        )
    }
}