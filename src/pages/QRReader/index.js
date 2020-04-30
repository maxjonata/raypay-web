
import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

import './styles.css';

import { getJsonFrom } from '../../assets/Componentes/QRToData';
import { useHistory } from 'react-router-dom';

export default function QRReader() {
	const history = useHistory();

	function handleScan(data) {
		if (data && (getJsonFrom(data) !== false)) {
			localStorage.setItem('data', data);
			history.push("/information");
		}
	}
	
	function handleError(err) {
		console.error(err)
	}

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
				<div className="qr-textBox">
				<p>Aponte a câmera para ler o código.</p>
			</div>
		</div>
    )
};