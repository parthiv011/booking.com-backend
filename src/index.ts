import express from 'express';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { router } from './routes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
);

const dataPath = path.join(__dirname, '..', 'data');
const avatarPath = path.join(__dirname, '..', 'Avatar');

app.use('/data', express.static(dataPath));
app.use('/avatar', express.static(avatarPath));

app.use('/api/v1', router);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
