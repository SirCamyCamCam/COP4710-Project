import PostEvents from '../models/PostEvents.js';


export const getEvent = ('/', (req,res) =>{
    try {
        const PostEvents = PostEvents.find();

        res.status(200).json(PostEvents);
    } catch (error){
        res.status(404).json({message: error.message});
    }

});