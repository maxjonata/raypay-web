import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import FullscreenButton from '../../assets/Componentes/FullscreenButton';
import { useEffect } from 'react';


export default function Confirmation() {
    useEffect(() => {
        document.getElementById("ConfirmButton").focus();
    });

    return(
        <div className="confirmation-container">
            <FullscreenButton/>
            <Link tabIndex="1" id="ConfirmButton" className="button confirmation-container confirmation-confirmButton"  to="/lendo">
                <p>Compra confirmada com sucesso!</p>
                <p>Pressione para ler outro QR</p>
            </Link>
        </div>
        
    );
    
}