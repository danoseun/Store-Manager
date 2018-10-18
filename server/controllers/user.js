import users from '../dummyDb/user';

/**
 * Class representing UserController
 * @class UserController
 */
class UserController {
  /**
     * Signup a user to the application
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON representing success message
     * @memberof UserController
     */
  static signUp(req, res) {
    const newUser = {
      id: users.length + 1,
      email: req.body.email,
      password: req.body.password
    };
    users.push(newUser);
    return res.status(201).json({
      newUser,
      message: 'Signup was successful'
    });
  }
}

export default UserController;
