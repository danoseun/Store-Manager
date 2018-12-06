import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';
import { verifyToken, isAdmin } from '../middlewares/auth';

const { ProductController } = controllers;
const {
  createProduct, getAllProducts, getOneProduct, updateProduct, deleteProduct
} = ProductController;
const { ProductValidator } = middlewares;
const { findOneProduct, productInputChecker } = ProductValidator;


const productRouter = express.Router();

productRouter.post('/products', verifyToken, isAdmin, productInputChecker, createProduct);
productRouter.get('/products', verifyToken, getAllProducts);
productRouter.get('/products/:productId', verifyToken, findOneProduct, getOneProduct);
productRouter.put('/products/:productId', verifyToken, isAdmin, productInputChecker, updateProduct);
productRouter.delete('/products/:productId', verifyToken, isAdmin, deleteProduct);

export default productRouter;
