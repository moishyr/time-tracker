import * as express from 'express-promise-router';
const router = express();
import users from './users';

router.use('/users', users);

export default router;