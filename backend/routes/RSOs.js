const router = require('express').Router();
const RSO = require('../models/RSO');

router.post('/createRSO', (req, res) => {
    const newRSO = new RSO({
        studentArray: req.body.RSOStudentArrray,
        name: req.body.RSOName,
        rsoAdmin: req.body.RSOAdmin,
        university: req.body.RSOUniversity
    });
    newRSO
    .save()
    .then(RSO => res.status(200).json(RSO))
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
            return res.status(200).json({error: "university does not exist"})
        }
    })
});

module.exports = router;
