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

function CreateUniversity() {
  const [latLong, getLatLong1] = useState({lat: "", long: ""});

  const [markers, setMarkers] = useState([]);

  const [details, setDetails] = useState({UniversityEmail: "", UniversityName: "", lat: "", long: "", UniversityDesc: ""});

  const getLatLng = e => {
    getLatLong1({...latLong, lat: e.latLng.lat(), long: e.latLng.lng()});
    setDetails({...latLong, lat: e.latLng.lat(), long: e.latLng.lng()});
    console.log(latLong)
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log(details);
    createUniversity(details, markers)
  }

  const createUniversity = (details, markers) => {
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
    <form className="CreateUniversity" onSubmit={submitHandler}>
      <div className="form-inner">    
          <h2> Create University </h2>
          {/* {(error != "") ? ( <div className="error">{error}</div> ) : ""} */}
          <div className="box">
              <div className="form-group">
                  <label>University Name: </label>
                  <input
                  type="University Name"
                  name="University Name"
                  className="register-input"
                  placeholder="University Name"
                  id="University Name"
                  onChange={e => setDetails({...details, UniversityName: e.target.value})} value={details.UniversityName} />
              </div>

              <div className="form-group">
                  <label htmlFor="email">Email: </label>
                  <input
                  type="email"
                  name="email"
                  className="register-input"
                  placeholder="Email"
                  id="email"
                  onChange={e => setDetails({...details, UniversityEmail: e.target.value})} value={details.UniversityEmail} />
              </div>

              <div className="form-group">
                  <label>University Description: </label>
                  <input
                  type="eventDescription"
                  name="eventDescription"
                  className="register-input"
                  placeholder="Give a short description"
                  id="eventDescription"
                  onChange={e => setDetails({...details, UniversityDesc: e.target.value})} value={details.UniversityDesc} />
              </div>

              <input type="submit" value="CREATE UNIVERSITY"/>
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

export default CreateUniversity