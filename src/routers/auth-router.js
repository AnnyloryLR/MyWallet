import Router from "express";
import { signIn, signUp } from "../controllers/users-controller";
import { schemaValidate } from "../middlewares/schema-middleware";
import { userSigninSchema, userSignupSchema } from "../schemas/userSchema";

const authenticationRouter = Router();


authenticationRouter.post("/sign-up", schemaValidate(userSignupSchema), signUp);
authenticationRouter.post("/sign-in", schemaValidate(userSigninSchema), signIn);

export default authenticationRouter;