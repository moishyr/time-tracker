require('dotenv').config();
import * as express from 'express';
import * as bodyParser from 'body-parser';
import router from './routes';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', router);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server is running on port ${port}`));