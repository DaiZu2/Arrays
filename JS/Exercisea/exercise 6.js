let users = [
    { name: "Bozydar", age: 301 },
    { name: "Daniel", age: 4467923 },
    { name: "Janusz Duponogi", age: 2 }
];
let names = users.map(user => user.name);
console.log(names); ["Bozydar", "Daniel", "Janusz Duponogi"]