import React, {useState} from 'react';
import { useHistory } from 'react-router';
import './../index.css'

function Register({ error }) {
    const [details, setDetails] = useState({email: "", password: "", accountType: "", phoneNumber: ""});
  
    const createUser = e => {
        e.preventDefault();

        // TODO: Put in DataBase
        console.log(details);
        routeChange();
    }

    const history = useHistory();

    const routeChange  = () => {
        history.push("./")
    }

    return (
        <form className="App" onSubmit={createUser}>
            <div className="form-inner">    
                <h2> Register </h2>
                {(error != "") ? ( <div className="error">{error}</div> ) : ""}
                <div className="box">
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input
                        type="email"
                        name="email"
                        className="register-input"
                        placeholder="Email@website.com"
                        id="email"
                        onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                    </div>

                    <div className="form-group">
                        <label>Phone Number: </label>
                        <input
                        type="string"
                        name="phonenumber"
                        className="register-input"
                        placeholder="Phone #"
                        id="phoneNumber"
                        onChange={e => setDetails({...details, phoneNumber: e.target.value})} value={details.phoneNumber} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input
                        type="password"
                        name="password"
                        className="register-input"
                        placeholder="Password"
                        id="password"
                        onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                    </div>

                    <div className="u-form-group u-form-radiobutton u-form-group-3">
                        <div className="radio">
                            <label className="u-label" htmlFor="radio">Super Admin </label>
                                <input id="SuperAdmin" type="radio" onChange={e => setDetails({...details, accountType: "SuperAdmin"})} checked={details.accountType == "SuperAdmin"} />                        
                            <br/>
                            <label className="u-label" htmlFor="radio">Admin </label>
                                <input id="Admin" type="radio" onChange={e => setDetails({...details, accountType: "Admin"})} checked={details.accountType == "Admin"}/>                        
                            <br/>
                            <label className="u-label" htmlFor="radio">Student </label>
                                <input id="Student" type="radio" onChange={e => setDetails({...details, accountType: "Student"})} checked={details.accountType == "Student"}/>                        
                            <br/>
                        </div>
                    </div>

                    {/* <div className="radio">
                        <label>
                            <input type="radio" value="Admin" onChange={e => setDetails({...details, accountType: e.target.value})} value={details.accountType} />
                            Admin
                        </label>
                    </div>

                    <div className="radio">
                        <label>
                            <input type="radio" value="Student" onChange={e => setDetails({...details, accountType: e.target.value})} value={details.accountType} />
                            Student
                        </label>
                    </div> */}

                    <input type="submit" value="REGISTER"/>

                    <input type="button" value="RETURN" onClick={routeChange}/>
                </div>
            </div>
        </form>
      );
}

export default Register