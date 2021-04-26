const router = require('express').Router();
const Comment = require('../models/Comment');
const port = 3000;

router.post('/createComment', (req, res) => {
    const newComment = new Comment({
        commentEvent: req.body.CommentEventName,
        text: req.body.CommentText,
        student: req.body.CommentStudent
    });
    newComment
    .save()
    .then(Comment => res.status(200).json("Created Comment"))
    .catch(err => res.status(400).json(err));
});

router.post('/getComments', (req, res) => {
    Comment.find({commentEvent: req.body.CommentEventName})
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

router.post('/deleteComment', (req, res) => {
    var query = {date: req.body.date, time: req.body.time}

    Comment.deleteOne(query, function(err, obj)
    {
        if (err) throw err;
        return res.status(200).json("Comment Deleted");
    });
})

module.exports = router;
