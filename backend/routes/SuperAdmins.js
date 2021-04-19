const router = require('express').Router();
const SuperAdmin = require('../models/SuperAdmin');


router.post('/createSuperAdmin', (req, res) => {
    SuperAdmin.findOne({email: req.body.email})
    .then(SuperAdmin => {
        if (SuperAdmin) {
            return res.status(200).json({error: "email already exists"})
        }
        else {
            const newSuperAdmin = new SuperAdmin({
                email: req.body.SuperAdminEmail,
                phone: req.body.SuperAdminPhone,
                password: req.body.SuperAdminPassword
            });
            newSuperAdmin
            .save()
            .then(SuperAdmin => res.status(200).json(SuperAdmin))
            .catch(err => res.status(400).json(err));
        }
    })
});

// findSuperAdmin
router.get('/findSuperAdmin', (req, res) => {
    SuperAdmin.findOne({email: req.body.email})
    .then(SuperAdmin => {
        if (SuperAdmin) {
            return SuperAdmin
        }
        else
        {
            return res.status(200).json({error: "email does not exist"})
        }
    })
});

module.exports = router;
