import React from 'react'
import Fab from '@material-ui/core/Fab';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import { useState } from 'react';

import './styles.css'

export default function FullscreenButton(props) { //Componente de informações
    const [FullscreenEnabled, setFullscreenEnabled] = useState((document.fullscreenElement === null)?false:true);

    function activateFullscreen(element) {
        element.requestFullscreen()
        .then(function() {
            setFullscreenEnabled(true)
        })
        .catch(function(error) {
            console.log(error.message);
        });
    }

    function deactivateFullscreen() {
        document.exitFullscreen()
        .then(function() {
            setFullscreenEnabled(false);
        })
        .catch(function(error) {
            console.log(error.message);
        });
    }

    function fullscreenSwitch() {
        var element = document.querySelector("#htmlTag");
        if(FullscreenEnabled) {
            deactivateFullscreen();
        } else {
            activateFullscreen(element);
        }
    }

    return (
        <Fab
        alt={(FullscreenEnabled)?"Desativar tela cheia":"Ativar tela cheia"}
        aria-label="fullscreen"
        onClick={fullscreenSwitch}
        id="fullscreenFab"
        tabIndex={(props.tabIndex !== undefined)?props.tabIndex:undefined}
        >
            <FullscreenIcon />
        </Fab>
    )
}