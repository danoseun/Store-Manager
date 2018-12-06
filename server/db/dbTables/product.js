import pool from '../connection';

/**
 * In the long run, the userId in products table
 * is unnecessary because the interaction between the user table
 * and products table is minimal
 */

const createProductsTable = `DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  userId INTEGER NOT NULL,
  FOREIGN KEY (userId) references users (id) on delete cascade,
  productName CHARACTER VARYING(30) UNIQUE NOT NULL,
  description CHARACTER VARYING(100) NOT NULL,
  category CHARACTER VARYING(20) NOT NULL,
  imageurl TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  unitPrice INTEGER NOT NULL
)`;

/**
 * Class representing ProductTableHandler
 * @class ProductTableHandler
 */
class ProductTableHandler {
  /**
     * Create Products Table
     * @static
     * @param {statement} sql - query to create table in db
     * @param {Array} variables - values inputted into the sql statement
     * @returns {object} representing success or failure
     */
  static productsTable() {
    const create = pool.query(createProductsTable)
      .then(result => console.log(`productsTable: ${result[0].command}PED and ${result[1].command}D`))
      .catch(error => console.log(`products table ${error}`));
    return create;
  }
}

const { productsTable } = ProductTableHandler;

export default productsTable;
