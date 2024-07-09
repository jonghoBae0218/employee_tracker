INSERT INTO department (name)
VALUES ('Dep A'),
       ('Dep B'),
       ('Dep C');


INSERT INTO role (title, salary, department_id)
VALUES ('Role1', 10000, 1),
        ('Role2', 20000, 1),
        ('Role3', 30000, 2),
        ('Role4', 40000, 3);

            
       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jongho', 'Bae', 1, NULL),
        ('John', 'Doe', 1, 1),
        ('Alex', 'King', 2, 1),
        ('Hee', 'Kim', 2, NULL),
        ('Tony', 'Kroos', 3,3);
            