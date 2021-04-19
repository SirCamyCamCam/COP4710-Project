const router = require('express').Router();
const University = require('../models/University');


router.post('/createUniversity', (req, res) => {
    const newUniversity = new University({
        superAdmin: req.body.UniversitySuperAdmin,
        lat: req.body.UniversityLat,
        lon: req.body.UniversityLon,
        desc: req.body.UniversityDesc,
        name: req.body.UniversityName
    });
    newUniversity
    .save()
    .then(University => res.status(200).json(University))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
