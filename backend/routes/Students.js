const router = require('express').Router();
const Student = require('../models/Student');


router.post('/createStudent', (req, res) => {
    // check if this email already exists
    Student.findOne({email: req.body.email})
    .then(student => {
        if (student) {
            return res.status(200).json({error: "email already exists"})
        }
        else {
            const newStudent = new Student({
                email: req.body.StudentEmail,
                password: req.body.StudentPassword,
                university: req.body.StudentUniversity,
                student_id: req.body.StudentID,
                phone: req.body.StudentPhone
            });
            newStudent
            .save()
            .then(Student => res.status(200).json(Student))
            .catch(err => res.status(400).json(err));
        }
    })
});


// findStudent
router.post('/findStudent', (req, res) => {
    Student.findOne({email: req.body.StudentEmail})
    .then(student => {
        if (student) {
            return student
        }
        else
        {
            return res.status(200).json({error: "email does not exist"})
        }
    })
});


module.exports = router;
