import mongoose from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator');

const schema = new mongoose.Schema({
    name: { type: String, required: true, },
    email: { type: String, required: true, unique: true, dropDups: false },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    dob: { type: String, required: true },
});
schema.plugin(uniqueValidator);
const userSchema = mongoose.model('user', schema);
export default userSchema;