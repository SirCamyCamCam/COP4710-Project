import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import axios from 'axios'

function viewEvents() {
    const history = useHistory();

    const containerStyle = {
        width: '500px',
        height: '500px'
    };

    const [admin, setAdmin] = useState({AdminEmail: ""})
        

    const getUser = {
        AdminEmail: sessionStorage.getItem("username")
    }

    const getUniversity = {
        university: ""
    }


    const [university, setUniversity] = useState({university: ""})

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

    useEffect(() => {        
        axios.post("Events/findEventsPublic").then(response => {
            if (response.data == null) {
                // routeChange();
                console.log("ERROR")
            }else {
                console.log(response.data[0])
                setEvent1({...event1, 
                    EventName: response.data[0].name, EventType: response.data[0].type, 
                    EventPhone: response.data[0].phone, EventCategory: response.data[0].category, 
                    EventDate: response.data[0].date, EventUniversity: response.data[0].university, 
                    EventDesc: response.data[0].desc, EventLat: response.data[0].lat, EventLon: response.data[0].lon,
                    EventTime: response.data[0].time})
                setEvent3({...event3, 
                    EventName: response.data[1].name, EventType: response.data[1].type, 
                    EventPhone: response.data[1].phone, EventCategory: response.data[1].category, 
                    EventDate: response.data[1].date, EventUniversity: response.data[1].university, 
                    EventDesc: response.data[1].desc, EventLat: response.data[1].lat, EventLon: response.data[1].lon,
                    EventTime: response.data[1].time})
            }
        });

        axios.post("Admins/getUniversity", getUser).then(response => {
            if (response.data == null) {
                // routeChange();
                console.log("ERROR")
            }else {
                console.log(getUser)
                console.log(response.data)
                getUniversity.university = response.data
                axios.post("Events/findEventsPrivate", getUniversity).then(response1 => {
                    if (response1.data == null) {
                        // routeChange();
                        console.log("ERROR")
                    }else {
                        console.log(response1.data)
                        setEvent2({...event2, 
                            EventName: response1.data[0].name, EventType: response1.data[0].type, 
                            EventPhone: response1.data[0].phone, EventCategory: response1.data[0].category, 
                            EventDate: response1.data[0].date, EventUniversity: response1.data[0].university, 
                            EventDesc: response1.data[0].desc, EventLat: response1.data[0].lat, EventLon: response1.data[0].lon,
                            EventTime: response1.data[0].time})
                        setEvent4({...event4, 
                            EventName: response1.data[1].name, EventType: response1.data[1].type, 
                            EventPhone: response1.data[1].phone, EventCategory: response1.data[1].category, 
                            EventDate: response1.data[1].date, EventUniversity: response1.data[1].university, 
                            EventDesc: response1.data[1].desc, EventLat: response1.data[1].lat, EventLon: response1.data[1].lon,
                            EventTime: response1.data[1].time})  
                    }
                });
            }
        });


        console.log(event1)
    }, [])

    const routeChange  = () => {
        history.push("./mainPage")
    }

    const addCommentRouteEvent1 = () => {
        sessionStorage.setItem("event", event1.EventName)
        history.push("./addComment")
    }

    const addCommentRouteEvent2 = () => {
        sessionStorage.setItem("event", event1.EventName)
        history.push("./addComment")
    }

    const addCommentRouteEvent3 = () => {
        sessionStorage.setItem("event", event1.EventName)
        history.push("./addComment")
    }

    const addCommentRouteEvent4 = () => {
        sessionStorage.setItem("event", event1.EventName)
        history.push("./addComment")
    }

    const addCommentRouteEvent5 = () => {
        sessionStorage.setItem("event", event1.EventName)
        history.push("./addComment")
    }

    return (
        <form className="ViewEvents">
            <div className="form-inner">    
                <h2> Viewing Events</h2>
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
                        <h5>Lat: <span>{event1.EventLat}</span></h5>
                        <h5>Long: <span>{event1.EventLon}</span></h5>                        
                        <h5>Event Time: <span>{event1.EventTime}</span></h5>
                    </div>

                    <input type="button" value="ADD COMMENT" onClick={addCommentRouteEvent1}/>
                    <input type="button" value="VIEW COMMENTS"/>
                    <input type="button" value="MODIFY COMMENTS"/>


                    <div className="form-group">
                        <h4>Event 2: </h4>
                        <h5>Event Name: <span>{event2.EventName}</span></h5>
                        <h5>Event Type: <span>{event2.EventType}</span></h5>
                        <h5>Event Phone: <span>{event2.EventPhone}</span></h5>
                        <h5>Event Category: <span>{event2.EventCategory}</span></h5>
                        <h5>Event Date: <span>{event2.EventDate}</span></h5>
                        <h5>Event University: <span>{event2.EventUniversity}</span></h5>
                        <h5>Event Description: <span>{event2.EventDesc}</span></h5>
                        <h5>Lat: <span>{event2.EventLat}</span></h5>
                        <h5>Long: <span>{event2.EventLon}</span></h5>                        
                        <h5>Event Time: <span>{event2.EventTime}</span></h5>
                    </div>

                    <input type="button" value="ADD COMMENT" onClick={addCommentRouteEvent2}/>
                    <input type="button" value="VIEW COMMENTS"/>
                    <input type="button" value="MODIFY COMMENTS"/>

                    <div className="form-group">
                        <h4>Event 3: </h4>
                        <h5>Event Name: <span>{event3.EventName}</span></h5>
                        <h5>Event Type: <span>{event3.EventType}</span></h5>
                        <h5>Event Phone: <span>{event3.EventPhone}</span></h5>
                        <h5>Event Category: <span>{event3.EventCategory}</span></h5>
                        <h5>Event Date: <span>{event3.EventDate}</span></h5>
                        <h5>Event University: <span>{event3.EventUniversity}</span></h5>
                        <h5>Event Description: <span>{event3.EventDesc}</span></h5>
                        <h5>Lat: <span>{event3.EventLat}</span></h5>
                        <h5>Long: <span>{event3.EventLon}</span></h5>                        
                        <h5>Event Time: <span>{event3.EventTime}</span></h5>
                    </div>

                    <input type="button" value="ADD COMMENT" onClick={addCommentRouteEvent3}/>
                    <input type="button" value="VIEW COMMENTS"/>
                    <input type="button" value="MODIFY COMMENTS"/>
                    
                    <div className="form-group">
                        <h4>Event 4: </h4>
                        <h5>Event Name: <span>{event4.EventName}</span></h5>
                        <h5>Event Type: <span>{event4.EventType}</span></h5>
                        <h5>Event Phone: <span>{event4.EventPhone}</span></h5>
                        <h5>Event Category: <span>{event4.EventCategory}</span></h5>
                        <h5>Event Date: <span>{event4.EventDate}</span></h5>
                        <h5>Event University: <span>{event4.EventUniversity}</span></h5>
                        <h5>Event Description: <span>{event4.EventDesc}</span></h5>
                        <h5>Lat: <span>{event4.EventLat}</span></h5>
                        <h5>Long: <span>{event4.EventLon}</span></h5>                        
                        <h5>Event Time: <span>{event4.EventTime}</span></h5>
                    </div>
                    
                    <input type="button" value="ADD COMMENT" onClick={addCommentRouteEvent4}/>
                    <input type="button" value="VIEW COMMENTS"/>
                    <input type="button" value="MODIFY COMMENTS"/>
                    
                    <div className="form-group">
                        <h4>Event 5: </h4>
                        <h5>Event Name: <span>{event5.EventName}</span></h5>
                        <h5>Event Type: <span>{event5.EventType}</span></h5>
                        <h5>Event Phone: <span>{event5.EventPhone}</span></h5>
                        <h5>Event Category: <span>{event5.EventCategory}</span></h5>
                        <h5>Event Date: <span>{event5.EventDate}</span></h5>
                        <h5>Event University: <span>{event5.EventUniversity}</span></h5>
                        <h5>Event Description: <span>{event5.EventDesc}</span></h5>
                        <h5>Lat: <span>{event5.EventLat}</span></h5>
                        <h5>Long: <span>{event5.EventLon}</span></h5>
                        <h5>Event Time: <span>{event5.EventTime}</span></h5>
                    </div>

                    <input type="button" value="ADD COMMENT" onClick={addCommentRouteEvent5}/>
                    <input type="button" value="VIEW COMMENTS"/>
                    <input type="button" value="MODIFY COMMENTS"/>

                </div>

                <input type="button" value="RETURN" onClick={routeChange}/>
            </div>
        </form>
    )

}

export default viewEvents