import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCardController } from './controllers/card/CreateCardController';
import { ValidateCardController } from './controllers/card/ValidateCardController';

const router = Router();

router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.post('/creditcard', isAuthenticated, new CreateCardController().handle);
router.post('/validate-card', isAuthenticated, new ValidateCardController().handle);

export { router };