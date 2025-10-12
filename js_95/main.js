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