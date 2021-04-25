import React, {useState} from 'react';
import { useHistory } from 'react-router';
import './../index.css'
import axios from 'axios'

function LeaveRSO() {
    const history = useHistory();
    const [details, setDetails] = useState({email: "", RSOName: ""});
    
    const [error, setError] = useState("");

    // Temporary check before checkjing if user is in database 
    const leaveRSO = details => {
        console.log(details);

        // TODO: Put in DataBase
        axios.post("RSOs/deleteStudent", details).then(response => {
            if (response.data == "RSO updated") {
                console.log(response.data)
                window.alert(response.data)
                routeChange();
            }else {
                console.log(response.data)
                window.alert(response.data)
            }
        });
    }
  
    const sumbitHandler = e => {
        e.preventDefault();

        setDetails({...details, email: sessionStorage.getItem("username")})
        // Put Student in database
        leaveRSO(details)
    }

    const routeChange  = () => {
        history.push("./mainPage")
    }
  
      return (
        <form className="LeaveRSO" onSubmit={sumbitHandler}>
            <div className="form-inner">    
                <h2> Join RSO </h2>
                <h3> Put in the name of the RSO you want to leave</h3>
                {(error != "") ? ( <div className="error">{error}</div> ) : ""}
                <div className="box">
                    <div className="form-group">
                        <label>RSO Name: </label>
                        <input
                        type="RSO Name"
                        name="RSO Name"
                        className="login-input"
                        placeholder="RSO Name"
                        id="RSO Name"
                        onChange={e => setDetails({...details, RSOName: e.target.value})} value={details.RSOName} />
                    </div>

                    <input type="submit" value="SUBMIT"/>
                    <input type="button" value="RETURN" onClick={routeChange}/>
                </div>
            </div>
        </form>
      );
}

export default LeaveRSO