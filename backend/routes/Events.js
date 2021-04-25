const router = require('express').Router();
const Events = require('../models/Event');
const RSOs = require('../models/RSO')

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

    Events.findOne({time: req.body.EventTime, lat: req.body.lat, lon: req.body.lon})
    .then(events => {
        if (events)
        {
            return res.status(200).json({error: "Event time and location conflict"})
        }
    })

    const newEvents = new Events({
        name: req.body.EventsName,
        type: req.body.EventType,
        email: req.body.EventEmail,
        phone: req.body.EventPhone,
        desc: req.body.EventDesc,
        time: req.body.EventTime,
        lat: req.body.EventLat,
        lon: req.body.EventLon,
        category: req.body.EventCategory,
        rso: req.body.EventRSO
    });
    newEvents
    .save()
    .then(Events => res.status(200).json("Created Event"))
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
