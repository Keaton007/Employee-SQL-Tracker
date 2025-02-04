import { mainMenu, departmentPrompt, rolePrompt, employeePrompt, updateRolePrompt } from './prompts.js';
import { getDepartments, getRoles, getEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } from '../db/queries.js';


const runApp = async () => {
    let exit = false;
    while (!exit) {
        const action = await mainMenu();
        switch (action) {
            case 'View All Departments':
                console.table(await getDepartments());
                break;
            case 'View All Roles':
                console.table(await getRoles());
                break;
            case 'View All Employees':
                console.table(await getEmployees());
                break;
            case 'Add Department':
                const { name } = await departmentPrompt();
                await addDepartment(name);
                break;
            case 'Add Role':
                await addRole(...Object.values(await rolePrompt(await getDepartments())));
                break;
            case 'Add Employee':
                await addEmployee(...Object.values(await employeePrompt(await getRoles(), await getEmployees())));
                break;
            case 'Update Employee Role':
                await updateEmployeeRole(...Object.values(await updateRolePrompt(await getEmployees(), await getRoles())));
                break;
            case 'Exit':
                exit = true;
                break;
            default:
                console.log("Invalid option. Please try again.");
        }
    }
};


runApp();