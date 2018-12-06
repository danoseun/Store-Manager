import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';
import { isAttendant, isAdmin, verifyToken } from '../middlewares/auth';

const { SalesController } = controllers;
const { getAllSales, getOneSale, createSale } = SalesController;
const { SaleHelper } = middlewares;
const { SalesHelper } = SaleHelper;

const salesRouter = express.Router();

salesRouter.get('/sales', verifyToken, isAdmin, getAllSales);
salesRouter.get('/sales/:saleId', verifyToken, getOneSale);
salesRouter.post('/sales', verifyToken, isAttendant, SalesHelper, createSale);

export default salesRouter;
