// Задача 1.
// Создайте переменные с корректными именами, чтобы сохранить следующую информацию:
// 1. firstName – имя (строка)
// 2. lastName – фамилия (строка)
// 3. isStudent – является ли учеником курса (булево значение)

// Задача 2.
// 1. Объявите переменную age с числовым значением возраста студента.
// 2. Объявите переменную currentYear и присвойте ей значение текущего года (например, 2025).
// 3. Используя age и currentYear вычислите год рождения студента, запишите результат в переменную birthYear.

// Задача 3.
// Выведите в консоли сообщение в таком формате:
// Меня зовут [firstName] [lastName], мне [age] лет. Я ученик/ученица курса: [isStudent].

// Задача 4.
// Какое значение будет у переменной result?
// let a = '123';
// let b = +'456';
// let c = Number('789');
// let d = Boolean(0);
// let e = Boolean(' ');
// let result = a + b + c + d + e;


// Задача 1.

let firstName = "Андрей";
let lastName = "Емельяненко";
let isStudent = true;

console.log(firstName, lastName, isStudent);

// Задача 2

let age = 29;
let currentYear = 2025;
let birthYear = currentYear - age;

console.log(birthYear);

// Задача 3

console.log("Меня зовут ${firstName} ${lastName}, мне ${age} лет. Я ученик курса.");

// Задача 4

let a = '123';
let b = +'456';
let c = Number('789');
let d = Boolean(0);
let e = Boolean(' ');
let result = a + b + c + d + e;

console.log(result); 

let z = 'Значение result в задаче 4, как я понмаю явлется строкой, т.к  значение а=строка и все остальные значения, подстраиваются под эту строку.'

console.log(z)