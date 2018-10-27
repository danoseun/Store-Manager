import { hashSync, compareSync } from 'bcrypt';
import db from '../db/index';
import { createToken } from '../middlewares/auth';
import { createUsers } from '../db/sql';

/**
 * Class representing UserController
 * @class UserController
 */
class UserController {
  /**
     * Create Account a user to the application
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON representing success message
     * @memberof UserController
     */
  static async createAccount(req, res) {
    const params = [
      req.body.email,
      hashSync(req.body.password, 10)
    ];

    try {
      const { rows } = await db.query(createUsers, params);
      console.log(rows);
      return res.status(201).json({
        message: 'Signup was successful'
      });
    } catch (error) {
      return res.status(500).json({
        status: 'Fail',
        message: error.message
      });
    }
  }

  /**
     * Login a user to the application
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON object representing success message
     * @memberof UserController
     */
  static login(req, res) {
    const { foundUser } = req.body;
    return res.status(200).json({
      message: `Welcome ${foundUser.email}!`
    });
  }
}
export default UserController;
