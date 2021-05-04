"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const uniqueValidator = require('mongoose-unique-validator');
const schema = new mongoose_1.default.Schema({
    title: { type: String, required: true, dropDups: false },
    tags: { type: Array, required: true },
    imgFile: { type: String, required: true },
});
schema.plugin(uniqueValidator);
const momentSchema = mongoose_1.default.model('moment', schema);
exports.default = momentSchema;
//# sourceMappingURL=momentModel.js.map