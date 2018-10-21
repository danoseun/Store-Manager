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
     * @return {object} JSON representing success message
     * @memberof SalesController
     */
  static getAll(req, res) {
    const { UserId } = req.query;
    const foundUser = users.find(user => user.userId === Number(UserId));
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
}

export default SalesController;
