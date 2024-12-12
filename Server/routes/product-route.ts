import express, { Request, Response } from 'express';
import productsData from '../data/product.json';

const router = express.Router();

type Product = {
  id: number;
  name: string;
  price: number;
};


const products: Product[] = productsData;

router.get('/products', (req: Request, res: Response<any>) => {
  try{
    res.json(products);
  }
  catch(error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal Server Error: Failed to fetch products.',
      error: error,
    });
  }
});

router.get('/:id', (req: Request<{ id: string }>, res: Response<any>) => {
  try {

  const product: Product | undefined = products.find(
    (p) => p.id === parseInt(req.params.id)
  );

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
}
catch(error) {
  res.status(500).json({
    message: 'Internal Server Error: Failed to fetch products.',
    error: error,
  });
}
});

export default router;
