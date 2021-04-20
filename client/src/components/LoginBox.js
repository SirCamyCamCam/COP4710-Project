import React, {useState} from 'react';
import { useHistory } from 'react-router';
import axios from 'axios'
import './../index.css'

function LoginBox() {
    const history = useHistory();
    const [details, setDetails] = useState({AdminEmail: "", AdminPassword: ""});
    const adminUser = {
        AdminEmail: "admin@admin.com",
        password: "admin123"
    }
    
    const [user, setUser] = useState({AdminEmail: ""});
    const [error, setError] = useState("");

    // Temporary check before checkjing if user is in database 
    const LoginCheck = details => {
        //console.log(details);

        axios.post("Admins/findAdmin", details).then(response => {
            if (response.data == "SuperAdmin" || response.data == "Admin" || response.data == "Student") {
                console.log("Logged in");
                setUser({
                    AdminEmail: details.AdminEmail
                });
                sessionStorage.setItem("username", details.AdminEmail);
                sessionStorage.setItem("accountType", response.data);
                // Navigate to main page
                history.push("./mainPage");
            }else {
                console.log("Credentials do not match");
                setError("Credentials do not match")
            }
        })
    }
  
    const sumbitHandler = e => {
        e.preventDefault();

        LoginCheck(details)
    }

    const register  = () => {
        history.push("./register")
    }
  
      return (
        <form className="App" onSubmit={sumbitHandler}>
            <div className="form-inner">    
                <h2> Login </h2>
                {(error != "") ? ( <div className="error">{error}</div> ) : ""}
                <div className="box">
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input
                        type="email"
                        name="email"
                        className="login-input"
                        placeholder="Email"
                        id="email"
                        onChange={e => setDetails({...details, AdminEmail: e.target.value})} value={details.AdminEmail} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input
                        type="password"
                        name="password"
                        className="login-input"
                        placeholder="Password"
                        id="password"
                        onChange={e => setDetails({...details, AdminPassword: e.target.value})} value={details.AdminPassword} />
                    </div>

                    <input type="submit" value="LOGIN"/>

                    <input type="button" value="REGISTER" onClick={register}/>
                </div>
            </div>
        </form>
      );
}

export default LoginBox