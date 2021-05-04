"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authenticate_1 = require("./../../lib/authenticate");
const express_1 = require("express");
const check_1 = require("express-validator/check");
const MomentController_1 = __importDefault(require("./MomentController"));
const controllerAdapter_1 = __importDefault(require("../../middlewares/controllerAdapter"));
const validation_1 = __importDefault(require("./validation"));
const handleMulter_1 = require("../../lib/handleMulter");
const router = express_1.Router();
router.post('/', authenticate_1.authJWt, handleMulter_1.upload.single("momentImage"), check_1.checkSchema(validation_1.default.moment.post), controllerAdapter_1.default(MomentController_1.default, "createMoment"));
router.get('/all', authenticate_1.authJWt, controllerAdapter_1.default(MomentController_1.default, "getAllMoment"));
router.put('/:id', authenticate_1.authJWt, check_1.checkSchema(validation_1.default.moment.put), controllerAdapter_1.default(MomentController_1.default, "updateMoment"));
router.delete('/:id', authenticate_1.authJWt, check_1.checkSchema(validation_1.default.moment.delete), controllerAdapter_1.default(MomentController_1.default, "deleteMoment"));
exports.default = router;
//# sourceMappingURL=router.js.map