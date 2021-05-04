import { authJWt } from './../../lib/authenticate';
import { logger } from './../../lib/logger';
import { Router } from "express";
import { checkSchema } from 'express-validator/check'
import registrationController from './RegistrationController'
import controllerAdapter from '../../middlewares/controllerAdapter';
import validation from './validation'
import { upload } from '../../lib/handleMulter';

const router = Router();
router.post('/', authJWt, checkSchema(validation.registration.post as any), controllerAdapter(registrationController, "createRegistration"))

// router.get('/all', authJWt, controllerAdapter(registrationController, "getAllregistration"))
router.put('/:id', authJWt, checkSchema(validation.registration.put as any), controllerAdapter(registrationController, "updateRegistration"))

router.delete('/:id', authJWt, checkSchema(validation.registration.delete as any), controllerAdapter(registrationController, "deleteRegistration"))
export default router;