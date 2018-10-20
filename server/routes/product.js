import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const { ProductController } = controllers;
const {
  createProduct, getAll, getOne, updateProduct
} = ProductController;
const { ProductValidator, VerifyRole } = middlewares;
const { getOneProduct, productInputChecker } = ProductValidator;
const { isAdmin } = VerifyRole;

const productRouter = express.Router();

productRouter.post('/products', productInputChecker, isAdmin, createProduct);
productRouter.get('/products', getAll);
productRouter.get('/products/:productId', getOneProduct, getOne);
productRouter.put('/products/:productId', productInputChecker, isAdmin, getOneProduct, updateProduct);

export default productRouter;
