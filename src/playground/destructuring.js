//Object Destructuring

// const person = {
//   name: 'Ajinkya',
//   age: 29,
//   location: {
//     city: 'Melbourne',
//     temp: 66
//   }
// }
//
// const { name: firstName = 'Anonymous', age } = person;
//
// console.log(`${firstName} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
//
// console.log(`It's ${temperature} in ${city}.`);

//Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylv',
                '19147'];

const [, city, state = 'Victoria'] = address;

console.log(`You are in ${city} ${state}.`);
