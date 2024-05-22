-- creating new table called employee_db;
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
-- move into the new database
\c employee_db;
-- create a new table called department
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);
-- create a new table called role
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL
);
-- create a new table called employees
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER
);

-- SELECT * FROM <table name> to view a certain table
-- use \dt; to view current tables