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
import JoinRSO from './components/JoinRSO'
import LeaveRSO from './components/LeaveRSO'
import ViewEvents from './components/ViewEvents'
import AddComment from './components/AddComment'

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
            <Route exact path={'/joinRSO'} component={JoinRSO} />
            <Route exact path={'/leaveRSO'} component={LeaveRSO} />
            <Route exact path={'/addComment'} component={AddComment} />
        </Switch>
    </BrowserRouter>,
document.getElementById('root')
);