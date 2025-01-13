import { db } from "../config/database.js";
import { ObjectId } from "mongodb";

export async function transactionCreate(req, res){
    const transaction = req.body;

    try {
        const registeredTransaction = await db.collection("transactions").findOne({
                    description:transaction.description
                });
        
                if(registeredTransaction){
                    return res.status(409).send("Transação com essa descrição já existe.")
                }
        
                await db.collection("transactions").insertOne(transaction)
        
                return res.status(201).send("Transação cadastrada com sucesso!")
        
    } catch (error) {
        return res.status(500).send(error.message)    
    }
}

export async function getTransactions(req, res){
    const page = req.query.page || 1;
    const limit = 10;
    const start = (page -1)* limit;
    
    try {
        const transactions = await db
        .collection("transactions")
        .find()
        .skip(start)
        .limit(limit)
        .toArray();

        return res.send(transactions);

    } catch (error) {
        return res.status(500).send(error.message);
    }


}

export async function transactionEdit(req,res){

    const {id} = req.params;
    const transaction = req.body;
    try {
        const existingID = 
        await db.collection("transactions").findOne({_id: new ObjectId(id)});
        if(!existingID){
            return res.status(404).send("ID não encontrado ou inválido");
        }

        const updated = await db.collection("transactions").updateOne({
            _id:new ObjectId(id)
        }, {
            $set:{
                    value: transaction.value,
                    description: transaction.description,
                    type: transaction.type    
            }
        });

        if(updated.matchedCount === 0){
            return res.statusStatus(404);
        }

        res.sendStatus(204);    
      
    } catch (error) {
        res.status(500).send(error.message);      
    }



}

export async function transactionDelete(req, res){
    const {id} = req.params
   
    try {
         const toDelete = await db.collection("transactions").deleteOne({ _id: new ObjectId(id)})
         
         if(toDelete.deletedCount === 0){
             return res.status(404).send("registro não encontrado")
         }
 
         return res.status(204).send("deletado com sucesso!")
    } catch (error) {
         return res.status(500).send(error.message)
    }
}