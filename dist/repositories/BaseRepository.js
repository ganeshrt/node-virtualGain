"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const logger_1 = require("./../lib/logger");
const userModel_1 = __importDefault(require("./User/userModel"));
class BaseRepository {
    /**
     * insert
     */
    insert(email, password, name, city) {
        logger_1.logger("BaseRepository - insert ", {});
        const user = new userModel_1.default({ email, password, name, city });
        return user.save().then(res => {
            return res;
        }).catch(err => {
            console.log("failed to insert.", err);
            return err;
        });
    }
    /**
     * name
     */
    getOne(email, password) {
        // const user = new User({ name, password });
        logger_1.logger("BaseRepository - getOne ", {});
        return userModel_1.default.findOne({ email, password }).then(res => {
            console.log("user exist...!");
            return res;
        }).catch(err => {
            console.log("user not exist..");
            return err;
        });
    }
    getAll() {
        // const user = new User({ name, password });
        logger_1.logger("BaseRepository - getAllUsers ", {});
        return userModel_1.default.find().then(res => {
            console.log("user exist...!");
            return res;
        }).catch(err => {
            console.log("user not exist..");
            return err;
        });
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=BaseRepository.js.map