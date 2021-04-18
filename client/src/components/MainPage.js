import React, {useState} from 'react';
import LoginBox from './LoginBox'
import { useHistory } from 'react-router';
import './../index.css'

function MainPage() {
    const history = useHistory();

    const getUser = () => {
        return sessionStorage.getItem("username");
    }

    const Logout = () => {
        // console.log("clicked")
        history.push("./")
    }

    const createEvent = () => {
        // console.log("clicked")
        history.push("./createEvent")
    }

    const createRSO = () => {
        // console.log("clicked")
        history.push("./createRSO")
    }

    return (
        <form className="MainPage">
            <div className="form-inner">
                <h2> Welcome  <span>{getUser()}</span></h2>
                <div className="NavBar">
                    <button value="CREATE EVENT" onClick={createEvent}>
                        CREATE EVENT
                    </button> 
                    <button value="CREATE RSO" onClick={createRSO}>
                        CREATE RSO
                    </button>
                    <button value="LOGOUT" onClick={Logout}>
                        LOGOUT
                    </button>
                </div>                 
            </div>
        </form>
    );
}

export default MainPage