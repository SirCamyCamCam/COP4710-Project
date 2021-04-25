const router = require('express').Router();
const Admin = require('../models/Admin');
const port = 3000

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
                accountType: req.body.AdminType,
                university: req.body.AdminUniversity
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
            return res.status(200).json(admin.accountType)
        }
        else
        {
            return res.status(200).json({error: "email or Password does not match"})
        }
    })
});

// Add to RSO
router.post('/addRSO', (req, res) => {
    Admin.findOne({email: req.body.AdminEmail})
    .then(admin => {
        if (admin) {
            admin.rsos.push({
                rso: req.body.AdminRSO
                });

            rso.save(function(err)
            {
                err != null ? console.log(err) : console.log('user updated')
            });
        }
        else
        {
            return res.status(200).json({error: "user does not exist"})
        }
    })
})

// Remove RSO
router.post('/removeRSO', (req, res) => {
    Admin.findOne({email: req.body.AdminEmail})
    .then(admin => {
        if (admin)
        {
            var i;
            var length = admin.rsos.length;
            var removed = false
            for (i = 0; i < length; i++)
            {
                if (admin.rsos[i].student == req.body.AdminRSO)
                {
                    RSO.updateOne({ _id: rso._id }, { "$pull": { "rsos": { "rso": req.body.AdminRSO } }}, { safe: true, multi:true }, function(err, obj) {});
                    removed = true
                }
            }

            if (removed == true)
            {
                return res.status(200).json("rso removed")
            }
            else
            {
                return res.status(200).json({error: "failed to find rso"})
            }
        }
    })
})

module.exports = router;
