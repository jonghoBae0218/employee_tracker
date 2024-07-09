const inquirer = require('inquirer');
const { Pool } = require('pg');

const ACTIONS = {
    VIEW_DEPARTMENTS: 1,
    VIEW_ROLES: 2,
    VIEW_EMPLOYEES: 3,
    ADD_DEPARTMENT: 4,
    ADD_ROLE: 5,
    ADD_EMPLOYEE: 6,
    UPDATE_EMPLOYEE: 7,
    // UPDATE_EMPLOYEE_MANAGER: 8,
    // VIEW_EMPLOYEES_BY_MANAGER: 9,
    // VIEW_EMPLOYEES_BY_DEPARTMENT: 10,
    // DELETE_DEPARTMENT: 11,
    // DELETE_ROLE: 12,
    // DELETE_EMPLOYEE: 13,
    // VIEW_BUDGET: 14,
    EXIT: 15
};

const prompt = [
    {
        type: 'list',
        name: 'action',
        message: "What action would you like to perform?",
        choices: [
            { name: 'View all departments', value: ACTIONS.VIEW_DEPARTMENTS },
            { name: 'View all roles', value: ACTIONS.VIEW_ROLES },
            { name: 'View all employees', value: ACTIONS.VIEW_EMPLOYEES },
            { name: 'Add a department', value: ACTIONS.ADD_DEPARTMENT },
            { name: 'Add a role', value: ACTIONS.ADD_ROLE },
            { name: 'Add an employee', value: ACTIONS.ADD_EMPLOYEE },
            { name: 'Add and update an employee role', value: ACTIONS.UPDATE_EMPLOYEE },
            // { name: 'Update an employee manager', value: ACTIONS.UPDATE_EMPLOYEE_MANAGER },
            // { name: 'View employees by manager', value: ACTIONS.VIEW_EMPLOYEES_BY_MANAGER },
            // { name: 'View employees by department', value: ACTIONS.VIEW_EMPLOYEES_BY_DEPARTMENT },
            // { name: 'Delete a department', value: ACTIONS.DELETE_DEPARTMENT },
            // { name: 'Delete a role', value: ACTIONS.DELETE_ROLE },
            // { name: 'Delete an employee', value: ACTIONS.DELETE_EMPLOYEE },
            // { name: 'View the total utilized budget of a department', value: ACTIONS.VIEW_BUDGET },
            { name: 'Exit', value: ACTIONS.EXIT },
        ]
    },
]

const pool = new Pool(
    {
      user: 'postgres',
      // TODO: Enter PostgreSQL password
      password: 'Qowhdgh0218^^',
      host: 'localhost',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  )
  


function callPrompt(){
    return new Promise((resolve, reject) => {
        inquirer
        .prompt(prompt)
        .then(async (answers) => {
            console.log(answers.action);
            switch(answers.action){
                case ACTIONS.EXIT:
                    resolve(false); // Return false if user selects EXIT
                    break;

                case ACTIONS.VIEW_DEPARTMENTS:
                    await showDepartments();
                    resolve(true);
                    break;

                case ACTIONS.VIEW_ROLES:
                    await viewRoles();
                    resolve(true);
                    break;
                    
                case ACTIONS.VIEW_EMPLOYEES:
                    await viewEmployees();
                    resolve(true);
                    break;
                
                default:
                    resolve(true); // For other actions, resolve with true
                    break;
            }
        })
        .catch((error) => {
            reject(error); // Reject with error if prompt fails
        });
    });
}



async function showDepartments(){
    const query = await pool.query("SELECT department.id, department.name FROM department");
    console.table(query.rows);
}

async function viewRoles(){
    const query = await pool.query(`SELECT role.id, role.title, role.salary, department.name AS department FROM role
                                    JOIN department ON role.department_id = department.id`);
    console.table(query.rows);
}

async function viewEmployees(){
    const query = await pool.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department,
                                    role.salary, CONCAT(manager.first_name ,' ', manager.last_name) AS manager
                                    FROM employee JOIN role ON employee.role_id = role.id
                                    JOIN department ON role.department_id = department.id
                                    LEFT JOIN employee manager ON employee.manager_id = manager.id`);
    console.table(query.rows);
    
}

async function init(){
    
    await pool.connect();
    console.log("Hi");

    let iterate = true;
    while(iterate){
        iterate = await callPrompt();
    }
    console.log("Exited gracefully");
    process.exit(0);
}


module.exports = {init};