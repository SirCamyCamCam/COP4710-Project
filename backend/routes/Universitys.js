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


// findUniversity
router.post('/findUniversity', (req, res) => {
    University.findOne({name: req.body.UniversityName})
    .then(university => {
        if (university) {
            return res.status(200).json(university)
        }
        else
        {
            return res.status(200).json({error: "email does not exist"})
        }
    })
});

module.exports = router;
