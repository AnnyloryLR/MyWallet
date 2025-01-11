import jwt from "jsonwebtoken";
import { db } from "../config/database";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config()


export async function signUp(req, res){
    const user = req.body;

    try {
        await db.collection("users").insertOne({
            ...user, password: bcrypt.hashSync(user.password, 10)
        })

        return res.status(201).send("Cadastro realizado com sucesso!")

    } catch (error) {
        return res.status(500).send(error.message)

    }
}

export async function signIn(req, res){
    const user = req.body;

    try {
         const registeredUser = await db.collection("users").findOne({
            email:user.email
        });

        if(!registeredUser){
            return res.status(401).send("Email e senha incompatíveis.")
        }

        if(registeredUser && bcrypt.compareSync(user.password, registeredUser.password)){
            console.log("Usuário logado com sucesso!")
         
          const token = jwt.sign(
            {userId: registeredUser._id},
            process.env.JWT_SECRET,
            {expiresIn: 86400});

          return res.send(token);
        }

        return res.status(401).send("Email e senha incompativéis")    
       
    } catch (error) {
        return res.status(500).send(error.message)
    }
}