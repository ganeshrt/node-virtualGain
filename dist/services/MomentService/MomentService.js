"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.momentService = exports.MomentService = void 0;
const momentRepo_1 = require("../../repositories/Moment/momentRepo");
const logger_1 = require("../../lib/logger");
require('dotenv').config();
class MomentService {
    constructor() {
        this.momentRepo = new momentRepo_1.MomentRepository();
        this.createMoment = (title, tags, imgFile) => __awaiter(this, void 0, void 0, function* () {
            logger_1.logger("Moment service - create :::::", JSON.stringify({ title, tags, imgFile }));
            return this.momentRepo.insert(title, tags, imgFile);
        });
        /**
         * getUserrole
         */
        this.getAllMoment = () => __awaiter(this, void 0, void 0, function* () {
            let moments;
            logger_1.logger("moment Service -get all::::: ", {});
            try {
                moments = yield this.momentRepo.getAll();
                // throw new Error({ message: 'email or password incorrect', status: 404 } as any);
            }
            catch (e) {
                console.log("err", e);
                throw new Error(e);
            }
            return moments;
        });
        this.updateMoment = (id, data) => __awaiter(this, void 0, void 0, function* () {
            logger_1.logger("Moment Service Update moment::::: ");
            try {
                const moment = yield this.momentRepo.update(id, data);
                if (moment) {
                    // Generate an access token
                    return ({
                        data: moment
                    });
                }
                else {
                    throw new Error({ message: 'moment not found', status: 404 });
                }
            }
            catch (e) {
                console.log("err", e);
                throw new Error(e);
            }
        });
        this.deleteMoment = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.momentRepo.deleteOne(id);
                // throw new Error({ message: 'email or password incorrect', status: 404 } as any);
            }
            catch (e) {
                console.log("err", e);
                throw new Error(e);
            }
        });
    }
    static getInstance() {
        if (!MomentService.instance) {
            MomentService.instance = new MomentService();
        }
        return MomentService.instance;
    }
}
exports.MomentService = MomentService;
exports.momentService = MomentService.getInstance();
//# sourceMappingURL=MomentService.js.map