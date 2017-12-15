import * as express from 'express-promise-router';
const router = express();
import { Request, Response } from 'express';
import * as db from '../repo';
import { timeStamp } from '../repo';

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

router.get('/timestamps', async (req: Request, res: Response) => {
  let timeStamps = await db.timeStamp.getTimeStamps();
  res.json({ timeStamps: timeStamps });
});

export default router;
