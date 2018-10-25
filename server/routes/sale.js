import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const { SalesController } = controllers;
const { getAllSales, getOneSale, createSale } = SalesController;
const { VerifyRole, SaleHelper } = middlewares;
const { SalesHelper } = SaleHelper;
const { isAttendant } = VerifyRole;

const salesRouter = express.Router();

salesRouter.get('/sales', getAllSales);
salesRouter.get('/sales/:saleId', getOneSale);
salesRouter.post('/sales', isAttendant, SalesHelper, createSale);

export default salesRouter;
