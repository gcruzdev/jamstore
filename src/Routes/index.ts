import express, { Express } from 'express';

const UserRoutes = require('./UserRoutes');
module.exports = (app: Express = express()) => {
   UserRoutes(app)
}