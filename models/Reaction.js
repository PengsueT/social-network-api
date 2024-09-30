const { Schema, Types } = require('mongoose');
const dayjs = require('dayjs');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(), // Default value set to a new ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dayjs(timestamp).format('MMM D, YYYY'), // Getter method to format the timestamp
    },
    },
    {
    toJSON: {
        getters: true,
    },
    id: false, // Prevents the creation of a virtual id field
});

module.exports = reactionSchema;