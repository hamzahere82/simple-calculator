import inquirer from "inquirer";

// 1 input promt
// const askFruit = await inquirer.prompt([
//     {
//         type: 'list',
//         name: 'fruit',
//         message: 'what is your favorite Fruit',
//         choices: ['mango' , 'Bana' , 'Apple' , 'lichi']


//     }
// ])
// console.log('Your favoruite fruite is:',askFruit.fruit);

// 2 list prompt


// Make calculator:

const myCalc = await inquirer.prompt([

{        

     type: 'list',
     name: 'Operation',
     message: 'What operation you want from?',
     choices:['add','Subtract', 'multiply', 'division']
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

])

if(myCalc.Operation === 'add'){
    console.log(`The sum of your number is ${myCalc.num1 + myCalc.num2}`);
    
}
else if (myCalc.Operation === 'Subtract'){
    console.log(`The difference of your number is ${myCalc.num1 - myCalc.num2}`);
}
else if (myCalc.Operation === 'multiply'){
    console.log(`The product of your number is ${myCalc.num1 * myCalc.num2}`);
} 
else {
    console.log(`The quotient of ${myCalc.num1} and ${myCalc.num2} is  ${myCalc.num1 * myCalc.num2} `);
    
}


// 3 Checkbox

// const pizzaBuy = await inquirer.prompt([
// {

//     type: 'checkbox',
//     name: 'flavour',
//     message: 'tell us your flavour',
//     choices: ["fajita", "italian" , "BBQ" , "chicken malai"],
// }
// ])
// console.log('You have order these flavour', pizzaBuy.flavour);


// 4 confirm prompt
// const qualification = await inquirer.prompt([
//     {
//         type: 'confirm',
//         name: 'qual',
//         message: 'Are you graduate?',

//     }
// ])

// console.log('Your answer is' , qualification.qual);

//5 password

// const passwordVar = await inquirer.prompt([
//     {
//         type: 'password',
//         name:  'yourPass',
//         message: 'Enter You password'
//     }
// ])

// console.log(passwordVar.yourPass);

// if(passwordVar.yourPass === 'admin'){
//     console.log('Login successfuly', passwordVar.yourPass);
    
// }
