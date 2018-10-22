import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const { SalesController } = controllers;
const { getAll, getOne, createSale } = SalesController;
const { VerifyRole, SaleHelper } = middlewares;
const { SalesHelper } = SaleHelper;
const { isAttendant } = VerifyRole;

const salesRouter = express.Router();

salesRouter.get('/sales', getAll);
salesRouter.get('/sales/:saleId', getOne);
salesRouter.post('/sales', isAttendant, SalesHelper, createSale);

export default salesRouter;
