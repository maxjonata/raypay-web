import React, { Component } from 'react'
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import './styles.css'

import { getJsonFrom } from '../QRToData';

export default class AccessibilityDataList extends Component { //Componente de informações

    render() {
        const {place, value, method, parcels} = getJsonFrom(this.props.dataString);
        
        return (
            <div className="accessibilityDataList-informationContainer" id={this.props.id}>
                <p>Compra sendo efetuada em {place} com:</p>
                <br/><br/><br/>
                <p>Valor de {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(value)}.</p><br/>
                <p>Método de pagamento é {method}.</p><br/>
                <p>{parcels > 0 && `Parcelado em ${parcels} vezes.`}</p>
            </div>
        )
    }
}