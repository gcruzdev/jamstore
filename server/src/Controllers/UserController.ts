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

exports.getByMailAndPass = (req: Request, res: Response, next: NextFunction) => {
  let mail = req.params.mail;
  let password = req.params.password;
  console.log(req.params)
  User.find({
    mail: mail,
    password: password
  }).then(function (u) {
    res.send(u)
  }).catch(next)
}