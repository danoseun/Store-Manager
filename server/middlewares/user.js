import { users } from '../dummyDb';

/**
 * Class representing User Validations
 * @class UserValidator
 */
class UserValidator {
  /**
    * @param {object} req - The request object
    * @param {object} res - The response object
    * @param {function} next - Calls the next function
    * @returns {object} JSON representing the failure message
    */
  static signUpValidator(req, res, next) {
    /* eslint-disable prefer-const */
    let { email, password, UserId } = req.body;
    if (email === undefined) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Email cannot be undefined'
      });
    }
    if (typeof email !== 'string') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Email should be a string'
      });
    }
    email = email.toLowerCase().trim();
    if (email === '') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Email field cannot be empty'
      });
    }
    /* eslint-disable no-useless-escape */
    const emailVerifier = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!emailVerifier.test(email)) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Email format is invalid'
      });
    }
    if (email.length < 10 || email.length > 30) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Email should be 10 to 50 characters long'
      });
    }
    const foundEmail = users.find(user => user.email === email);
    if (foundEmail) {
      return res.status(409).json({
        status: 'Fail',
        message: 'Email already exists!'
      });
    }

    // Password Validations
    if (password === undefined) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Password cannot be undefined'
      });
    }
    if (typeof password !== 'string') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Password should be a string'
      });
    }
    password = password.trim();
    if (password === '') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Password field cannot be empty'
      });
    }
    if (typeof password !== 'string') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Password should be a string'
      });
    }
    if (password.length < 8 || password.length > 20) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Password should be 8 to 20 characters long'
      });
    }

    // UserId validations
    if (UserId === undefined) {
      return res.status(400).json({
        status: 'Fail',
        message: 'UserId cannot be undefined'
      });
    }

    if (UserId === '') {
      return res.status(400).json({
        status: 'Fail',
        message: 'UserId cannot be empty'
      });
    }
    let value;
    if (typeof UserId === 'string') {
      value = Number(UserId);
      if (Number.isNaN(value)) {
        return res.status(400).json({
          status: 'Fail',
          message: 'UserId should be a valid number'
        });
      }

      // if (typeof UserId !== 'number') {
      //   return res.status(400).json({
      //     status: 'Fail',
      //     message: 'UserId should be a number',
      //
      //   });
      // }
    }
    req.body.email = email;
    req.body.password = password;
    req.body.UserId = value;
    return next();
  }

  /**
   * login User to the application
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {function} next - Calls the next function/route handler
   * @returns {object} JSON representing the failure message.
   */
  static loginValidator(req, res, next) {
    let { email, password } = req.body;
    if (email === undefined) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Email cannot be undefined'
      });
    }
    if (typeof email !== 'string') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Email should be a string'
      });
    }
    if (email === '') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Please supply your email'
      });
    }

    email = email.toLowerCase().trim();
    const foundUser = users.find(user => user.email === email);
    if (!foundUser) {
      return res.status(401).json({
        status: 'Fail',
        message: 'Authentication failed'
      });
    }

    if (password === undefined) {
      return res.status(401).json({
        status: 'Fail',
        message: 'Pasword cannot be undefined'
      });
    }

    if (password === '') {
      return res.status(401).json({
        status: 'Fail',
        message: 'Password cannot be empty'
      });
    }
    password = password.trim();
    if (foundUser && password !== foundUser.password) {
      return res.status(401).json({
        status: 'Fail',
        message: 'Authentication unsuccessful',
      });
    }
    req.body.foundUser = foundUser;
    req.body.password = password;
    return next();
  }
}

export default UserValidator;
