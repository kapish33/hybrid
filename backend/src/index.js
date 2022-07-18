const express = require('express');

const { register, login } = require('./controllers/auth.controller');
const catalogsController = require('./controllers/catalogs.controller');
const productsController = require('./controllers/product.controller');
const checkoutController = require('./controllers/checkout.controller');

const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/api/auth/register', register);
app.post('/api/auth/login', login);

app.use('/api/buyer/list-of-sellers', catalogsController);
app.use('/api/buyer/seller-catalog/', catalogsController);
app.use('/api/buyer/create-order', checkoutController);

app.use('/api/seller/create-catalog', catalogsController);
app.use('/api/seller/orders', productsController);

module.exports = app;
