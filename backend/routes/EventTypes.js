const router = require('express').Router();
const EventsType = require('../models/EventType');


router.post('/createEventsType', (req, res) => {
    const newEventsType = new EventsType({
        privateArray: req.body.EventsTypePrivate,
        publicArray: req.body.EventsTypePublic,
        rsoArray: req.body.EventsTypeRSO
    });
    newEventsType
    .save()
    .then(EventsType => res.status(200).json(EventsType))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
