// Purpose: This file is the entry point for the routes folder. It will import the api routes and export them to the server.js file.
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;