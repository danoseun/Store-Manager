import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const { SalesController } = controllers;
const { getAll } = SalesController;
const { VerifyRole } = middlewares;
const { isAttendant } = VerifyRole;

const salesRouter = express.Router();

salesRouter.get('/sales', getAll);

export default salesRouter;
