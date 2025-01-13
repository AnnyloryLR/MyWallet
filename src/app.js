import express, {json} from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
import authenticationRouter from './routers/auth-router';
import transactionsRouter from './routers/transactions-router';
dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.use(authenticationRouter);
app.use(transactionsRouter);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Running server on port ${port}`))