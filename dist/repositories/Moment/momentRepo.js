"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MomentRepository = void 0;
const logger_1 = require("./../../lib/logger");
const momentModel_1 = __importDefault(require("./momentModel"));
class MomentRepository {
    /**
     * insert
     */
    insert(title, tags, imgFile) {
        logger_1.logger("BaseRepository - insert ", {});
        const moment = new momentModel_1.default({ title, tags, imgFile });
        return moment.save().then((res) => {
            return res;
        }).catch((err) => {
            console.log("failed to insert.", err);
            return err;
        });
    }
    /**
     * name
     */
    deleteOne(id) {
        // const Moment = new Moment({ name, password });
        logger_1.logger("BaseRepository - getOne ", {});
        return momentModel_1.default.remove({ _id: id }).then(res => {
            console.log("Moment exist...!");
            return res;
        }).catch(err => {
            console.log("Moment not exist..");
            return err;
        });
    }
    getAll() {
        // const Moment = new Moment({ name, password });
        logger_1.logger("BaseRepository - getAllMoments ", {});
        return momentModel_1.default.find({}).then(res => {
            console.log("Moment exist...!", res);
            return res;
        }).catch(err => {
            console.log("Moment not exist..");
            return err;
        });
    }
    update(id, obj) {
        // const Moment = new Moment({ name, password });
        logger_1.logger("BaseRepository - getAllMoments ", {});
        return momentModel_1.default.updateOne({ _id: id }, Object.assign({}, obj)).then(res => {
            console.log("Moment exist...!");
            return res;
        }).catch(err => {
            console.log("Moment not exist..");
            return err;
        });
    }
}
exports.MomentRepository = MomentRepository;
//# sourceMappingURL=momentRepo.js.map