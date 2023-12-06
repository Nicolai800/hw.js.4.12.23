// 1. Пользователь вводит год своего рождения, вывести
// информацию о возрасте пользователя в разные года
// до текущего. Например, вводим «2003». Вывод: «в
// 2003 было 1 год», «в 2004 было 2 год», «в 2005 было
// 3 год» и т.д.

// let age = 0;
// let todayYear = 2023;
// let userYear = prompt('Enter the year of your birth');
// if (!isNaN(userYear)){
//     userYear = Number(userYear);
// }
// for( i = userYear; i <= todayYear; i++){
//     console.log(`In ${i} you have ${age} years old`);
//     age++;
// }


///////////////////////////////////////////////////////////////////////////////


// 2. Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
// каждое последующее число должно быть больше предыдущего, иначе вывести
// ошибку.

let firstNumber = prompt("Enter your first number");
let secondNumber = prompt("Enter your second number");
let thirdNumber = prompt("Enter your third number");
let fourthNumber = prompt("Enter your fourth number");
let fifthNumber = prompt("Enter your fifth number");
if (!isNaN(firstNumber) && !isNaN(secondNumber) && !isNaN(thirdNumber) && !isNaN(fourthNumber) && !isNaN(fifthNumber)){
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    thirdNumber = Number(thirdNumber);
    fourthNumber = Number(fourthNumber);
    fifthNumber = Number(fifthNumber);
}
if(firstNumber < secondNumber < thirdNumber < fourthNumber < fifthNumber ){
    console.log(`${firstNumber} < ${secondNumber} < ${thirdNumber} < ${fourthNumber} < ${fifthNumber}`);
    console.log("OK");
}else{
    console.log('ERROR!');
    console.log('Each subsequent number must be greater than the previous one');
}
