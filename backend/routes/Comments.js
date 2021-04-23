const router = require('express').Router();
const Comment = require('../models/Comment');


router.post('/createComment', (req, res) => {
    const newComment = new Comment({
        text: req.body.CommentText,
        rating: req.body.CommentRating,
        time: req.body.CommentTime,
        student: req.body.CommentStudent
    });
    newComment
    .save()
    .then(Comment => res.status(200).json(Comment))
    .catch(err => res.status(400).json(err));
});

router.post('/displayComment', (req, res) => {
    Comment.find({student: req.body.CommentStudent})
    .then(comment => {
        if (comment) {
            return res.status(200).json(comment)
        }
        else
        {
            return res.status(200).json({error: "email or Password does not match"})
        }
    })
});

module.exports = router;
