// const {emailTemplate} = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring')
// console.log(emailTemplate);
// const { getUserById } = require("./js-foundation/04-arrow");

// const id = 3;

// getUserById(id, (error, user) => {
//   if (error) {
//     throw new Error(error);
//   }

//   console.log({ user });
// });

// const { getAge, getUUID } = require("./plugins");

// const { buildMakePerson } = require("./js-foundation/05-factory");

// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = { name: "John", birthDate: "1998-03-12" };

// const john = makePerson(obj);
// console.log(john);

const { getPokemonById } = require("./js-foundation/06-promises");

getPokemonById(1)
  .then((pokemon) => console.log({ pokemon }))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finalmente"));

//token de acceso
//Publicas
