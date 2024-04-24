import { Request, Response } from "express";
import { ValidateCardService } from "../../services/card/ValidateCardService";

class ValidateCardController {
    async handle(req: Request, res: Response) {

        const creditCardNumber = req.body.numero;
        
        const userId = req.user_id;

        const validateCardService = new ValidateCardService();

        const response = await validateCardService.execute({ creditCardNumber, userId });

        return res.json(response);
    }
}

export { ValidateCardController };