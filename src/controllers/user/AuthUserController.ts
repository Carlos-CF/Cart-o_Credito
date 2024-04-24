import { Request,Response } from 'express';
import { AuthUserService } from '../../services/user/AuthUserService';


class AuthUserController{
    
    handle = async (req: Request, res: Response) => {
        const { login, senha } = req.body;

        const createUserService: AuthUserService = new AuthUserService();
        const auth = await createUserService.execute({ login, senha });

        return res.json(auth);
    }
}

export {AuthUserController}