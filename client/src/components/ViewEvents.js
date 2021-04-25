import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import axios from 'axios'

function viewEvents() {
    const history = useHistory();

    const containerStyle = {
        width: '500px',
        height: '500px'
      };

    const [event1, setEvent1] = useState({EventName: "", EventType: "", EventPhone: "", EventCategory: "", EventRSO: "",
                                          EventLat: "", EventLon: "", EventDesc: "", EventDate: "", EventTime: "", EventUniversity: ""});
     
    const [event2, setEvent2] = useState({EventName: "", EventType: "", EventPhone: "", EventCategory: "", EventRSO: "",
                                          EventLat: "", EventLon: "", EventDesc: "", EventDate: "", EventTime: "", EventUniversity: ""});
    
    const [event3, setEvent3] = useState({EventName: "", EventType: "", EventPhone: "", EventCategory: "", EventRSO: "",
                                          EventLat: "", EventLon: "", EventDesc: "", EventDate: "", EventTime: "", EventUniversity: ""});
                                         
    const [event4, setEvent4] = useState({EventName: "", EventType: "", EventPhone: "", EventCategory: "", EventRSO: "",
                                          EventLat: "", EventLon: "", EventDesc: "", EventDate: "", EventTime: "", EventUniversity: ""});

    const [event5, setEvent5] = useState({EventName: "", EventType: "", EventPhone: "", EventCategory: "", EventRSO: "",
                                          EventLat: "", EventLon: "", EventDesc: "", EventDate: "", EventTime: "", EventUniversity: ""});

    const sampleEvents = {
        EventName: "Sample Event",
        EventType: "Public",
        EventPhone: "3214543298",
        EventCategory: "Free",
        EventDate: "2021-05-21",
        EventTime: "23:40",
        EventUniversity: "UCF",
        EventDesc: "This is a test event",
        EventLat: "-8.3432543534",
        EventLon: "23.664565476"
    }

    const getEventName = event1 => {
        return event1.EventName
    }

    useEffect(() => {
        setEvent1({...event1, 
            EventName: sampleEvents.EventName, EventType: sampleEvents.EventType, 
            EventPhone: sampleEvents.EventPhone, EventCategory: sampleEvents.EventCategory, 
            EventDate: sampleEvents.EventDate, EventUniversity: sampleEvents.EventUniversity, 
            EventDesc: sampleEvents.EventDesc, EventLat: sampleEvents.EventLat, EventLon: sampleEvents.EventLon,
            EventTime: sampleEvents.EventTime})

        axios.post("Events/findEvents").then(response => {
            if (response.data == null) {
                // routeChange();
                console.log("ERROR")
            }else {
                console.log(response.data)
            }
        });
        // console.log(event1)
    })

    const routeChange  = () => {
        history.push("./mainPage")
    }

    return (
        <form className="ViewEvents">
            <div className="form-inner">    
                <h2> Viewing Events </h2>
                <h3> You are now viewing 5 events</h3>
                {/* {(error != "") ? ( <div className="error">{error}</div> ) : ""} */}
                <div className="box">
                    <div className="form-group">
                        <h4>Event 1: </h4>
                        <h5>Event Name: <span>{event1.EventName}</span></h5>
                        <h5>Event Type: <span>{event1.EventType}</span></h5>
                        <h5>Event Phone: <span>{event1.EventPhone}</span></h5>
                        <h5>Event Category: <span>{event1.EventCategory}</span></h5>
                        <h5>Event Date: <span>{event1.EventDate}</span></h5>
                        <h5>Event University: <span>{event1.EventUniversity}</span></h5>
                        <h5>Event Description: <span>{event1.EventDesc}</span></h5>
                        <h5>Event Location: Lat: <span>{event1.EventLat}</span> Long: <span>{event1.EventLon}</span></h5>
                        <h5>Event Time: <span>{event1.EventTime}</span></h5>
                    </div>

                    <div className="form-group">
                        <h4>Event 2: </h4>
                        <h5>Event Name: <span>{event1.EventName}</span></h5>
                        <h5>Event Type: <span>{event1.EventType}</span></h5>
                        <h5>Event Phone: <span>{event1.EventPhone}</span></h5>
                        <h5>Event Category: <span>{event1.EventCategory}</span></h5>
                        <h5>Event Date: <span>{event1.EventDate}</span></h5>
                        <h5>Event University: <span>{event1.EventUniversity}</span></h5>
                        <h5>Event Description: <span>{event1.EventDesc}</span></h5>
                        <h5>Event Location: Lat: <span>{event1.EventLat}</span> Long: <span>{event1.EventLon}</span></h5>
                        <h5>Event Time: <span>{event1.EventTime}</span></h5>
                    </div>

                    <div className="form-group">
                        <h4>Event 3: </h4>
                        <h5>Event Name: <span>{event1.EventName}</span></h5>
                        <h5>Event Type: <span>{event1.EventType}</span></h5>
                        <h5>Event Phone: <span>{event1.EventPhone}</span></h5>
                        <h5>Event Category: <span>{event1.EventCategory}</span></h5>
                        <h5>Event Date: <span>{event1.EventDate}</span></h5>
                        <h5>Event University: <span>{event1.EventUniversity}</span></h5>
                        <h5>Event Description: <span>{event1.EventDesc}</span></h5>
                        <h5>Event Location: Lat: <span>{event1.EventLat}</span> Long: <span>{event1.EventLon}</span></h5>
                        <h5>Event Time: <span>{event1.EventTime}</span></h5>
                    </div>

                    <div className="form-group">
                        <h4>Event 4: </h4>
                        <h5>Event Name: <span>{event1.EventName}</span></h5>
                        <h5>Event Type: <span>{event1.EventType}</span></h5>
                        <h5>Event Phone: <span>{event1.EventPhone}</span></h5>
                        <h5>Event Category: <span>{event1.EventCategory}</span></h5>
                        <h5>Event Date: <span>{event1.EventDate}</span></h5>
                        <h5>Event University: <span>{event1.EventUniversity}</span></h5>
                        <h5>Event Description: <span>{event1.EventDesc}</span></h5>
                        <h5>Event Location: Lat: <span>{event1.EventLat}</span> Long: <span>{event1.EventLon}</span></h5>
                        <h5>Event Time: <span>{event1.EventTime}</span></h5>
                    </div>

                    <div className="form-group">
                        <h4>Event 5: </h4>
                        <h5>Event Name: <span>{event1.EventName}</span></h5>
                        <h5>Event Type: <span>{event1.EventType}</span></h5>
                        <h5>Event Phone: <span>{event1.EventPhone}</span></h5>
                        <h5>Event Category: <span>{event1.EventCategory}</span></h5>
                        <h5>Event Date: <span>{event1.EventDate}</span></h5>
                        <h5>Event University: <span>{event1.EventUniversity}</span></h5>
                        <h5>Event Description: <span>{event1.EventDesc}</span></h5>
                        <h5>Event Location: Lat: <span>{event1.EventLat}</span> Long: <span>{event1.EventLon}</span></h5>
                        <h5>Event Time: <span>{event1.EventTime}</span></h5>
                    </div>
                </div>

                <input type="button" value="RETURN" onClick={routeChange}/>
            </div>
        </form>
    )

}

export default viewEvents