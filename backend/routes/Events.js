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
    Events.find({type: "Public"})
    .then(publicEvents => {
        if (publicEvents)
        {
            publicEvents.forEach(element => {
            eventList.push(element);
            });
        }
        else{
            return res.status(200).json({error: "Public does not exist"});
        }
    });
    Admins.find({email: req.body.email})
    .then(student => {
        if (student)
        {
            RSOs.find({studentArray: {student: req.body.email}})
            .then(rsos => {
                if (rsos)
                {
                    Events.find({rso: rsos.name})
                    .then(rsoEvents => {
                        if (rsoEvents)
                        {
                            rsoEvents.forEach(element => {
                                eventList.push(element);
                            });
                        }
                    });
                }
            });

            Events.find({university: student.university})
            .then(privateEvents => {
                if (privateEvents)
                {
                    privateEvents.forEach(element => {
                        eventList.push(element);
                    });
                }
            });

            return res.status(200).json(eventList);
        }
        else
        {
            return res.status(200).json({error: "Student does not exist"});
        }
    })
})

module.exports = router;
