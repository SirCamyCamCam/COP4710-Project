import Events from '../models/Events.js';


export const getEvent = ('/', (req,res) =>{
    try {
        const Events = Events.find();

        res.status(200).json(Events);
    } catch (error){
        res.status(404).json({message: error.message});
    }

});