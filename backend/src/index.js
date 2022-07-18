const express = require('express');

const { register, login } = require('./controllers/auth.controller');

const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/api/auth/register', register);
app.post('/api/auth/login', login);

module.exports = app;
