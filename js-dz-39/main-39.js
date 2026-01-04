// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

// Задача 1

const person = {
  name: "Андрей",
  surname: "Емельяненко",
  age: 28,
  city: "Воронеж",
};

console.log("Имя:", person.name);
console.log("Фамилия:", person.surname);
console.log("Возраст:", person.age);
console.log("Город:", person.city);

// Задача 2

function isEmpty(x) {
  return Object.keys(x).length === 0;
}

console.log(isEmpty({}));
console.log(isEmpty({ name: "Андрей" }));

// Задача 3

const task = {
  title: "Посмотреть уроки от преподователя",
  description: "Разобратся в материале",
  isCompleted: false,
  fact: "Невыполнимо бл",
};

console.log(task);

function cloneAndModify(object, modifications) {
  return { ...object, ...modifications };
}

const updatedTask = cloneAndModify(task, {
  isCompleted: true,
  fact: "Хотя... вроде что то, да понятно",
});

for (let key in updatedTask) {
  console.log(`${key}:`, updatedTask[key]);
}

// Задача 4

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

callAllMethods(myObject);

function callAllMethods(wtf) {
  for (let key in wtf) {
    if (typeof wtf[key] === "function") {
      wtf[key]();
    }
  }
}
