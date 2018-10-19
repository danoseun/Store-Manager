import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const { ProductController } = controllers;
const { createProduct } = ProductController;
const { ProductValidator, VerifyRole } = middlewares;
const { getOneProduct, productInputChecker } = ProductValidator;
const { isAdmin } = VerifyRole;

const productRouter = express.Router();

productRouter.post('/products', productInputChecker, isAdmin, createProduct);

export default productRouter;
