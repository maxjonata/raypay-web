import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import FullscreenButton from '../../assets/Componentes/FullscreenButton';


export default class Confirmation extends Component {

    render() {
        return(
            <Link className="button confirmation-container confirmation-confirmButton"  to="/lendo">
                <FullscreenButton/>
                <p>Compra confirmada com sucesso!</p>
                <p>Pressione para ler outro QR</p>
            </Link>
        );
    }
    
}