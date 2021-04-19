const router = require('express').Router();
const Events = require('../models/Event');


router.post('/createEvents', (req, res) => {
    const newEvents = new Events({
        desc: req.body.EventsDesc,
        time: req.body.EventsTime,
        event_id: req.body.EventsID,
        lat: req.body.EventsLat,
        lon: req.body.EventsLon,
        phone: req.body.EventsPhone,
        email: req.body.EventsEmail,
        admin: req.body.EventsAdmin,
        rso: req.body.EventsRSO,
        commentArray: req.body.EventsCommentArray,
        category: req.body.EventsCategory,
        eventType: req.body.EventsEventType
    });
    newEvents
    .save()
    .then(Events => res.status(200).json(Events))
    .catch(err => res.status(400).json(err));
});


// Any of these bellow probably don't work
// Needs to find all not one

// findEventTime
router.get('/findEventsTime', (req, res) => {
    Events.findOne({time: req.body.time})
    .then(Events => {
        if (Events) {
            return Events
        }
        else
        {
            return res.status(200).json({error: "Event does not exist"})
        }
    })
});

// findEventLocation
router.get('/findEventsLocation', (req, res) => {
    Events.findOne({location: req.body.location})
    .then(Events => {
        if (Events) {
            return Events
        }
        else
        {
            return res.status(200).json({error: "Event does not exist"})
        }
    })
});


// findEventRSO
router.get('/findEventsRSO', (req, res) => {
    Events.findOne({rso: req.body.rso})
    .then(Events => {
        if (Events) {
            return Events
        }
        else
        {
            return res.status(200).json({error: "Event does not exist"})
        }
    })
});

// findEventLocation
router.get('/findEventsLocation', (req, res) => {
    Events.findOne({location: req.body.location})
    .then(Events => {
        if (Events) {
            return Events
        }
        else
        {
            return res.status(200).json({error: "Event does not exist"})
        }
    })
});

module.exports = router;
