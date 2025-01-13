import { Router } from "express";
import { getTransactions,
         transactionCreate,
         transactionDelete, 
         transactionEdit } 
         from "../controllers/transactions-controller";

const transactionsRouter = Router();

transactionsRouter.post("/transactions", transactionCreate);
transactionsRouter.get("/transactions", getTransactions);
transactionsRouter.put("/transactions/:id", transactionEdit);
transactionsRouter.delete("/transactions/:id", transactionDelete);

export default transactionsRouter;