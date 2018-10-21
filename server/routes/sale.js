import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const { SalesController } = controllers;
const { getAll, getOne } = SalesController;
const { VerifyRole } = middlewares;
const { isAttendant } = VerifyRole;

const salesRouter = express.Router();

salesRouter.get('/sales', getAll);
salesRouter.get('/sales/:saleId', getOne);

export default salesRouter;
