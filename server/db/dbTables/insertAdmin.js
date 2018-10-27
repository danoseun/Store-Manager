import bcrypt from 'bcrypt';
import pool from '../connection';

const sql = 'insert into users (email, password, role) values ($1, $2, $3)';
const password = bcrypt.hashSync('adminuser', 10);
const variables = ['adminowner@sm.com', password, 'admin'];

/**
 * Class representing InsertAdminHandler
 * @class InsertAdminHandler
 */
class InsertAdminHandler {
  /**
     * Create Admin Account
     * @static
     * @param {statement} sql - query to create table in db
     * @param {Array} variables - values inputted into the sql statement
     * @returns {object} representing success or failure
     */
  static createAdmin() {
    const create = pool.query(sql, variables)
      .then((result => console.log(`Admin account ${result.command}ED`)))
      .catch((error) => {
        console.log(error);
      });
    return create;
  }
}

const { createAdmin } = InsertAdminHandler;

export default createAdmin;
