import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import pool from '../../connection';

dotenv.config();


const sql = 'insert into users (email, password, role) values ($1, $2, $3)';

const password = process.env.PASSWORD;
console.log('PASS', password);

const saltRounds = 10;

const newPassword = bcrypt.hashSync(password, saltRounds);

const email = process.env.EMAIL;

const variables = [email, newPassword, 'admin'];
console.log('VAL', variables[1]);


// const sql = 'insert into users (email, password, role) values ($1, $2, $3)';
// const password = process.env.PASSWORD;
// console.log('pa', password);

// // async
// let hashPassword;
// // eslint-disable-next-line require-jsdoc
// async function value() {
//   console.log('PASS', password);
//   try {
//     hashPassword = await bcrypt.hash(password, 10);
//     console.log('OYA', hashPassword);
//     return hashPassword;
//   } catch (error) {
//     return error.message;
//   }
// }
// const email = process.env.EMAIL;
// const variables = [email, value(), 'admin'];
// console.log('NOW', variables[1]);


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
