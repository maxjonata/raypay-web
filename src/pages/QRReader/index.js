
import React from 'react';
import QrReader from 'react-qr-reader';

import './styles.css';

import { getJsonFrom } from '../../assets/Componentes/QRToData';
import { useHistory } from 'react-router-dom';

import FullscreenButton from '../../assets/Componentes/FullscreenButton';
import { useEffect } from 'react';

export default function QRReader() {
	const history = useHistory();

	function handleScan(data) {
		if (data && (getJsonFrom(data) !== false)) {
			history.push("/information", {data: data});
		}
	}
	
	function handleError(err) {
		console.error(err)
	}

	useEffect(() => {
        document.getElementById("text").focus();
    });

    return (
		<div className="qr-container">
			<QrReader
			className="qr-reader"
			delay={0}
			onError={handleError}
			onScan={handleScan}
			facingMode={"environment"}
			showViewFinder={false}
			/>
				<FullscreenButton tabIndex="2"/>
				<p tabIndex="1" id="text">Aponte a câmera para ler o código.</p>

		</div>
    )
};