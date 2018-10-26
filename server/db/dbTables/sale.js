import pool from '../connection';

const createSalesTable = `DROP TABLE IF EXISTS sales CASCADE;
  CREATE TABLE sales (
    id SERIAL PRIMARY KEY NOT NULL,
    userId INTEGER NOT NULL,
    FOREIGN KEY (userId) references users (id) on delete cascade,
    saleItems JSONB NOT NULL,
    total INTEGER NOT NULL,
    saleDate TIMESTAMP NOT NULL DEFAULT (NOW())
)`;

class SaleTableHandler {
  static salesTable() {
    pool.query(createSalesTable)
      .then(result => console.log(`salesTable: ${result[0].command}PED and ${result[1].command}D`))
      .catch(error => console.log(`sales table ${error}`));
  }
}

const { salesTable } = SaleTableHandler;

export default salesTable;
