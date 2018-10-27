import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
let connect;

if (process.env.NODE_ENV === 'test:dev') {
  connect = {
    connectionString: process.env.TESTDB_URL
  };
}
connect = {
  connectionString: process.env.DATABASE_URL || process.env.LOCALDB_URL
};

const pool = new Pool(connect);
export default pool;