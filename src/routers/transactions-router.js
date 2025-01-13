import { Router } from "express";
import { getTransactions,
         transactionCreate,
         transactionDelete, 
         transactionEdit } 
         from "../controllers/transactions-controller.js";
import { schemaValidate } from "../middlewares/schema-middleware.js";
import { transactions } from "../schemas/transactions-schema.js";
import { tokenValidate } from "../middlewares/auth-middleware.js";

const transactionsRouter = Router();

transactionsRouter.use(tokenValidate);
transactionsRouter.post("/transactions", schemaValidate(transactions), transactionCreate);
transactionsRouter.get("/transactions", getTransactions);
transactionsRouter.put("/transactions/:id", schemaValidate(transactions), transactionEdit);
transactionsRouter.delete("/transactions/:id", transactionDelete);

export default transactionsRouter;