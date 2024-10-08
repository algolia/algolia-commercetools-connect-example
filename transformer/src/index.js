import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';

// Import routes
import ServiceRoutes from './routes/service.route.js';

// Import logger
import { logger } from './utils/logger.utils.js';
import { readConfiguration } from './utils/config.utils.js';

import { errorMiddleware } from './middleware/error.middleware.js';

const config = readConfiguration();

const PORT = config.customPort || 8080;

// Create the express app
const app = express();
app.disable('x-powered-by');

// Define configurations
app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.use('/transform', ServiceRoutes);

// Global error handler
app.use(errorMiddleware);

// Listen the application
const server = app.listen(PORT, () => {
  logger.info(`⚡️ Service application listening on port ${PORT}`);
});

export default server;
