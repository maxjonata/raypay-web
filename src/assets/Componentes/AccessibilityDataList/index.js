import React, { Component } from 'react'
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import './styles.css'

export default class AccessibilityDataList extends Component { //Componente de informações'

    getJsonData() {
        const dataJson = JSON.parse(this.props.dataString);
        const place = dataJson.ESTABELECIMENTO || 'nenhum';
        const value = dataJson.VALOR || 0;
        const method = dataJson.METODO || 'nenhum';
        const parcels = dataJson.QUANTIDADE_DE_PARCELAS || 0;

        return {
            place: place,
            value: value,
            method: method,
            parcels: parcels
        }
    }

    render() {
        const {place, value, method, parcels} = this.getJsonData();
        
        if(place === 'nenhum' || value === 0 || method === 'nenhum') {
            return (
            <div className="accessibilityDataList-informationContainer">
                <p>Não foi possível obter informação.</p>
            </div>
        );} else return (
            <div className="accessibilityDataList-informationContainer">
                <p>Compra sendo efetuada em {place} com:</p>
                <br/><br/><br/>
                <p>Valor de {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(value)}.</p><br/>
                <p>Método de pagamento é {method}.</p><br/>
                <p>{parcels > 0 && `Parcelado em ${parcels} vezes.`}</p>
            </div>
        );
    }
}