import bcrypt from 'bcrypt';
import pool from '../connection';

const sql = 'insert into users (email, password, role) values ($1, $2, $3)';
const password = bcrypt.hashSync('adminuser', 10);
const variables = ['adminowner@sm.com', password, 'admin'];

class InsertAdminHandler {
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
