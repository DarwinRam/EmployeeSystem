// src/db/db.ts

import { Pool } from 'pg';

// Create a connection pool
const pool = new Pool({
  user: 'postgres',    // Replace with your PostgreSQL username
  host: 'localhost',
  database: 'employees', // Replace with your PostgreSQL database name
  password: '#Pringles12',// Replace with your PostgreSQL password
  port: 5432,
});

export default pool;  // Export the pool to be used in other parts of the application


