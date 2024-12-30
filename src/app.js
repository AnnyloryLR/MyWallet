import express, {json} from 'express';
import cors from 'cors';
import {MongoClient, ObjectId} from 'mongodb';


import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
app.use(json());


const url_db = process.env.DATABASE_URL;
const mongoClient = new MongoClient(url_db);
let db;

mongoClient.connect()
.then(() => {console.log("Successfully connected to the DB."),
             db = mongoClient.db()})
.catch(err => console.log(err.message))


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Running server on port ${port}`))