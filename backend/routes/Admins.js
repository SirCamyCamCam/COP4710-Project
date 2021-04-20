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
                AcoountType: req.body.AdminType
            });
            newAdmin
            .save()
            .then(Admin => res.status(200).json("User registered"))
            .catch(err => res.status(400).json(err));
        }
    })
});

// findAdmin
router.post('/findAdmin', (req, res) => {
    Admin.findOne({email: req.body.AdminEmail, password: req.body.AdminPassword})
    .then(admin => {
        if (admin) {
            return res.status(200).json(admin.AcoountType)
        }
        else
        {
            return res.status(200).json({error: "email or Password does not match"})
        }
    })
});

module.exports = router;
