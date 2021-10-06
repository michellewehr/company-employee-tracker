INSERT INTO departments (dep_name) 
VALUES 
('Marketing'),
('Sales'),
('Finance'),
('Human Resources');

INSERT INTO roles (title, salary, department_id)
VALUES 
('Sales representative', '50571', '2'),
('Sales consultant', '65036', '2'),
('Sales manager', '120030', '2'),
('Marketing Manager', '117151', '1'),
('Marketing Associate', '58935', '1'),
('Marketing Trainee', '37633', '1'),
('Financial Manager', '127990', '3'),
('Accountant', '70500', '3'),
('Financial analyst', '85660', '3'),
('HR Manager', '115698', '4'),
('HR Associate', '54681', '4'),
('HR Analyst', '66625', '4'),
('Recruiter', '50430', '4');

INSERT INTO managers (manager_name)
VALUES
('Michelle Napolitano'),
('Danielle Welsh'),
('Gabriela Anne'),
('Olivia Samuels');

INSERT INTO employees (first_name, last_name, role_id, manager_id, dep_id)
VALUES 
('Carmine','John', 1, 1, 1),
('Adam','Robert', 2, 1, 1),
('Christopher','Roy', 3, 1, 1),
('Noah','Paul', 4, 2, 2),
('Ethan','James', 5, 2, 2),
('Wesley','Walker', 6, 2, 2),
('Christian','Thomas',7, 3, 3),
('Julianna','Rose',8, 3, 3),
('Ava','Rose',9, 3, 3),
('Lana','Noelle',10, 3, 3),
('Mila','Grace',11, 4, 4),
('Catherine','Mary',12, 4, 4),
('Celinda','Kelly',13, 4, 4);
