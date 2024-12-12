import express, { Request, Response } from 'express';
import productsData from '../data/product.json';

const router = express.Router();

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};


const products: Product[] = productsData;

router.get('/', (req: Request, res: Response<any>) => {
  res.json(products);
});

router.get('/:id', (req: Request<{ id: string }>, res: Response<any>) => {
  const product: Product | undefined = products.find(
    (p) => p.id === parseInt(req.params.id)
  );

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

export default router;
