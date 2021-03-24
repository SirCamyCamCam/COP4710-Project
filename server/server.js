import bodyParser from 'body-parser';
import exporess from 'express';
import Mongoose from 'mongoose';
import cors from 'cors';


// connect to database
mongoose.connect(
    database,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(() => console.log("Connected to database successfully"))
.catch(err => console.log(err));



