import express, { ErrorRequestHandler, Express, NextFunction, Request, Response } from 'express';
// import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const uri = `mongodb+srv://gabriela:${process.env.DB_PASS}@nodejscluster.nkvnxor.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri);

mongoose.connection.on("connected", function () {
  console.log("Connected to Database " + "jamstore");
});

mongoose.connection.on("error", function(err) {
  console.log("Database error " + err);
})

const app: Express = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors({origin: '*'}));

require('./Routes/index')(app);

app.use(function(err: Error, req: Request, res: Response, next: NextFunction) {
  console.log(err);
  res.status(422).send({error: err.message});
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
})