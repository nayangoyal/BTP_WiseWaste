const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const UserSchema = new Schema({
    fullName:{
        type: String,
        required: true,
    },
    emailID:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    token:{
        type: String,
    },
    otpVerified:{
        type: Boolean,
        default: false,
    },
    adminVerified:{
        type: Boolean,
        default: false,
    },
    zoneAlloted :{
        type: String,
        default: "na",
    },
    role :{
        type: String,
        default: "user",
    },
    registeredTime: {
        type: Date,
        default: () => new Date(),
    }
});

const OTPSchema = new Schema({
    emailID:{
        type: String,
        unique: true,
    },
    otp:{
        type: String,
    },
    createdAt:{
        type:Date,
    },
    expiresAt:{
        type:Date,
    }
})

const User = mongoose.model('user', UserSchema);
const OTP = mongoose.model('OTP', OTPSchema);
module.exports = {User, OTP};