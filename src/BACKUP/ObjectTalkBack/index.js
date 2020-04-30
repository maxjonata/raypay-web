//{useRef} React
import React, {Component, useRef, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Sound from 'react-sound'
//import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
//import { View ,  Text, TouchableOpacity, AccessibilityInfo, UIManager, findNodeHandle } from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import './styles.css';
import mp3_file from '../../assets/Sounds/bleepRead.mp3';

/*
export default function ObjectTalkBack() {
    //const textView = useRef(null);
    const history = useHistory();
    const data = JSON.parse(localStorage.getItem('data'));
    const placeParam = (data === null)? 'nenhum':data.ESTABELECIMENTO;
    const valueParam = (data === null)? 0 : data.VALOR;
    const methodParam = (data === null)? 'nenhum' : data.METODO;
    const parcelsParam = (data === null)? 0 : data.QUANTIDADE_DE_PARCELAS;

    useEffect(() => {
        if(localStorage.getItem('played') === true) {
            localStorage.setItem('played', false);
            history.push('/information');
        }
    }, []);
    
    function AccessibilityDataList({place = 'nenhum', value = 0, method = 'nenhum', parcels}) { //Componente de informações

        if(place === 'nenhum' || value === 0 || method === 'nenhum') {
            return (
            <div className="informationContainer">
                <p className="informationText">Não foi possível obter informação.</p>
            </div>
        );} else return (
            <div className="informationContainer">
                <p className="informationText informationTitle">Compra sendo efetuada em {place} com:
                <br/><br/><br/>
                Valor de {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(value)}.<br/>
                Método de pagamento é {method}.<br/>
                {parcels > 0 && `Parcelado em ${parcels} vezes.`}</p>
            </div>
        );
    }
    
    function Choices() { //Componente de botões de escolha.
        return (
            <div className="buttons">
                <Link
                    className="button backButton"
                    to="/"
                >
                    <p className="backButtonText">Cancelar</p>
                </Link>
                <Link
                    className="button confirmButton"
                    to='/confirm'
                >
                    <p className="confirmButtonText">Confirmar</p>
                </Link>
            </div>
        )
    }

    //falar com joao sobre accessibilityDataList
    return(
        <div className="container">
            <audio src={mp3_file} autoPlay/>
            <AccessibilityDataList place={placeParam} value={valueParam} method={methodParam} parcels={parcelsParam}/>
            <Choices />d
        </div>
    );
   
}*/


class ObjectTalkBack extends Component {
    history = useHistory();
    data = JSON.parse(localStorage.getItem('data'));
    placeParam = (data === null)? 'nenhum':data.ESTABELECIMENTO;
    valueParam = (data === null)? 0 : data.VALOR;
    methodParam = (data === null)? 'nenhum' : data.METODO;
    parcelsParam = (data === null)? 0 : data.QUANTIDADE_DE_PARCELAS;

    
    AccessibilityDataList({place = 'nenhum', value = 0, method = 'nenhum', parcels}) { //Componente de informações

        if(place === 'nenhum' || value === 0 || method === 'nenhum') {
            return (
            <div className="informationContainer">
                <p className="informationText">Não foi possível obter informação.</p>
            </div>
        );} else return (
            <div className="informationContainer">
                <p className="informationText informationTitle">Compra sendo efetuada em {place} com:
                <br/><br/><br/>
                Valor de {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(value)}.<br/>
                Método de pagamento é {method}.<br/>
                {parcels > 0 && `Parcelado em ${parcels} vezes.`}</p>
            </div>
        );
    }
    
    Choices() { //Componente de botões de escolha.
        return (
            <div className="buttons">
                <Link
                    className="button backButton"
                    to="/"
                >
                    <p className="backButtonText">Cancelar</p>
                </Link>
                <Link
                    className="button confirmButton"
                    to='/confirm'
                >
                    <p className="confirmButtonText">Confirmar</p>
                </Link>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                <audio src={mp3_file} autoPlay/>
                <AccessibilityDataList place={placeParam} value={valueParam} method={methodParam} parcels={parcelsParam}/>
                <Choices />d
            </div>
        )
    }
}