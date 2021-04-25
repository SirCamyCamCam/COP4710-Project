const router = require('express').Router();
const Comment = require('../models/Comment');

router.post('/createComment', (req, res) => {
    const newComment = new Comment({
        commentEvent: req.body.CommentEventName,
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
    Comment.find({commentEvent: req.body.CommentEvent})
    .then(comment => {
        if (comment) {
            return res.status(200).json(comment)
        }
        else
        {
            return res.status(200).json({error: "No Comment Found"})
        }
    })
});

module.exports = router;
