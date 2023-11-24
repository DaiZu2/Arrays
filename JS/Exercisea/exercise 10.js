function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let jonny = { name: "Someone", age: 20 };
  let piotr = { name: "SomeoneForSure", age: 40 };
  let maria = { name: "SomeoneForSureSure", age: 60 };
  
  let arr = [ jonny, piotr, maria ];
  
  alert( getAverageAge(arr) );