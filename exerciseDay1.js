//Observe: no return type, no type on parameters
/* function add(n1, n2) {
  return n1 + n2;
}

const sub = function (n1, n2) {
  return n1 - n2;
};

const cb = function (n1, n2, callback) {
  return (
    "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2)
  );
};

console.log(add(1, 2)); // What will this print?
console.log(add); // What will it print and what does add represent?
console.log(add(1, 2, 3)); // What will it print
console.log(add(1)); // What will it print
console.log(cb(3, 3, add)); // What will it print
console.log(cb(4, 3, sub)); // What will it print
// console.log(cb(3,3,add()));
console.log(cb(3, "hh", add)); // What will it print

function mul(n1, n2) {
  return n1 * n2;
}

console.log(cb(2, 3, mul));

console.log(6, 2, function (n1, n2) {
  return n1 / n2;
});

// Map
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// Filter
const unEvenNumbers = numbers.filter(function (number) {
  return number % 2 != 0;
});
console.log(unEvenNumbers); // [1,3,5]

// forEach
numbers.forEach(function (number) {
  console.log(number);
});

const nameArr = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

nameArr.forEach(function (name) {
  console.log(name);
});

const newArr = nameArr.filter(function (name) {
  return name.length <= 3;
});
newArr.forEach(function (name) {
  console.log(name);
});

const uppercaseArr = nameArr.map(function (name) {
  return name.toUpperCase();
});
uppercaseArr.forEach(function (name) {
  console.log(name);
});

function createNamesList(names) {
  const listNames = names.map(function (name) {
    return "<li>" + name + "</li>";
  });

  return "<ul>" + listNames.join("") + "<ul>";
}

const names = ["Lars", "Peter", "Jan", "Ian"];
const nameListHTML = createNamesList(names);
console.log(nameListHTML);
 */
const cars = [
  { id: 1, year: 1997, make: "Ford", model: "E350", price: 3000 },
  { id: 2, year: 1999, make: "Chevy", model: "Venture", price: 4900 },
  { id: 3, year: 2000, make: "Chevy", model: "Venture", price: 5000 },
  { id: 4, year: 1996, make: "Jeep", model: "Grand Cherokee", price: 4799 },
  { id: 5, year: 2005, make: "Volvo", model: "V70", price: 4799 },
];

/* const newCars = cars.filter(function (car) {
  return car.year > 1999 && car.make === "Volvo" && car.price < 5000;
});

newCars.forEach(function (car) {
  console.log(car);
}); 

function myFilter(array, callback) {
  const filteredArr = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      filteredArr.push(array[i]);
    }
  }
  return filteredArr;
}

function carFilter(car) {
 return car.year > 1999 && car.make === "Volvo" && car.price < 5000;
}

const filteredCars = myFilter(cars, carFilter);
console.log(filteredCars);
*/

/* const msgPrinter = function(msg,delay){
  setTimeout(() => console.log(msg),delay); //Observe an arrow-function
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff"); */

const employee = [
  {id: 1, name: "Fred", age: 28, department: "ex pølle shipping mand"},
  {id: 2, name: "Jeppe", age: 32, department: "Kongen af devops"}
]

delete employee.age;


for(prop in employee){
console.log(prop,employee[prop])
}