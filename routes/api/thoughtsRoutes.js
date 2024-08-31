const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtsController.js');

// GET all thoughts and Create thoughts
router.route('/').get(getThoughts).post(createThought);

// GET, DELETE, and UPDATE a single thought by ID
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// POST and DELETE for adding and removing reaction to/from a specific thought
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;