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

router.post('/findEventsPublic', (req, res) => {
    
    // Find and add all public events
    Events.find({type: "Public"})
    .then(publicEvents => {
        if (publicEvents)
        {
            return res.status(200).json(publicEvents);
        }
        else
        {
            res.status(200).json("no public event found");
        }
    });
});


// Find and add all private events of the univeristy
router.post('/findEventsPrivate', (req, res) => {
    // Find and add all public events
    Events.find({university: req.body.email})
    .then(privateEvents => {
        if (privateEvents)
        {
            return res.status(200).json(privateEvents);
        }
        else
        {
            res.status(200).json("no events event found");
        }
    });
});

function nameStudent(email){
    Admins.findOne({email: email})
    .then(student => {
    var name
    if (student)
    {
        name = student.university;
        console.log(name)
    }
    return name
})
}

// Find and add all private events of the univeristy
router.post('/findEventsRso', (req, res) => {
    var name  = []
    RSOs.findOne({studnetArray:{student: req.body.email}})
    .then(student => {
        if (student)
        {
            name = student
        }
    })
    // Find and add all public events
    Events.find({university: name})
        .then(privateEvents => {
        if (privateEvents)
        {
            return res.status(200).json(privateEvents);
        }
        else
        {
            res.status(200).json("no events event found");
        }
    });
});

module.exports = router;
