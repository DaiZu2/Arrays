function groupById(arr) {
    return arr.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {});
  }
  
  let users = [
    { id: 'misiaczek', name: "Misiaczek Misiaczkowaty", age: 20 },
    { id: 'piotus', name: "Piotus iotusiuniek", age: 24 },
    { id: 'jacek', name: "Jacek Jaworek", age: 31 },
  ];
  let usersById = groupById(users);
  
  console.log(usersById);
  