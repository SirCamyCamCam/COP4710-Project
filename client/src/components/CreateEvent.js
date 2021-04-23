import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import { GoogleMap, useJsApiLoader, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '1000px',
  height: '700px'
};

const center = {
  lat: 28.602390961140763,
  lng: -81.20016195094244
};

function CreateEvent() {
  const [latLong, getLatLong1] = useState({lat: "", long: ""});

  const [markers, setMarkers] = useState([]);

  const [details, setDetails] = useState({email: "", eventName: "", eventType: "", phoneNumber: "", 
                                          lat: "", long: "", eventDescription: "", date: "", time: ""});

  const getLatLng = e => {
    getLatLong1({...latLong, lat: e.latLng.lat(), long: e.latLng.lng()});
    setDetails({...latLong, lat: e.latLng.lat(), long: e.latLng.lng()});
    console.log(latLong)
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log(details);
    createEvent(details, markers)
  }

  const createEvent = (details, markers) => {
    details.lat = markers.lat;
    details.long = markers.lng;

    console.log(details);
    // TODO Put in DataBase
  }

  const history = useHistory();

  const routeChange  = () => {
    history.push("./mainPage")
}
  
  return (
    <form className="CreateEvent" onSubmit={submitHandler}>
      <div className="form-inner">    
          <h2> Create Event </h2>
          {/* {(error != "") ? ( <div className="error">{error}</div> ) : ""} */}
          <div className="box">
              <div className="form-group">
                  <label>Event Name: </label>
                  <input
                  type="EventName"
                  name="EventName"
                  className="register-input"
                  placeholder="Event Name"
                  id="Event Name"
                  onChange={e => setDetails({...details, eventName: e.target.value})} value={details.eventName} />
              </div>

              <div className="u-form-group u-form-radiobutton u-form-group-3">
                <h6> Event Type </h6>
                <div className="radio"> 
                    <label className="u-label" htmlFor="radio">Public </label>
                        <input id="Public" type="radio" onChange={e => setDetails({...details, eventType: "Public"})} checked={details.eventType == "Public"} />                        
                    <br/>
                    <label className="u-label" htmlFor="radio">Private </label>
                        <input id="Private" type="radio" onChange={e => setDetails({...details, eventType: "Private"})} checked={details.eventType == "Private"}/>                        
                    <br/>
                    <label className="u-label" htmlFor="radio">RSO </label>
                        <input id="RSO" type="radio" onChange={e => setDetails({...details, eventType: "RSO"})} checked={details.eventType == "RSO"}/>
                    <br/>
                </div>
              </div>

              <div className="form-group">
                  <label htmlFor="email">Contact Email: </label>
                  <input
                  type="email"
                  name="email"
                  className="register-input"
                  placeholder="Event Name"
                  id="email"
                  onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
              </div>

              <div className="form-group">
                  <label>Contact Phone Number: </label>
                  <input
                  type="string"
                  name="phonenumber"
                  className="register-input"
                  placeholder="Phone #"
                  id="phoneNumber"
                  onChange={e => setDetails({...details, phoneNumber: e.target.value})} value={details.phoneNumber} 
                  />
              </div>

              <div className="form-group">
                  <label>Event Description: </label>
                  <input
                  type="eventDescription"
                  name="eventDescription"
                  className="register-input"
                  placeholder="Give a short description"
                  id="eventDescription"
                  onChange={e => setDetails({...details, eventDescription: e.target.value})} value={details.eventDescription} />
              </div>

              <div className="form-group">
                  <label>Date: </label>
                  <input
                  type="Date"
                  name="Date"
                  className="register-input"
                  placeholder=""
                  id="eventDescription"
                  onChange={e => setDetails({...details, date: e.target.value})} value={details.date} />
              </div>

              <div className="form-group">
                  <label>time: </label>
                  <input
                  type="time"
                  name="time"
                  className="register-input"
                  placeholder=""
                  id="eventDescription"
                  onChange={e => setDetails({...details, time: e.target.value})} value={details.time} />
              </div>

              <input type="submit" value="CREATE EVENT"/>
              <input type="button" value="RETURN" onClick={routeChange}/>

          </div>
        </div>
        <div className="Map-inner">  
            <LoadScript
            googleMapsApiKey='AIzaSyD_v1fW8ItPVq4FBsJt_xZVbiH7-732AIs'>
              <GoogleMap
                mapContainerStyle={containerStyle}
                zoom={17}
                center={center}
                onClick={e => {
                  setMarkers((current) => [
                    ...current, 
                    {
                      lat: e.latLng.lat(),
                      lng: e.latLng.lng(),
                      time: new Date(),
                    },
                  ]);
                }}
              >
                {markers.map((marker) => (
                  <Marker
                    position={{ lat: marker.lat, lng: marker.lng }}
                    key={marker.time.toISOString()}
                  />
                ))}
            </GoogleMap>
          </LoadScript>
        </div>
    </form>
   )
}

export default CreateEvent