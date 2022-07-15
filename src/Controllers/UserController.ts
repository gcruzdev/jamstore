import express, { Express, Request, Response, NextFunction } from 'express';
import User from "../Models/UserModel"

exports.post = (req: Request, res: Response, next: NextFunction) => {
  User.create(req.body).then(function(u) {
    res.send(u)
  })
  .catch((e) => console.log(e))
};

exports.put = (req: Request, res: Response) => {
  let id = req.params.id
  res.status(201).send({
    type: "PUT",
    msg: `Rota PUT com id ${id}!`,
  });
};

exports.delete = (req: Request, res: Response) => {
  let id = req.params.id;
  res.status(200).send({
    type: "DELETE",
    msg: `Rota DELETE com id ${id}`,
  });
};

exports.get = (req: Request, res: Response) => {
  res.status(200).send({
    type: "GET",
    msg: "Rota GET",
  });
}

exports.getById = (req: Request, res: Response) => {
  let id = req.params.id;
  res.status(200).send({
    type: "GET",
    msg: `Rota GET com id ${id}`,
  })
}