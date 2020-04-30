
import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

import './styles.css'

export default class QRReader extends Component {

  handleScan = data => {
    if (data) {
      localStorage.setItem('data', data)

      this.props.history.push("/information");
    }
  }

  handleError = err => {
    console.error(err)
  }

  render() {
    return (
      <div className="qr-container">
        <QrReader
          className="qr-reader"
          delay={0}
          onError={this.handleError}
          onScan={this.handleScan}
          facingMode={"environment"}
          showViewFinder={false}

        />
        <div className="qr-textBox">
          <p>Aponte a câmera para ler o código.</p>
        </div>
      </div>
    )
  }
};