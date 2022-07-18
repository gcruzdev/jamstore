import express, { Express, Request, Response, NextFunction } from 'express';
import Product from "../Models/ProductModel"

exports.post = (req: Request, res: Response, next: NextFunction) => {
  Product.create(req.body).then(function(p) {
    res.send(p)
  })
  .catch(next);
};

exports.put = (req: Request, res: Response, next: NextFunction) => {
  let id = req.params.id
  Product.findByIdAndUpdate({ _id: id},
        req.body).then(function() {
    Product.findOne({ _id: id }).then(function (p) {
      res.send(p);
    });
  }).catch(next);
};

exports.delete = (req: Request, res: Response, next: NextFunction) => {
  let id = req.params.id;
  Product.findByIdAndRemove({
    _id: id
  }).then(function(p) {
    res.send(p);
  }).catch(next)
};

exports.get = (req: Request, res: Response, next: NextFunction) => {
  Product.find({}).then(function(p) {
    res.send(p);
  }).catch(next)
}

exports.getByCode = (req: Request, res: Response, next: NextFunction) => {
  let code = req.params.code;
  Product.find({
    code: code
  }).then(function (p) {
    res.send(p)
  }).catch(next)
}