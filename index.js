require('dotenv').config();
const express = require('express');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'IDLMS API',
    version: '1.0.0',
    description: 'API documentation for IDLMS',
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}`,
    },
  ],
};

// Options for swagger-jsdoc
const options = {
  swaggerDefinition,
  apis: ['./index.js'], // files to read for documentation
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome message
 *     description: Returns a greeting message from the app
 *     responses:
 *       200:
 *         description: Greeting message
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Hello from IDLMS
 */
app.get('/', (req, res) => {
  res.send(`Hello from ${process.env.APP_NAME}`);
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
  console.log(`API Docs: http://localhost:${process.env.PORT}/api-docs`);
});
