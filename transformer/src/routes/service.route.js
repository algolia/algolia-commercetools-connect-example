import { Router } from 'express';
import { logger } from '../utils/logger.utils.js';
import { post } from '../controllers/service.controller.js';

const serviceRouter = Router();

serviceRouter.post('/', async (req, res, next) => {

  try {
    await post(req, res);
  } catch (error) {
    logger.info(`calling next in error ${error.message}`);
    next(error);
  }
});

export default serviceRouter;
