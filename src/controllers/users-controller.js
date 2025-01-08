import { db } from "../config/database";
import { userSigninSchema,userSignupSchema } from "../schemas/userSchema";
import { schemaValidate } from "../middlewares/schema-middleware";



export async function signUp(req, res){
    const user = req.body;

    schemaValidate()



}