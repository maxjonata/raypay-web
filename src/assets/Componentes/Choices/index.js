import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './styles.css'

export default class Choices extends Component { //Componente de informações'
    render() {
        return (
            <div className="choices-buttons">
                <Link
                    className="button choices-backButton"
                    to="/lendo"
                >
                    <p className="choices-backButtonText">Cancelar</p>
                </Link>
                <Link
                    className="button choices-confirmButton"
                    to='/confirm'
                >
                    <p className="choices-confirmButtonText">Confirmar</p>
                </Link>
            </div>
        )
    }
}