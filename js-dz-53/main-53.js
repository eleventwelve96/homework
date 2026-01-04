// Задание 1.
// Дан массив пользователей:
// const users = [
//   { name: 'Alex', age: 24, isAdmin: false },
//   { name: 'Bob', age: 13, isAdmin: false },
//   { name: 'John', age: 31, isAdmin: true },
//   { name: 'Jane', age: 20, isAdmin: false },
//]
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users),
// которая возвращает средний возраст пользователей.

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users),
// которая возвращает массив всех администраторов.

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0,
// возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом

// Задание 1

const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true }
);

console.log(users);

// Залание 2

function getUserAverageAge(users) {
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}

console.log(getUserAverageAge(users));

// Задание 3
function getAllAdmins(users) {
  return users.filter((user) => user.isAdmin);
}

console.log(getAllAdmins(users));

// Задание 4
function first(arr, n) {
  if (n === 0) {
    return [];
  }

  if (n === undefined) {
    return arr.length > 0 ? [arr[0]] : [];
  }

  if (n > arr.length) {
    console.error("error");
    return [];
  }

  return arr.slice(0, n);
}

const arr1 = [1, 2, 3, 4, 5, 6];
console.log(first(arr1, 5));

const arr2 = [1, 2, 3, 4];
console.log(first(arr2, 5));
