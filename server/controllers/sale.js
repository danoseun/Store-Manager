import db from '../db/index';
import { createSaleQuery, queryAllSales, queryOneSale } from '../db/sql';

/**
 * Class representing SalesController
 * @class SalesController
 */
class SalesController {
  /**
     * Get all sales
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON representing success or failure message
     * @memberof SalesController
     */
  static async getAllSales(req, res) {
    try {
      const { rows } = await db.query(queryAllSales);
      return res.status(200).json({
        message: 'Sale record successfully served',
        rows
      });
    } catch (error) {
      const { message } = error;
      return res.status(500).json({
        status: 'Fail',
        message
      });
    }
  }

  /**
   * Get single sale
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON representing success or failure message
   */
  static async getOneSale(req, res) {
    const { id, role } = req.authData.payload;
    // console.log(id, role);
    try {
      const result = await db.query(queryOneSale, [req.params.saleId, id]);
      // console.log('ONE SALE', result);
      if (!result.rows[0]) {
        return res.status(404).json({
          status: 'Fail',
          message: 'Sale no dey yet'
        });
      }
      if (result.rows[0].userid === id || role === 'admin') {
        const sale = result.rows[0];
        return res.status(200).json({
          message: 'This is the sale record you requested',
          sale
        });
      }
      if (result.rows[0].userid !== id) {
        return res.status(401).json({
          status: 'Fail',
          message: 'You cant view a sale you did not create'
        });
      }
    } catch (error) {
      const { message } = error;
      return res.status(500).json({
        status: 'Fail',
        message
      });
    }
  }

  /**
   * Create Sale Record
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON representing success message
   */
  static async createSale(req, res) {
    const { variables } = req.body;
    // console.log('VAR', variables);
    try {
      const result = await db.query(createSaleQuery, variables);
      const saleRecord = result.rows[0];
      return res.status(201).json({
        message: 'Sale record created successfully',
        saleRecord
      });
    } catch (error) {
      const { message } = error;
      return res.status(500).json({
        status: 'Fail',
        message
      });
    }
  }
}

export default SalesController;
