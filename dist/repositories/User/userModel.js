"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const uniqueValidator = require('mongoose-unique-validator');
const schema = new mongoose_1.default.Schema({
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
const userSchema = mongoose_1.default.model('user', schema);
exports.default = userSchema;
//# sourceMappingURL=userModel.js.map