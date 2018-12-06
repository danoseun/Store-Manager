import db from '../db/index';
import { queryProductTableById, productQuantityAfterSale } from '../db/sql';

/**
 * Class representing Sale Helper.
 * @class SaleHelper
 */
class SaleHelper {
  /**
     *
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @param {function} next - Calls the next function
     * @returns {object} JSON representing the failure message
     * @memberof SaleHelper
     */
  static SalesHelper(req, res, next) {
    const { saleItems } = req.body;
    const userId = req.authData.payload.id;
    let total = 0;
    const promises = [];
    let newQuantity;
    console.log('req', req.body);
    saleItems.forEach((sale, index, saleArray) => {
      if (!sale.productId) {
        return res.status(400).json({
          status: 'Fail',
          message: 'productId cannot be empty or undefined'
        });
      }
      const validInteger = /^[0-9]+$/;
      if (!Number(sale.productId) || sale.productId < 1 || !validInteger.test(sale.productId)) {
        return res.status(400).json({
          status: 'Fail',
          message: 'Invalid productId detected'
        });
      }
      if (sale.productId.length > 8) {
        return res.status(400).json({
          status: 'Fail',
          message: `productId ${sale.productId} is out of range.`
        });
      }
      if (!Number(sale.quantity) || sale.quantity < 1 || !validInteger.test(sale.quantity)) {
        return res.status(400).json({
          status: 'Fail',
          message: 'Invalid quantity detected'
        });
      }
      db.query(queryProductTableById, [sale.productId])
        .then((result) => {
          console.log('resulT', result);
          if (result.rowCount === 0) {
            return res.status(404).json({
              status: 'Fail',
              message: 'Sorry, product does not exist'
            });
          }
          const { unitprice } = result.rows[0];
          sale.amount = sale.quantity * unitprice;
          sale.productNm = result.rows[0].productname;
          total += sale.amount;
          if (result.rows[0].quantity === 0) {
            return res.status(406).json({
              status: 'Fail',
              message: 'Sorry product is out of stock'
            });
          }
          if (result.rows[0].quantity < sale.quantity) {
            return res.status(406).json({
              status: 'Fail',
              message: `Maximum quantity you can order for product is ${result.rows[0].quantity}`
            });
          }
          newQuantity = result.rows[0].quantity - sale.quantity;
          promises.push(sale);
          return promises;
        }).then((feedback) => {
          console.log('FEEDBACK', feedback);
          db.query(productQuantityAfterSale, [newQuantity, sale.productId])
            .then(() => {});

          if (saleArray.length === feedback.length) {
            const variables = [userId, JSON.stringify(feedback), total];
            req.body.variables = variables;
            return next();
          }
        }).catch(error => res.status(500).json({
          status: 'Fail',
          message: error.message
        }));
    });
  }
}
export default SaleHelper;
