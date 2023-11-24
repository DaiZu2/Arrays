function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
}
let users = [
{ name: "Lukas", age: 1 },
{ name: "Matt", age: 999 },
{ name: "Andrew", age: 61 }
];
sortByAge(users);
console.log(users);