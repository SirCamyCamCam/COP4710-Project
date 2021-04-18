import React, {useState} from 'react';
import { useHistory } from 'react-router';
import './../index.css'

function LoginBox() {
    const history = useHistory();
    const [details, setDetails] = useState({email: "", password: ""});
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }
    
    const [user, setUser] = useState({email: ""});
    const [error, setError] = useState("");

    // Temporary check before checkjing if user is in database 
    const LoginCheck = details => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password) {
            console.log("Logged in");
            setUser({
                email: details.email
            });
            sessionStorage.setItem("username", details.email);
            // Navigate to main page
            history.push("./mainPage");
        }else {
            console.log("Credentials do not match");
            setError("Credentials do not match")
        }
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
                        onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input
                        type="password"
                        name="password"
                        className="login-input"
                        placeholder="Password"
                        id="password"
                        onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                    </div>

                    <input type="submit" value="LOGIN"/>

                    <input type="button" value="REGISTER" onClick={register}/>
                </div>
            </div>
        </form>
      );
}

export default LoginBox