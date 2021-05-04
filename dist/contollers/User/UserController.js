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
const UserService_1 = require("./../../services/UserService/UserService");
const logger_1 = require("../../lib/logger");
class UserController {
    constructor() {
        // constructor() {
        /**
         * createUser
         */
        this.createUser = ({ params, headers, body }) => __awaiter(this, void 0, void 0, function* () {
            const { email, password, name, city } = body;
            logger_1.logger("User Controller -Create User :::::::::", body);
            console.log(body, params);
            return yield UserService_1.userService.createUser(email, password, name, city);
        });
        this.getUserToken = ({ params, headers, body }) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = body;
            logger_1.logger("User Controller - get User ::::", JSON.stringify(body));
            console.log(email, password);
            return yield UserService_1.userService.getUserToken(email, password);
        });
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
        if (!UserController.instance) {
            UserController.instance = new UserController();
        }
        return UserController.instance;
    }
}
exports.default = UserController.getInstance();
//# sourceMappingURL=UserController.js.map