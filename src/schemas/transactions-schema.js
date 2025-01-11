import joi from "joi";

export const transactions = joi.object({
    value: joi.float().required(),
    description: joi.string().required(),
    type: joi.string().valid('deposit', 'withdraw').required()
})
    
