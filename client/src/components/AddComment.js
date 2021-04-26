import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import { GoogleMap, useJsApiLoader, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios'

const getEventName = () => {
    return sessionStorage.getItem("event")
}

function AddComment() {
    const [details, setDetails] = useState({CommentEventName: "", CommentText: "", CommentTime: "", CommentStudent: ""});

    const submitHandler = e => {
        e.preventDefault();
        console.log(details);
        setDetails({...details, CommentEventName: getEventName(), CommentStudent: sessionStorage.getItem("username")})
        addComment(details)
    }

    const addComment = (details, markers) => {
        details.UniversityLat = markers[0].lat;
        details.UniversityLon = markers[0].lng;

        console.log(details);
        // TODO Put in DataBase
        axios.post("Comments/createComment", details).then(response => {
        if (response.data == "Created Comment") {
            routeChange();
            console.log(response.data)
        }else {
            console.log(response.data)
        }
        });

    }

    const history = useHistory();

    const routeChange  = () => {
        history.push("./viewEvents")
    }
    
    return (
        <form className="CreateUniversity" onSubmit={submitHandler}>
        <div className="form-inner">    
            <h2> Add Comment to <span>{getEventName()}</span> Event</h2>
            {/* {(error != "") ? ( <div className="error">{error}</div> ) : ""} */}
            <div className="box">
                <div className="form-group">
                    <label>Comment Text: </label>
                    <input
                    type="Comment Text"
                    name="Comment Text"
                    className="register-input"
                    placeholder="Comment Text"
                    id="CommentText"
                    onChange={e => setDetails({...details, CommentText: e.target.value})} value={details.CommentText} />
                </div>

                <input type="submit" value="CREATE COMMENT"/>
                <input type="button" value="RETURN" onClick={routeChange}/>
            </div>
            </div>
        </form>
    )
}

export default AddComment