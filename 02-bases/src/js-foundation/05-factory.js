// const { getAge, getUUID } = require("../plugins");

const buildMakePerson = ({ getUUID, getAge }) => {
  return ({ name, birthDate }) => {
    return {
      id: getUUID(),
      name: name,
      birthDate: birthDate,
      age: getAge(birthDate),
    };
  };
};

// const obj = { name: "John", birthDate: "1998-03-12" };

// const john = buildPerson(obj);

// console.log(john);

module.exports = {
  buildMakePerson,
};
