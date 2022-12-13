import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// Initialize express
const app = express();

// Database Connection
import ConnectDB from './db/connection';

// Routes
import User from './routes/user';
import Payment from './routes/payments';

// middleware
app.use(express.json());

// Testing route
app.get('/', (req, res) => {
  res.send('Hello world from the server');
});

// Microservices
app.use('/register', User);
app.use('/payment', Payment);

app.listen(process.env.PORT || 5000, () =>
  ConnectDB()
    .then(() => console.log('Server is up and running'))
    .catch(() =>
      console.log('Server is running , but database connection failed')
    )
);
