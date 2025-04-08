"use strict";
// src/db/db.ts
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// Create a connection pool
const pool = new pg_1.Pool({
    user: 'postgres', // Replace with your PostgreSQL username
    host: 'localhost',
    database: 'employees', // Replace with your PostgreSQL database name
    password: '#Pringles12', // Replace with your PostgreSQL password
    port: 5432,
});
exports.default = pool; // Export the pool to be used in other parts of the application
