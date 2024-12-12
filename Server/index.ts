import express from 'express';
import productRoute from './routes/product-route';

const PORT = 5000;
const app = express();

app.use('/api/v1', productRoute); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
