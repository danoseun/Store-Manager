import { users, sales } from '../dummyDb';

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
  static getAll(req, res) {
    const { userId } = req.query;
    const foundUser = users.find(user => user.id === Number(userId));
    if (foundUser && foundUser.role === 'admin') {
      return res.status(200).json({
        sales,
        message: 'All sales successfully served'
      });
    }
    if (foundUser && foundUser.role !== 'admin') {
      return res.status(401).json({
        status: 'Fail',
        message: 'You are not authorized to visit this page'
      });
    }
    return res.status(400).json({
      status: 'Fail',
      message: 'Invalid credentials'
    });
  }

  /**
   * Get single sale
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON representing success or failure message
   */
  static getOne(req, res) {
    const { saleId } = req.params;
    const { userId } = req.query;
    if (!Number(saleId)) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Oops! Inavlid URL'
      });
    }
    if (!Number(userId)) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Inavlid credentials'
      });
    }
    const foundUser = users.find(user => user.id === Number(userId));
    const foundSale = sales.find(sale => sale.id === Number(saleId));
    if (!foundUser) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Invalid credentials'
      });
    }
    if (!foundSale) {
      return res.status(404).json({
        status: 'Fail',
        message: 'Sale with ID does not exist'
      });
    }
    if (foundUser && foundSale) {
      if (foundUser.role === 'admin' || foundSale.userId === Number(userId)) {
        return res.status(200).json({
          foundSale,
          message: 'Sale fetched'
        });
      }
      return res.status(401).json({
        status: 'Fail',
        message: 'You are not authorized to view this resource'
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
  static createSale(req, res) {
    const { cart, total, userId } = req.body;
    const id = sales.length + 1;
    const newSale = {
      id,
      userId,
      cart,
      total
    };
    sales.push(newSale);
    return res.status(201).json({
      message: 'Sale record created successfully',
      newSale
    });
  }
}

export default SalesController;
