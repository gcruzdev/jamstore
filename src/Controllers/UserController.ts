import express, { Express, Request, Response, NextFunction } from 'express';
import User from "../Models/UserModel"

exports.post = (req: Request, res: Response, next: NextFunction) => {
  User.create(req.body).then(function(u) {
    res.send(u)
  })
  .catch(next);
};

exports.put = (req: Request, res: Response, next: NextFunction) => {
  let id = req.params.id
  User.findByIdAndUpdate({ _id: id},
        req.body).then(function() {
    User.findOne({ _id: id }).then(function (u) {
      res.send(u);
    });
  }).catch(next);
};

exports.delete = (req: Request, res: Response, next: NextFunction) => {
  let id = req.params.id;
  User.findByIdAndRemove({
    _id: id
  }).then(function(u) {
    res.send(u);
  }).catch(next)
};

exports.get = (req: Request, res: Response, next: NextFunction) => {
  User.find({}).then(function(u) {
    res.send(u);
  }).catch(next)
}

exports.getById = (req: Request, res: Response, next: NextFunction) => {
  let id = req.params.id;
  User.findById({
    _id: id
  }).then(function (u) {
    res.send(u)
  }).catch(next)
}