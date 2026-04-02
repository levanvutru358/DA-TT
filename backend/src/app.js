// const express = require('express');
// const cors = require('cors');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const swaggerUi = require('swagger-ui-express');
// const audit = require("./middleware/audit.middleware");

// const routes = require('./routes');
// const swaggerSpec = require('./docs/swagger');
// const notFound = require('./middlewares/notFound');
// const errorHandler = require('./middlewares/errorHandler');

// const app = express();

// app.use(helmet());
// app.use(cors());
// app.use(morgan('dev'));
// app.use(express.json());
// app.use(audit);

// app.get('/', (_req, res) => {
//   res.json({ message: 'Backend Node.js is running' });
// });

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// app.use('/api', routes);

// app.use(notFound);
// app.use(errorHandler);

// module.exports = app;


const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const routes = require("./routes");
const audit = require("./middlewares/audit.middleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Audit log
app.use(audit);

// Routes
app.use("/api", routes);

module.exports = app;
