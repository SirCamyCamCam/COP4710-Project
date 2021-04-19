const router = require('express').Router();
const Events = require('../models/Events');


router.post('/createEvents', (req, res) => {
    const newEvents = new Events({
        desc: req.body.EventsDesc,
        time: req.body.EventsTime,
        event_id: req.body.EventsID,
        location: req.body.EventsLocation,
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

/*
// isFull api
router.post('/isFull', (req, res) => {
    Garage.findOne({
        name: req.body.garageName
    })
    .then(garage => {
        if (garage) {
            var spotsArray = garage.spotsArray;
            for (i = 0; i < spotsArray.length; i++) {
                if (spotsArray[i].isOpen === true) {
                    const openSpot = {spot: spotsArray[i].spot};
                    return res.status(200).json({isFull: false, openSpotNumber: spotsArray[i].spot});
                }
            }
            return res.status(200).json({isFull: true});
        }
        else {
            return res.status(200).json({error: "No garage found"});
        }
    })
});


// isPark api 
router.post('/parkSpot', (req, res) => {
    Garage.findOne({
        name: req.body.garageName
    })
    .then(garage => {
        if (garage) {
            // update provided level and spot number in this garage's array
            var spotNumber = req.body.spotNumber;

            if (spotNumber <= 0) {
                return res.status(200).json({err: "Invalid spot"});
            }
            if (!garage.spotsArray[spotNumber - 1].isOpen) {
                return res.status(200).json({err: "Can't park here"});
            }    
            garage.spotsArray[spotNumber - 1].isOpen = false;
            garage.save()
            .then(garage => res.status(200).json({success: "Spot closed!"}))
            .catch(err => res.status(200).json(err));                
            
        }
        else {
            return res.status(200).json({err: "No garage found"});
        }
    })
})

// leaveSpot api
router.post('/leaveSpot', (req, res) => {
    Garage.findOne({
        name: req.body.garageName
    })
    .then(garage => {
        if (garage) {
            // update provided level and spot number in this garage's array
            var spotNumber = req.body.spotNumber;

            if (spotNumber <= 0) {
                return res.status(200).json({err: "Invalid spot"});
            }    
            garage.spotsArray[spotNumber - 1].isOpen = true;
            garage.save()
            .then(garage => res.status(200).json({success: "Spot opened!"}))
            .catch(err => res.status(200).json(err));                
            
        }
        else {
            return res.status(200).json({err: "No garage found"});
        }
    })
})

// findSpot api
router.get('/findSpot', (req, res) => {
    const long=req.body.lng;
    const lat=req.body.lat;
    Garage.find({location:{         
            $near: {
                $geometry: {
                        type: "Point",
                        coordinates: [long, lat]}             
                    }
                }}, function (error, result){          
                    if (error) {
                        res.status(200).json(error)
                    }
                    else {
                        res.status(200).json(result);
                    }
                });
});

// openSpots api
router.get('/openSpots', (req, res) => {
    const garageName = req.body.garageName;
    Garage.findOne({name: garageName})
    .then(garage => {
        if (garage) {
            openSpots = 0;
            var spotsArray = garage.spotsArray;
            for (i = 0; i < spotsArray.length; i++) {
                if (spotsArray[i].isOpen === true) {
                    openSpots++;
                }
            }
            var jsonGarage = {
                numOpenSpots: openSpots,
                garageSpots: spotsArray
            };
            return res.status(200).json(jsonGarage);
        }
        else {
            return res.status(200).json({err: "No garage found"});
        }
    })
    .catch(err => res.status(200).json(err))
})
*/
module.exports = router;
