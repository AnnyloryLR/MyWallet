import express, {json} from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

import authenticationRouter from './routers/auth-router.js';
import transactionsRouter from './routers/transactions-router.js';

const app = express();

app.use(cors());
app.use(json());

app.use(authenticationRouter);
app.use(transactionsRouter);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Running server on port ${port}`))