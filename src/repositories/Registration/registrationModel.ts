import mongoose from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator');

const schema = new mongoose.Schema({
    name: { type: String, required: true, dropDups: false },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    dob: { type: String, required: true },
});
schema.plugin(uniqueValidator);
const registrationSchema = mongoose.model('registration', schema);
export default registrationSchema;