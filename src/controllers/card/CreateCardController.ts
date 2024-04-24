import { Request, Response } from "express";
import { CreateCardService } from "../../services/card/CreateCardService";

class CreateCardController {
    async handle(req: Request, res: Response) {

        const { numero, nomeProprietario, validade, cvv } = req.body;
        const idUsuario = req.user_id;

        const createCreditCardService = new CreateCardService();

        const creditCard = await createCreditCardService.execute({ numero, nomeProprietario, validade, cvv, idUsuario });

        return res.json(creditCard);

    }
}

export { CreateCardController };