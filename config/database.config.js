import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: process.env.DBUSR,
  host: process.env.DBHOSTNAME,
  database: process.env.DBNAME,
  password: process.env.DBPASSWD,
  port: process.env.DBPORT,
});

pool.connect;
