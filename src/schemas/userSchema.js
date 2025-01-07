import joi from "joi";

export const userSignupSchema = joi.object({
    name:joi.string().required(),
    email:joi.string().required().email(),
    password:joi.string().min(6).required()
})