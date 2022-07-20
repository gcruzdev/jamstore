import express, { Express } from 'express';
const UserController = require('../Controllers/UserController');

module.exports = (app: Express = express()) => {
   app.post('/user', UserController.post);
   app.put('/user/:id', UserController.put);
   app.delete('/user/:id', UserController.delete);
   app.get('/users', UserController.get);
   app.get('/user/:mail&:password', UserController.getByMailAndPass);
}