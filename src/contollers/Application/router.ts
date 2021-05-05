import { authJWt } from '../../lib/authenticate';
import { logger } from '../../lib/logger';
import { Router } from "express";
import { checkSchema } from 'express-validator/check'
import applicationController from './ApplicationController'
import controllerAdapter from '../../middlewares/controllerAdapter';
import validation from './validation'
import { upload } from '../../lib/handleMulter';

const router = Router();
router.post('/', authJWt, checkSchema(validation.application.post as any), controllerAdapter(applicationController, "createApplication"))

// router.get('/all', authJWt, controllerAdapter(applicationController, "getAllapplication"))
router.put('/:id', authJWt, checkSchema(validation.application.put as any), controllerAdapter(applicationController, "updateApplication"))

router.delete('/:id', authJWt, checkSchema(validation.application.delete as any), controllerAdapter(applicationController, "deleteApplication"))
export default router;