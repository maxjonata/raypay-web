
import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

import './styles.css';

import { getJsonFrom } from '../../assets/Componentes/QRToData';

export default function QRReader() {

	function handleScan(data) {
		if (data && getJsonFrom(data)) {
			localStorage.setItem('data', data);
			this.props.history.push("/information");
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