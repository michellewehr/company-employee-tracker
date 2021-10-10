DROP DATABASE IF EXISTS company;
CREATE DATABASE company;

USE company;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT, 
    dep_name VARCHAR(30),
    PRIMARY KEY (id) 
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT, 
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) 
        REFERENCES departments(id) 
        ON DELETE SET NULL
);

CREATE TABLE managers (
    id INTEGER AUTO_INCREMENT, 
    manager_name VARCHAR(70),
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT, 
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    role_id INTEGER, 
    manager_id INTEGER, 
    dep_id INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id)
        REFERENCES roles(id)
        ON DELETE SET NULL,
    FOREIGN KEY(manager_id) 
        REFERENCES managers(id)
        ON DELETE SET NULL,
    FOREIGN KEY(dep_id) 
        REFERENCES departments(id)
        ON DELETE SET NULL
);