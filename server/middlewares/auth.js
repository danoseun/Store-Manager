import { users } from '../dummyDb';

/**
 * Class representing User Authorization
  @class VerifyRole
 */
class VerifyRole {
/**
 * isAdmin - Checks if user is admin
 * @static
 * @param {object} req - Request object
 * @param {object} res - Response Object
 * @param {object} next - Calls the next function/route handler
 * @returns {object} JSON representing the failure message
 */
  static isAdmin(req, res, next) {
    const { userId } = req.body;
    const foundUser = users.find(user => user.id === userId);
    if (foundUser) {
      if (foundUser.role === 'admin') {
        return next();
      }
      return res.status(401).json({
        status: 'Fail',
        message: 'You are not authorized to visit this page'
      });
    }
    return res.status(422).json({
      status: 'Fail',
      message: 'Please login with the correct details if you have been signed up by the admin'
    });
  }

  /**
 * isAttendant - Checks if user is attendant
 * @static
 * @param {object} req - Request object
 * @param {object} res - Response Object
 * @param {object} next - Calls the next function/route handler
 * @returns {object} JSON representing the failure message
 */
  static isAttendant(req, res, next) {
    const { userId } = req.body;
    const foundUser = users.find(user => user.id === userId);
    if (foundUser) {
      if (foundUser.role === 'attendant') {
        return next();
      }
      return res.status(401).json({
        status: 'Fail',
        message: 'You are not authorized to visit this page'
      });
    }
    return res.status(422).json({
      status: 'Fail',
      message: 'Please login with the correct details if you have been signed up by the admin'
    });
  }
}

export default VerifyRole;
