import { Request, response, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController{

    async handle(req: Request, res: Response) {

        console.log(req.body);

        const { nome, email, login, senha } = req.body;

        const createuserService = new CreateUserService();

        const user = await createuserService.execute({ nome, email, login, senha });

        return res.json(user);

    }
}

export{CreateUserController}