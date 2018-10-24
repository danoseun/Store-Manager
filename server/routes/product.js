import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const { ProductController } = controllers;
const {
  createProduct, getAllProducts, getOneProduct, updateProduct
} = ProductController;
const { ProductValidator, VerifyRole } = middlewares;
const { findOneProduct, productInputChecker } = ProductValidator;
const { isAdmin } = VerifyRole;

const productRouter = express.Router();

productRouter.post('/products', productInputChecker, isAdmin, createProduct);
productRouter.get('/products', getAllProducts);
productRouter.get('/products/:productId', findOneProduct, getOneProduct);
productRouter.put('/products/:productId', productInputChecker, isAdmin, getOneProduct, updateProduct);

export default productRouter;
