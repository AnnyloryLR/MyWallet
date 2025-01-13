import { Router } from "express";
import { getTransactions,
         transactionCreate,
         transactionDelete, 
         transactionEdit } 
         from "../controllers/transactions-controller";
import { schemaValidate } from "../middlewares/schema-middleware";
import { transactions } from "../schemas/transactions-schema";

const transactionsRouter = Router();

transactionsRouter.post("/transactions", schemaValidate(transactions), transactionCreate);
transactionsRouter.get("/transactions", getTransactions);
transactionsRouter.put("/transactions/:id", schemaValidate(transactions), transactionEdit);
transactionsRouter.delete("/transactions/:id", transactionDelete);

export default transactionsRouter;