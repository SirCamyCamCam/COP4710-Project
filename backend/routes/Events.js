const router = require('express').Router();
const Events = require('../models/Event');
const RSOs = require('../models/RSO')
const Admins = require('../models/Admin')
const port = 3000;

router.post('/createEvents', (req, res) => {
    if (req.body.EventType == "rso")
    {
        RSOs.findOne({name: req.body.EventRSO})
        .then(rso => {
            if (rso)
            {
                if (rso.rsoAdmin != req.body.EventEmail)
                {
                    return res.status(200).json({error: "User is not the RSO Admin"})
                }
            }
        })
    }

    Events.findOne({time: req.body.EventTime, lat: req.body.EventLat, lon: req.body.EventLon})
    .then(events => {
        if (events)
        {
            return res.status(200).json({error: "Event time and location conflict"})
        }
    })

    const newEvents = new Events({
        name: req.body.EventName,
        type: req.body.EventType,
        email: req.body.EventEmail,
        date: req.body.EventDate,
        phone: req.body.EventPhone,
        desc: req.body.EventDesc,
        time: req.body.EventTime,
        lat: req.body.EventLat,
        lon: req.body.EventLon,
        category: req.body.EventCategory,
        rso: req.body.EventRSO,
        university: req.body.EventUniversity
    });
    newEvents
    .save()
    .then(Events => res.status(200).json("Created Event"))
    .catch(err => res.status(400).json(err));
});

// findEvents
router.post('/findEvents', (req, res) => {
    var eventList = []
    var universityOfStudent = ""
    var rsoList = []

    // Make sure student exists
    Admins.find({email: req.body.email})
    .then(student => {
        if (student)
        {
            universityOfStudent = student.university
        }
        else
        {
            return res.status(200).json({error: "Student does not exist"});
        }
    });

    // Find and add all public events
    Events.find({type: "Public"})
    .then(publicEvents => {
        if (publicEvents)
        {
            eventList.push(element);
        }
    });

    // Find and add all private events of the univeristy
    Events.find({university: universityOfStudent})
    .then(privateEvents => {
        if (privateEvents)
        {
            eventList.push(element);
        }
    });

    // Find RSOs that student is a member of
    RSOs.find({studentArray: {student: req.body.email}})
    .then(rsos => {
        if (rsos)
        {
            rsoList.push(element)
        }
    });

    // Find and add all events for each rso
    rsoList.forEach(element => {
        Events.find({rso: element.name})
            .then(rsoEvents => {
                if (rsoEvents)
                {
                    rsoEvents.forEach(element => {
                        eventList.push(element);
                    });
                }
            });
    });
            
    // return the list of events
   return res.status(200).json(eventList);
})

module.exports = router;
