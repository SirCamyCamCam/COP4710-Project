const router = require('express').Router();
const Admin = require('../models/Admin');


router.post('/createAdmin', (req, res) => {
    // check if this email already exists
    Admin.findOne({email: req.body.AdminEmail})
    .then(admin => {
        if (admin) {
            return res.status(200).json({error: "email already exists"})
        }
        else {
            const newAdmin = new Admin({
                email: req.body.AdminEmail,
                phone: req.body.AdminNumber,
                password: req.body.AdminPassword,
            });
            newAdmin
            .save()
            .then(Admin => res.status(200).json(Admin))
            .catch(err => res.status(400).json(err));
        }
    })
});


// findAdmin
router.post('/findAdmin', (req, res) => {
    Admin.findOne({email: req.body.AdminEmail})
    .then(admin => {
        if (admin) {
            return res.status(200).json(admin)
        }
        else
        {
            return res.status(200).json({error: "email does not exist"})
        }
    })
});

module.exports = router;
