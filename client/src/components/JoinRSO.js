import React, {useState} from 'react';
import { useHistory } from 'react-router';
import './../index.css'
import axios from 'axios'


function JoinRSO() {
    const history = useHistory();
    const [details, setDetails] = useState({email: "", RSOName: ""});
    
    const [error, setError] = useState("");

    // Temporary check before checkjing if user is in database 
    const joinRSO = details => {
        console.log(details);

        // TODO: Put in DataBase
        axios.post("RSOs/addAStudent", details).then(response => {
            if (response.data == "rso does not exist") {
                console.log(response.data)
                window.alert("RSO does NOT exist")
            }else {
                console.log(response.data)
                window.alert("Successfully joined RSO")
                routeChange();
            }
        });
    }
  
    const sumbitHandler = e => {
        e.preventDefault();

        setDetails({...details, email: sessionStorage.getItem("username")})
        // Put Student in database
        joinRSO(details)
    }

    const routeChange  = () => {
        history.push("./mainPage")
    }
  
      return (
        <form className="JoinRSO" onSubmit={sumbitHandler}>
            <div className="form-inner">    
                <h2> Join RSO </h2>
                <h3> Put in the name of the RSO you want to join</h3>
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

export default JoinRSO