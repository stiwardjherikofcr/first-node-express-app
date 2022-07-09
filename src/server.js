import express from 'express';
import morgan from 'morgan';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import 'dotenv/config';

// Intializations 
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Importing routes
import indexRoutes from './routes/index.routes.js';

// Settings
app.set('port', process.env.PORT || 4000);
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(indexRoutes);

// Static Files
app.use(express.static(join(__dirname, 'public')));

export default app;