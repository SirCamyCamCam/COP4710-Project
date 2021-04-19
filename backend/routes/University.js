const router = require('express').Router();
const University = require('../models/University');


router.post('/createUniversity', (req, res) => {
    const newUniversity = new University({
        superAdmin: req.body.UniversitySuperAdmin,
        location: req.body.UniversityLocation,
        desc: req.body.UniversityDesc,
        name: req.body.UniversityName
    });
    newUniversity
    .save()
    .then(University => res.status(200).json(University))
    .catch(err => res.status(400).json(err));
});

/*
// isFull api
router.post('/isFull', (req, res) => {
    Garage.findOne({
        name: req.body.garageName
    })
    .then(garage => {
        if (garage) {
            var spotsArray = garage.spotsArray;
            for (i = 0; i < spotsArray.length; i++) {
                if (spotsArray[i].isOpen === true) {
                    const openSpot = {spot: spotsArray[i].spot};
                    return res.status(200).json({isFull: false, openSpotNumber: spotsArray[i].spot});
                }
            }
            return res.status(200).json({isFull: true});
        }
        else {
            return res.status(200).json({error: "No garage found"});
        }
    })
});


// isPark api 
router.post('/parkSpot', (req, res) => {
    Garage.findOne({
        name: req.body.garageName
    })
    .then(garage => {
        if (garage) {
            // update provided level and spot number in this garage's array
            var spotNumber = req.body.spotNumber;

            if (spotNumber <= 0) {
                return res.status(200).json({err: "Invalid spot"});
            }
            if (!garage.spotsArray[spotNumber - 1].isOpen) {
                return res.status(200).json({err: "Can't park here"});
            }    
            garage.spotsArray[spotNumber - 1].isOpen = false;
            garage.save()
            .then(garage => res.status(200).json({success: "Spot closed!"}))
            .catch(err => res.status(200).json(err));                
            
        }
        else {
            return res.status(200).json({err: "No garage found"});
        }
    })
})

// leaveSpot api
router.post('/leaveSpot', (req, res) => {
    Garage.findOne({
        name: req.body.garageName
    })
    .then(garage => {
        if (garage) {
            // update provided level and spot number in this garage's array
            var spotNumber = req.body.spotNumber;

            if (spotNumber <= 0) {
                return res.status(200).json({err: "Invalid spot"});
            }    
            garage.spotsArray[spotNumber - 1].isOpen = true;
            garage.save()
            .then(garage => res.status(200).json({success: "Spot opened!"}))
            .catch(err => res.status(200).json(err));                
            
        }
        else {
            return res.status(200).json({err: "No garage found"});
        }
    })
})

// findSpot api
router.get('/findSpot', (req, res) => {
    const long=req.body.lng;
    const lat=req.body.lat;
    Garage.find({location:{         
            $near: {
                $geometry: {
                        type: "Point",
                        coordinates: [long, lat]}             
                    }
                }}, function (error, result){          
                    if (error) {
                        res.status(200).json(error)
                    }
                    else {
                        res.status(200).json(result);
                    }
                });
});

// openSpots api
router.get('/openSpots', (req, res) => {
    const garageName = req.body.garageName;
    Garage.findOne({name: garageName})
    .then(garage => {
        if (garage) {
            openSpots = 0;
            var spotsArray = garage.spotsArray;
            for (i = 0; i < spotsArray.length; i++) {
                if (spotsArray[i].isOpen === true) {
                    openSpots++;
                }
            }
            var jsonGarage = {
                numOpenSpots: openSpots,
                garageSpots: spotsArray
            };
            return res.status(200).json(jsonGarage);
        }
        else {
            return res.status(200).json({err: "No garage found"});
        }
    })
    .catch(err => res.status(200).json(err))
})
*/
module.exports = router;
