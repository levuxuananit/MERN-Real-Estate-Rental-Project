const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    zalo: {
        type: String,
    },
    fbUrl: {
        type: String,
    },
    avatar: {
        type: Buffer, // BLOB tương đương với Buffer trong MongoDB
    },
}, {
    timestamps: true // tự động thêm createdAt và updatedAt
});


const User = mongoose.model('User', userSchema);

module.exports = User;
