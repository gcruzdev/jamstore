import express, { Express } from 'express';
const ProductController = require('../Controllers/ProductController');

module.exports = (app: Express = express()) => {
   app.post('/product', ProductController.post);
   app.put('/product/:id', ProductController.put);
   app.delete('/product/:id', ProductController.delete);
   app.get('/products', ProductController.get);
   app.get('/product/:id', ProductController.getById);
}