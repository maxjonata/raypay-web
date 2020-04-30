import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import QRReader from './pages/QRReader';
import ObjectTalkBack from './pages/ObjectTalkBack';
import Confirmation from './pages/Confirmation';
import Start from './pages/TestAlertPage';
/*
import Loading from './pages/Loading';
import ObjectTalkBack from './pages/ObjectTalkBack';
import Confirmation from './pages/Confirmation';
<Route path="/loading" component={Loading}/>
<Route path="/information" component={ObjectTalkBack}/>
<Route path="/information/confirm" component={Confirmation}/>
*/
export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Start}/>
                <Route path="/lendo" exact component={QRReader}/>
                <Route path="/information" component={ObjectTalkBack}/>
                <Route path="/confirm" component={Confirmation}/>
            </Switch>
        </BrowserRouter>
    );
}