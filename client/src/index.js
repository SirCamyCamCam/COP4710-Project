import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './components/Register';
import App from './App';
import './index.css'
import LoginBox from './components/LoginBox';
import MainPage from './components/MainPage';
import CreateEvent from './components/CreateEvent';
import CreateRSO from './components/CreateRSO';
import CreateUniversity from './components/CreateUniversity'
import ViewEvents from './components/ViewEvents'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path={'/'} component={LoginBox} />
            <Route exact path={'/register'} component={Register} />
            <Route exact path={'/mainPage'} component={MainPage} />
            <Route exact path={'/createEvent'} component={CreateEvent} />
            <Route exact path={'/createRSO'} component={CreateRSO} />
            <Route exact path={'/createUniversity'} component={CreateUniversity} />
            <Route exact path={'/viewEvents'} component={ViewEvents} />
        </Switch>
    </BrowserRouter>,
document.getElementById('root')
);