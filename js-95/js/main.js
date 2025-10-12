// 1

const user = {
name: "Андрей",
age: 27,
role: "admin"
};

console.log(user);

// 2

const greeter = {
sayHello(name) {
    return `Hello "${name}"`;
}
};

console.log(greeter.sayHello("Переданный аргумент")); 

// 3

const users = [
{ name: "Анна", isAdmin: true },
{ name: "Борис", isAdmin: false },
{ name: "Вера", isAdmin: false },
{ name: "Глеб", isAdmin: true },
{ name: "Андрей", isAdmin: false }
];

let regularUsersCount = 0;

for (const user of users) {
if (!user.isAdmin) {
regularUsersCount++;
}
}

console.log(regularUsersCount); 




// // Функции
// // 1
// function greet(name) {
//     return 'Hello "' + name + '"';
// }

// console.log(greet("Андрей"));

// // 2

// const numbers = [3, 15, 7, 22, 9, 11, 4, 30, 1, 13];

// function printNumbersGreaterThan10(arr) {
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] > 10) {
// console.log(arr[i]);
//     }
// }
// }

// printNumbersGreaterThan10(numbers);

// // 3

// function calculator(a, b, operation) {
// switch (operation) {
//     case 'plus':
//         return a + b;
//     case 'minus':
//         return a - b;
//     case 'multiply':
//         return a * b;
//     case 'divide':
//         return a / b;
//     default:
//         console.error("Неизвестная операция. Используйте: 'plus', 'minus', 'multiply', 'divide'");
//         return null;
//     }
// }

// let result = calculator(2, 3, 'minus');
// console.log(result); 

// console.log(calculator(5, 2, 'plus'));
// console.log(calculator(4, 3, 'multiply')); 
// console.log(calculator(10, 2, 'divide'));   

// Объекты



// let firstName = 'John'
// let age = '20'

// console.log(firstName)
// console.log(age)

// let i = 0
// while(i < 10) {
//     i = i + 1
//     console.log(i)
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Пройден ${i} круг`)
// }

// // массивы

// const numbers = [1, '2', true, [1, 2, 3], 5]
// numbers[4]=6
// console.log (numbers)

// // Циклы

// const number = [1, 2, 3, 4, 5]

// for (let i = 0; i < number.length; i++) {
//     console.log(number [i] + 1)
// }
