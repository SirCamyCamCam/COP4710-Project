const router = require('express').Router();
const RSO = require('../models/RSO');
const port = 3000

router.post('/createRSO', (req, res) => {
    const RSOStudentArrray = [{
        student1: req.body.email1,
        student2: req.body.email2,
        student3: req.body.email3,
        student4: req.body.email4,
        student5: req.body.email5
    }];
    
    const newRSO = new RSO({
        studentArray: RSOStudentArrray,
        name: req.body.RSOName,
        rsoAdmin: req.body.email1,
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
