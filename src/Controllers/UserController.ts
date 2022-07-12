import express, { Express, Request, Response } from 'express';

exports.post = (req: Request, res: Response) => {
  console.log("You made a POST request: ", req.body);
  res.status(201).send({
    type: "POST",
    fname: req.body.fname,
    lname: req.body.lname
  });
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