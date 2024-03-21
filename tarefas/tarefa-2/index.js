const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer
  .prompt([
        {name: 'name', message: 'Qual o seu nome?'}, 
        {name: 'age', message: 'Quantos anos tem?' }
  ]).then((answers) => {
        console.log(chalk.bgYellow.black(`Nome do usuário: ${answers.name}`))
        console.log(chalk.bgYellow.black(`Idade do usuário: ${answers.age}`))
  }).catch((error) => {
        console.log(error)
  })