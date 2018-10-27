import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';
import { isAttendant } from '../middlewares/auth';

const { SalesController } = controllers;
const { getAllSales, getOneSale, createSale } = SalesController;
const { SaleHelper } = middlewares;
const { SalesHelper } = SaleHelper;

const salesRouter = express.Router();

salesRouter.get('/sales', getAllSales);
salesRouter.get('/sales/:saleId', getOneSale);
salesRouter.post('/sales', isAttendant, SalesHelper, createSale);

export default salesRouter;
