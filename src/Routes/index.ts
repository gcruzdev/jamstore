import express, { Express } from 'express';

const UserRoutes = require('./UserRoutes');
const ProductRoutes = require('./ProductRoutes');

module.exports = (app: Express = express()) => {
   UserRoutes(app);
   ProductRoutes(app);
}