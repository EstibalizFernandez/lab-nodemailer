const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_ROUND = 10;

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: 'Name is require'
    },
    password:{
        type:String,
        required: 'Name is require'
    },
    status:{
        type: String,
        enun:[pending_confirmation, active],
        default: active
    },
    token: {
        type: String,
    },
    active: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        require: 'mail is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique: true
    }
});

function generateToken() {
    return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
}
