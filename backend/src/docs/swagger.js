const swaggerSpec = {
  openapi: '3.0.3',
  info: {
    title: 'Backend API',
    version: '1.0.0',
    description: 'API documentation for backend service',
  },
  servers: [
    {
      url: '/',
      description: 'Current server',
    },
  ],
  paths: {
    '/': {
      get: {
        summary: 'Root endpoint',
        responses: {
          200: {
            description: 'Backend status message',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Backend Node.js is running',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/api/health': {
      get: {
        summary: 'Health check endpoint',
        responses: {
          200: {
            description: 'Service health status',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 'ok',
                    },
                    timestamp: {
                      type: 'string',
                      format: 'date-time',
                      example: '2026-03-01T00:00:00.000Z',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

module.exports = swaggerSpec;
