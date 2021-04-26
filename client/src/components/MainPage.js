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
        if (sessionStorage.getItem("accountType") == "Admin") {
            history.push("./createEvent")
        }else {
            window.alert("You cannot create an event with your account type. You need to be an Admin!")
            // history.push("./createEvent")
        }
    }

    const createRSO = () => {
        if (sessionStorage.getItem("accountType") == "Student") {
            history.push("./createRSO")
        }else {
            window.alert("You cannot create a RSO with your account type. You need to be a Student!")
            // history.push("./createRSO")
        }        
    }

    const createUniversity = () => {
        if (sessionStorage.getItem("accountType") == "SuperAdmin") {
            history.push("./createUniversity")
        }else {
            window.alert("You cannot create a University with your account type. You need to be a Super Admin!")
            // history.push("./createUniversity")
        } 
    }

    const viewEvents = () => {
        if (sessionStorage.getItem("accountType") == "Student") {
            history.push("./viewEvents")
        }else {
            window.alert("You cannot view events with your account type. You need to be a Student!")
            // history.push("./viewEvents")
        }        
    }

    const joinRSO = () => {
        if (sessionStorage.getItem("accountType") == "Student") {
            history.push("./joinRSO")
        }else {
            window.alert("You cannot join a RSO with your account type. You need to be a Student!")
            // history.push("./joinRSO")
        }        
    }

    const leaveRSO = () => {
        if (sessionStorage.getItem("accountType") == "Student") {
            history.push("./leaveRSO")
        }else {
            window.alert("You cannot leave a RSO with your account type. You need to be a Student!")
            // history.push("./leaveRSO")
        }        
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
                    <button value="CREATE UNIVERSITY" onClick={createUniversity}>
                        CREATE UNIVERSITY
                    </button>
                    <button value="VIEW EVENTS" onClick={viewEvents}>
                        VIEW EVENTS
                    </button>
                    <button value="JOIN RSO" onClick={joinRSO}>
                        JOIN RSO
                    </button>
                    <button value="LEAVE RSO" onClick={leaveRSO}>
                        LEAVE RSO
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