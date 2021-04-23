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
            history.push("./createEvent")
        }
    }

    const createRSO = () => {
        if (sessionStorage.getItem("accountType") == "Student") {
            history.push("./createRSO")
        }else {
            window.alert("You cannot create a RSO with your account type. You need to be a Student!")
            history.push("./createRSO")
        }        
    }

    const createUniversity = () => {
        if (sessionStorage.getItem("accountType") == "SuperAdmin") {
            history.push("./createUniversity")
        }else {
            window.alert("You cannot create a University with your account type. You need to be a Super Admin!")
            history.push("./createUniversity")
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
                    <button value="LOGOUT" onClick={Logout}>
                        LOGOUT
                    </button>
                </div>                 
            </div>
        </form>
    );
}

export default MainPage