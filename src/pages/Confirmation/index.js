import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Confirmation extends Component {

    render() {
        return(
            <Link className="button confirmation-container confirmation-confirmButton"  to="/lendo">
                <p>Compra confirmada com sucesso!</p>
                <p>Pressione para ler outro QR</p>
            </Link>
        );
    }
    
}