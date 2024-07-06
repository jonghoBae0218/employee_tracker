INSERT INTO department (name)
VALUES ('Dep A'),
       ('Dep B'),
       ('Dep C');


INSERT INTO role (title, salary, department_id)
VALUES ('R1', 10000, 1),
        ('R2', 20000, 1),
        ('R3', 30000, 2),
        ('R4', 40000, 3);

            
       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('a1', 'a2', 1, NULL),
        ('b1', 'b2', 1, 1),
        ('c1', 'c2', 2, 1),
        ('d1', 'd2', 2, NULL),
        ('e1', 'e2', 3,3);
            