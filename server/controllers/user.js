import { hashSync, compareSync } from 'bcrypt';
import db from '../db/index';
import { createToken } from '../middlewares/auth';
import {
  createUser, queryUsersByEmail, deleteUser, findUserById, updateUserQuery
} from '../db/sql';

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
      const { rows } = await db.query(createUser, params);
      if (rows) {
        return res.status(201).json({
          message: 'Signup was successful'
        });
      }
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
  static async login(req, res) {
    const params = [req.body.email];
    try {
      const result = await db.query(queryUsersByEmail, params);
      if (result) {
        if (result.rowCount !== 0) {
          const comparePassword = compareSync(req.body.password, result.rows[0].password);
          if (comparePassword) {
            const authUser = result.rows[0];
            const token = createToken(authUser);
            return res.status(200).json({
              message: 'Login was successful',
              token
            });
          }
          if (!comparePassword) {
            return res.status(401).json({
              status: 'Fail',
              message: 'User authentication failed'
            });
          }
        }
      }
    } catch (error) {
      res.status(500).json({
        status: 'Fail',
        message: error.message
      });
    }
  }

  /**
     * Delete a user to the application
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON object representing success message
     * @memberof UserController
     */
  static async deleteUser(req, res) {
    const { id } = req.params;
    const params = [id];
    try {
      const { rowCount } = await db.query(deleteUser, params);
      if (rowCount > 0) {
        return res.status(200).json({
          message: 'User successully deleted'
        });
      }
      return res.status(404).json({
        message: 'User does not exist'
      });
    } catch (error) {
      res.status(500).json({
        status: 'Fail',
        message: error.message
      });
    }
  }

  /**
     * Admin can give admin right to the specific store attendant
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON object representing success message
     * @memberof UserController
     */
  static async giveAdminRight(req, res) {
    try {
      const result = await db.query(findUserById, [req.params.id]);
      console.log('res', res);
      if (result.rowCount !== 0) {
        if (result.rows[0].role === 'attendant') {
          const response = await db.query(updateUserQuery, ['admin']);
          console.log('RES', response);
          return res.status(200).json({
            message: 'User updated successfully'
          });
        }
        return res.status(409).json({
          status: 'Fail',
          message: 'User is already an admin'
        });
      } return res.status(404).json({
        status: 'Fail',
        message: 'User not found'
      });
    } catch (error) {
      return res.status(500).json({
        status: 'Fail',
        message: error.message
      });
    }
  }
}
export default UserController;
