NSERT INTO department (name) 
VALUES 
    ('Engineering'), 
    ('Sales'), 
    ('HR');

INSERT INTO role (title, salary, department_id) 
VALUES
    ('Software Engineer', 100000, 12),
    ('Sales Manager', 80000, 13),
    ('HR Specialist', 70000, 14);

INSERT INTO employee (first_name, last_name, salary, role_id, manager_id) 
VALUES
    ('Alice', 'Smith', 100000, 12, NULL),
    ('Bob', 'Parker', 80000, 13, 1),
    ('Charlie', 'Gobert', 70000, 14, 2);