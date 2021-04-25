const router = require('express').Router();
const RSO = require('../models/RSO');
const port = 3000

router.post('/createRSO', (req, res) => {
    const RSOStudentArrray = [
        {student: req.body.email1},
        {student: req.body.email2},
        {student: req.body.email3},
        {student: req.body.email4},
        {student: req.body.email5}
    ];
    
    const newRSO = new RSO({
        studentArray: RSOStudentArrray,
        name: req.body.RSOName,
        rsoAdmin: req.body.email1,
        university: req.body.RSOUniversity
    });
    newRSO
    .save()
    .then(RSO => res.status(200).json("RSO created"))
    .catch(err => res.status(400).json(err));
});

// findUniversity
router.post('/findUniversity', (req, res) => {
    RSO.findOne({university: req.body.RSOUniversity})
    .then(rso => {
        if (rso) {
            return res.status(200).json(rso)
        }
        else
        {
            return res.status(200).json({error: "university does not exist"})
        }
    })
});

module.exports = router;
