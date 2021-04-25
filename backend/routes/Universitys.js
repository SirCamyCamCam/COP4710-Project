const router = require('express').Router();
const University = require('../models/University');
const port = 3000

router.post('/createUniversity', (req, res) => {
    const newUniversity = new University({
        name: req.body.UniversityName,
        email: req.body.UniversityEmail,
        desc: req.body.UniversityDesc,
        lat: req.body.UniversityLat,
        lon: req.body.UniversityLon,
    });
    newUniversity
    .save()
    .then(University => res.status(200).json(University))
    .catch(err => res.status(400).json(err));
});

// findUniversity
router.post('/findUniversity', (req, res) => {
    University.find({name: req.body.UniversityName})
    .then(university => {
        if (university) {
            return res.status(200).json(university)
        }
        else
        {
            return res.status(200).json({error: "University does not exist"})
        }
    })
});

module.exports = router;
