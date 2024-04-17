// const { getUserById } = require("./js-foundation/03-callbacks.js");

// const id = 2;

// getUserById(id, function (err, user) {
//   if (err) {
//     throw new Error("User not found with id ", id);
//   }

//   console.log(user);
// });

// const { getUserById } = require("./js-foundation/04-arrow");

// const id = 1;

// getUserById(id, (err, user) => {
//   if (err) {
//     throw new Error("User not found ", id);
//   }

//   console.log(user);
// });


const {buildMakePerson} = require('./js-foundation/05-factory');

const makePerson = buildMakePerson({getUUID,getAge});

const obj = {name:'John', birthdate:'1998-10-21'};

const john = makePerson(obj);