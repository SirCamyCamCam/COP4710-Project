const router = require('express').Router();
const RSO = require('../models/RSO');


router.post('/createRSO', (req, res) => {
    const newRSO = new RSO({
        studentArray: req.body.RSOStudentArrray,
        name: req.body.RSOName,
        rsoAdmin: req.body.RSOAdmin,
        rsoUniversity: req.body.RSOUniversity
    });
    newRSO
    .save()
    .then(RSO => res.status(200).json(RSO))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
