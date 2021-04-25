const router = require('express').Router();
const RSO = require('../models/RSO');
const port = 3000
const mongoose = require('mongoose');

router.post('/createRSO', (req, res) => {
    if (req.body.email1.length == 0)
    {
        return res.status(200).json({error: "Not Enough students to create RSO!"})
    }
    if (req.body.email2.length == 0)
    {
        return res.status(200).json({error: "Not Enough students to create RSO!"})
    }
    if (req.body.email3.length == 0)
    {
        return res.status(200).json({error: "Not Enough students to create RSO!"})
    }
    if (req.body.email4.length == 0)
    {
        return res.status(200).json({error: "Not Enough students to create RSO!"})
    }
    if (req.body.email5.length == 0)
    {
        return res.status(200).json({error: "Not Enough students to create RSO!"})
    }

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
        university: req.body.RSOUniversity,
        active: true
    });
    newRSO
    .save()
    .then(RSO => res.status(200).json("RSO created"))
    .catch(err => res.status(400).json(err));
});

// findRSO
router.post('/findRSO', (req, res) => {
    RSO.findOne({name: req.body.RSOName})
    .then(rso => {
        if (rso) {
            return res.status(200).json(rso)
        }
        else
        {
            return res.status(200).json({error: "rso does not exist"})
        }
    })
});

// addAStudent
router.post('/addAStudent', (req, res) => {
    RSO.findOne({
        name: req.body.RSOName
    })
    .then(rso => {
        if (rso) 
        {
            rso.studentArray.push({
                student: req.body.email
                });

            rso.save(function(err)
            {
                err != null ? console.log(err) : console.log('rso updated')
            });

            if (rso.studentArray.length >= 5)
            {
                rso.active = true;
                return res.status(200).json(true);
            }
            else
            {
                rso.active = false;
                return res.status(200).json(false);
            }
        }
        else
        {
            return res.status(200).json({error: "rso does not exist"});
        }
    })
});

// deleteStudent
router.post('/deleteStudent', (req, res) => {
    RSO.findOne({
        name: req.body.RSOName
    })
    .then(rso => {
        if (rso) 
        {
            if (rso.rsoAdmin == req.body.email)
            {
                return res.status(200).json({error: "Admin cannot leave RSO!"})
            }
            
            var i;
            var length = rso.studentArray.length;
            for (i = 0; i < length; i++)
            {
                if (rso.studentArray[i].student == req.body.email)
                {
                    RSO.updateOne({ _id: rso._id }, { "$pull": { "studentArray": { "student": req.body.email } }}, { safe: true, multi:true }, function(err, obj) {});

                    if (length <= 5)
                    {
                        RSO.updateOne({ _id: rso._id },{ "$set":{"active": false}}, {upsert:true});
                        return res.status(200).json(false);
                    }
                    else 
                    {
                        RSO.updateOne({ _id: rso._id },{ "$set":{"active": true}}, {upsert:true});
                        return res.status(200).json(true);
                    }
                }
            }
        }
        else
        {
            return res.status(200).json({error: "Rso does not exist"})
        }
    })
});

module.exports = router;
