import { Router } from 'express';
import {
  indexController,
  aboutController,
  contactController,
} from '../controllers/index.controller.js';

const router = Router();

router.get('/', indexController);
router.get('/about', aboutController);
router.get('/contact', contactController);

export default router;
