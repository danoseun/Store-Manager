import pool from '../connection';

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

class ProductTableHandler {
  static productsTable() {
    const create = pool.query(createProductsTable)
      .then(result => console.log(`productsTable: ${result[0].command}PED and ${result[1].command}D`))
      .catch(error => console.log(`products table ${error}`));
    return create;
  }
}

const { productsTable } = ProductTableHandler;

export default productsTable;
