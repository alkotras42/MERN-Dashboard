import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from './routes/clients';
import generalRoutes from './routes/general';
import managementRoutes from './routes/management';
import salesRoutes from './routes/sales';

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

const PORT = process.env.PORT || 9000;

mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log('Error connecting to MongoDB', err));
