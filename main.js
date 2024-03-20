import inquirer from "inquirer";
const myCalc = await inquirer.prompt([
    {
        type: 'list',
        name: 'Operation',
        message: 'What operation you want from?',
        choices: ['add', 'Subtract', 'multiply', 'division']
    },
    {
        type: 'number',
        name: 'num1',
        message: 'Enter first number',
    },
    {
        type: 'number',
        name: 'num2',
        message: 'Enter other number',
    },
]);
if (myCalc.Operation === 'add') {
    console.log(`The sum of your number is ${myCalc.num1 + myCalc.num2}`);
}
else if (myCalc.Operation === 'Subtract') {
    console.log(`The difference of your number is ${myCalc.num1 - myCalc.num2}`);
}
else if (myCalc.Operation === 'multiply') {
    console.log(`The product of your number is ${myCalc.num1 * myCalc.num2}`);
}
else {
    console.log(`The quotient of ${myCalc.num1} and ${myCalc.num2} is  ${myCalc.num1 * myCalc.num2} `);
}
