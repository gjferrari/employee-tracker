INSERT INTO department (name)
VALUES  ("Legal"),
        ("Finance"),
        ("Engineering"),
        ("Marketing"),
        ("Human Resources"),
        ("Sales");


INSERT INTO role (title, salary, department_id)
VALUES  ("Legal Team Lead", 250000, 1),
        ("Lawyer", 190000, 1),
        ("Head of HR", 200000, 5),
        ("Project Manager", 185000, 3),
        ("Head of Sales", 240000, 6),
        ("Account Manager", 200000, 2),
        ("Salesperson",150000, 6),
        ("Software Engineer", 150000, 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES  ("Alyssa", "Yeoman", 1),
        ("Monisa", "Brown", 4),
        ("Ev", "Jensen", 2),
        ("Theresa", "Crumpton", 3),
        ("Genevieve", "Ferrari", 7),
        ("Cesar", "Cardenas", 7),
        ("Soraya", "Markle", 8),
        ("Bo", "Johson", 5),
        ("David", "Bailey", 6),
        ("Frodo", "Baggins", 8);
