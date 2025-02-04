import inquirer from 'inquirer';

export const mainMenu = async () => {
    const choices = [
      'View All Departments',
      'View All Roles',
      'View All Employees',
      'Add a Department',
      'Add a Role',
      'Add an Employee',
      'Update an Employee Role',
    ];
    
    const response = await inquirer.prompt([{
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices
    }]);
  
    return response.choice;
};

export const departmentPrompt = async () => {
  const response = await inquirer.prompt([
    {
      type: 'input',
      name: 'departmentName',
      message: 'What is the name of the department?',
    }
  ]);
  return response.departmentName;
};

export const rolePrompt = async (p0) => {
  const response = await inquirer.prompt([
    {
      type: 'input',
      name: 'roleTitle',
      message: 'What is the title of the role?',
    },
    {
      type: 'input',
      name: 'roleSalary',
      message: 'What is the salary of the role?',
    },
    {
      type: 'input',
      name: 'departmentId',
      message: 'Which department does the role belong to? (Enter Department ID)',
    }
  ]);
  return { roleTitle: response.roleTitle, roleSalary: response.roleSalary, departmentId: response.departmentId };
};

export const employeePrompt = async (p0, p1) => {
  const response = await inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'What is the employee’s first name?',
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'What is the employee’s last name?',
    },
    {
      type: 'input',
      name: 'roleId',
      message: 'What is the employee’s role ID?',
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'What is the employee’s manager ID? (Leave blank if no manager)',
    }
  ]);
  return { firstName: response.firstName, lastName: response.lastName, roleId: response.roleId, managerId: response.managerId || null };
};

export const updateRolePrompt = async (p0, p1) => {
  const response = await inquirer.prompt([
    {
      type: 'input',
      name: 'employeeId',
      message: 'Which employee’s role do you want to update?',
    },
    {
      type: 'input',
      name: 'newRoleId',
      message: 'What is the new role ID for this employee?',
    }
  ]);
  return { employeeId: response.employeeId, newRoleId: response.newRoleId };
};
