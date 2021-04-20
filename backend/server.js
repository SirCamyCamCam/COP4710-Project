const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// importing routers 
const AdminRouter = require('../backend/routes/Admins');
const CommentRouter = require('../backend/routes/Comments');
const EventRouter = require('../backend/routes/Events');
const EventTypeRouter = require('../backend/routes/EventTypes');
const RSORouter = require('../backend/routes/RSOs');
const StudentRouter = require('../backend/routes/Students');
const SuperAdminRouter = require('../backend/routes/SuperAdmins');
const UniversityRouter = require('../backend/routes/Universitys');

const app = express();

// allows us to parse incoming body requests 
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json());




const database = require("./config/keys").mongoURI;

mongoose.connect(
    database,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
)
.then(() => console.log("Connected to database successfully"))
.catch(err => console.log(err));

/*
Include routes for different endpoints here
    ex) app.use('/users', usersRouter); // userRouter is imported from routes folder
*/
app.use('/Admins', AdminRouter);
app.use('/Comments', CommentRouter);
app.use('/Events', EventRouter);
app.use('/EventTypes', EventTypeRouter);
app.use('/RSOs', RSORouter);
app.use('/Students', StudentRouter);
app.use('/SuperAdmins', SuperAdminRouter);
app.use('/Universitys', UniversityRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));