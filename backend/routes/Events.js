const router = require('express').Router();
const Events = require('../models/Event');


router.post('/createEvents', (req, res) => {
    const newEvents = new Events({
        name: req.body.EventsName,
        type: req.body.EventType,
        email: req.body.EventsEmail,
        phone: req.body.EventsPhone,
        desc: req.body.EventsDesc,
        time: req.body.EventsTime,
        lat: req.body.EventsLat,
        lon: req.body.EventsLon,
        category: req.body.Eventcategory
    });
    newEvents
    .save()
    .then(Events => res.status(200).json("Created Event"))
    .catch(err => res.status(400).json(err));
});


// Any of these bellow probably don't work
// Needs to find all not one

// findEventTime
router.post('/findEventsTime', (req, res) => {
    Events.findOne({time: req.body.EventsTime})
    .then(events => {
        if (events) {
            return events
        }
        else
        {
            return res.status(200).json({error: "Event does not exist"})
        }
    })
});

// findEventRSO
router.post('/findEventsRSO', (req, res) => {
    Events.findOne({rso: req.body.EventsRSO})
    .then(events => {
        if (events) {
            return events
        }
        else
        {
            return res.status(200).json({error: "Event does not exist"})
        }
    })
});

module.exports = router;
