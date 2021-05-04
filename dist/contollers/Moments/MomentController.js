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
const MomentService_1 = require("../../services/MomentService/MomentService");
class MomentController {
    constructor() {
        // constructor() {
        this.createMoment = ({ params, headers, body }) => __awaiter(this, void 0, void 0, function* () {
            const { title, tags, imgFile } = body;
            console.log("body::", body);
            return yield MomentService_1.momentService.createMoment(title, tags, imgFile);
        });
        this.getAllMoment = ({ params, headers, body }) => __awaiter(this, void 0, void 0, function* () {
            return yield MomentService_1.momentService.getAllMoment();
        });
        this.updateMoment = ({ params, headers, body }) => __awaiter(this, void 0, void 0, function* () {
            const { id } = params;
            return yield MomentService_1.momentService.updateMoment(id, body);
        });
        this.deleteMoment = ({ params, headers, body }) => __awaiter(this, void 0, void 0, function* () {
            const { id } = params;
            return yield MomentService_1.momentService.deleteMoment(id);
        });
        // public createUser = async ({ params, headers, body }: any) => {
        //     const { email, password, name, city } = body;
        //     logger("User Controller -Create User :::::::::", body)
        //     return await userService.createUser(email, password, name, city);
        // }
        // public getUserToken = async ({ params, headers, body }: any) => {
        //     const { email, password } = params;
        //     logger("User Controller - get User ::::", JSON.stringify(params))
        //     console.log(email, password)
        //     return await userService.getUserToken(email, password);
        // }
        // public getAllUsers = async ({ params, headers, body }: any) => {
        //     const { email, password } = params;
        //     logger("User Controller - getAllUsers ::::", JSON.stringify(params))
        //     return await userService.getAllUsers();
        // }
    }
    // }
    /**
     * static getInstance
     */
    static getInstance() {
        if (!MomentController.instance) {
            MomentController.instance = new MomentController();
        }
        return MomentController.instance;
    }
}
exports.default = MomentController.getInstance();
//# sourceMappingURL=MomentController.js.map