const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const authRoutes = require('./routes/auth.routes');
const analyticsRoutes = require('./routes/analytics.routes');
const categoryRoutes = require('./routes/category.routes');
const orderRoutes = require('./routes/order.routes');
const positionRoutes = require('./routes/position.routes');

const API_URL = '/api';
const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

app.use(`${API_URL}/auth`, authRoutes);
app.use(`${API_URL}/analytics`, analyticsRoutes);
app.use(`${API_URL}/category`, categoryRoutes);
app.use(`${API_URL}/order`, orderRoutes);
app.use(`${API_URL}/position`, positionRoutes);

module.exports = app;
