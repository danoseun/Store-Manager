import pool from '../connection';

const createUsersTable = `DROP TABLE IF EXISTS users CASCADE;
    CREATE TABLE users (
        id SERIAL PRIMARY KEY NOT NULL,
        email CHARACTER VARYING(50) UNIQUE NOT NULL,
        password CHARACTER VARYING(255) NOT NULL,
        role CHARACTER VARYING(9) NOT NULL DEFAULT ('attendant')
    )`;
/**
 * Class representing UserTableHandler
 * @class UserTableHandler
 */
class UserTableHandler {
  /**
     * Create Users Table
     * @static
     * @param {statement} sql - query to create table in db
     * @param {Array} variables - values inputted into the sql statement
     * @returns {object} representing success or failure
     */
  static usersTable() {
    const create = pool.query(createUsersTable)
      .then(result => console.log(`usersTable: ${result[0].command}PED and ${result[1].command}D`))
      .catch(error => console.log(`users table ${error}`));
    return create;
  }
}

const { usersTable } = UserTableHandler;

export default usersTable;
