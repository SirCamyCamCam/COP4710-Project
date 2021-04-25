const router = require('express').Router();
const Events = require('../models/Event');


router.post('/createEvents', (req, res) => {
    const newEvents = new Events({
        name: req.body.EventsName,
        type: req.body.EventType,
        email: req.body.EventsEmail,
        data: req.body.Eventsdata,
        phone: req.body.EventsPhone,
        desc: req.body.EventsDesc,
        time: req.body.EventsTime,
        lat: req.body.EventsLat,
        lon: req.body.EventsLon,
        category: req.body.Eventcategory
    });
    newEvents
    .save()
    .then(Events => res.status(200).json(Events))
    .catch(err => res.status(400).json(err));
});

// findEventTime
router.post('/findEventsTime', (req, res) => {
    Events.find({type: req.body.EventType})
    .then(events => {
        if (events) {
            return events
        }
        else
        {
            return res.status(200).json({error: "Event does not exist"})
        }
    })
})

module.exports = router;
