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


function init(){
    inquirer
    .prompt(prompt)
    .then((answers) =>{
        // DO action
    })
  }