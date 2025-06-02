import Router from "express";
import { signIn, signUp } from "../controllers/users-controller.js";
import { schemaValidate } from "../middlewares/schema-middleware.js";
import { userSigninSchema, userSignupSchema } from "../schemas/userSchema.js";

const authenticationRouter = Router();


authenticationRouter.post("/sign-up", schemaValidate(userSignupSchema), signUp);
authenticationRouter.post("/", schemaValidate(userSigninSchema), signIn);

export default authenticationRouter;