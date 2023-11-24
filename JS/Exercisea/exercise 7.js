let users = [
    { name: "Andrew", surname: "Tate", id: 1 },
    { name: "Alice", surname: "James", id: 3 },
    { name: "Bob", surname: "Top", id: 4 }
];

let usersWithFullName = users.map(user => ({
    id: user.id,
    fullName: ${user.name} ${user.surname}
}));
console.log(usersWithFullName);