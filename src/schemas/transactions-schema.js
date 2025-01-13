import joi from "joi";

export const transactions = joi.object({
    value: joi.number().positive().precision(2).required(),
    description: joi.string().required(),
    type: joi.string().valid('deposit', 'withdraw').required()
})
    
