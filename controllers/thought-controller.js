// Purpose: to control the thoughts and reactions of the user


const Thought = require('../models/Thought'); 
const User = require('../models/User'); 


module.exports = { 
   async getThoughts(req, res) { // async function to get all thoughts, async meaning that the function will return a promise, a promise
    // is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value
        try {
            const thoughts = await Thought.find(); // find all thoughts

            res.json(thoughts); // return all thoughts
        } catch (err) { 
            res.status(400).json(err); 
        }
    },
   async getThoughtById(req, res) { 
        try {
            const thought = await Thought.findById(req.params.id);

            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(thought);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { username: req.body.username },
                { $push: { thoughts: thought._id } },
                { new: true }
            );

            res.json(thought);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    async updateThought(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.id,  req.body, {
                new: true,
                runValidators: true,
            });
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(thought);
        }
        catch (err) {
            res.status(400).json(err);
        }
    },
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findByIdAndDelete(req.params.id);

            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(thought);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    async addReaction(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $push: { reactions: req.body } }, { new: true, runValidators: true });      
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(thought);
        }   
        catch (err) {
            res.status(400).json(err);
        }
    },
   async removeReaction(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { new: true });  
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(thought);
        }
        catch (err) {
            res.status(400).json(err);
        }
    },
};